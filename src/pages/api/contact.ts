import type { APIRoute } from "astro";

/**
 * The only on-demand route on the site. Everything else is prerendered.
 *
 * DELIVERABILITY, and why the From address looks the way it does:
 * drmishra.space publishes `p=reject; sp=reject; adkim=s; aspf=s`. Strict
 * alignment means the DKIM d= domain must be an exact FQDN match for the
 * RFC5322.From domain, or the message is rejected outright rather than
 * quarantined. So:
 *   - Verify the SUBDOMAIN mail.drmishra.space in Resend and send From an
 *     address on it. DKIM then signs d=mail.drmishra.space, which matches
 *     the From domain exactly. No change to the DMARC record is needed, and
 *     the existing anti-spoofing posture on the identity domain is preserved.
 *   - The visitor's address goes in Reply-To, never in From. Putting it in
 *     From would fail DMARC at every receiver that honours it.
 */
export const prerender = false;

const TO = import.meta.env.CONTACT_TO ?? "contact@drmishra.space";
const FROM = import.meta.env.CONTACT_FROM ?? "Contact form <noreply@mail.drmishra.space>";
const KEY = import.meta.env.RESEND_API_KEY;

const MAX = { name: 120, email: 200, intent: 60, message: 8000 } as const;

const bad = (error: string, status = 400) =>
  new Response(JSON.stringify({ error }), {
    status,
    headers: { "content-type": "application/json" },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export const POST: APIRoute = async ({ request }) => {
  if (!KEY) {
    return bad("The form is not configured yet. Please email contact@drmishra.space.", 503);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return bad("Could not read that submission.");
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    // Answer 200 so a bot learns nothing from the response.
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  const field = (key: keyof typeof MAX) => {
    const raw = payload[key];
    return typeof raw === "string" ? raw.trim().slice(0, MAX[key]) : "";
  };

  const name = field("name");
  const email = field("email");
  const intent = field("intent") || "Something else";
  const message = field("message");

  if (!name || !email || !message) {
    return bad("Please fill in your name, your email and a message.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return bad("That email address does not look right.");
  }
  // Header injection guard: newlines have no business in a Reply-To.
  if (/[\r\n]/.test(email) || /[\r\n]/.test(name)) {
    return bad("That email address does not look right.");
  }

  const subject = `[${intent}] ${name}`;
  const text = [
    `Intent:  ${intent}`,
    `Name:    ${name}`,
    `Email:   ${email}`,
    "",
    message,
  ].join("\n");

  const html = `<div style="font:15px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<table cellpadding="0" cellspacing="0" style="font:13px/1.6 ui-monospace,monospace;margin-bottom:16px">
<tr><td style="padding-right:14px;color:#767b7d">Intent</td><td>${escapeHtml(intent)}</td></tr>
<tr><td style="padding-right:14px;color:#767b7d">Name</td><td>${escapeHtml(name)}</td></tr>
<tr><td style="padding-right:14px;color:#767b7d">Email</td><td>${escapeHtml(email)}</td></tr>
</table>
<div style="white-space:pre-wrap;border-left:3px solid #c9761a;padding-left:14px">${escapeHtml(message)}</div>
</div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: `${name} <${email}>`,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("resend send failed", response.status, detail);
    return bad("That did not send. Please email contact@drmishra.space instead.", 502);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
