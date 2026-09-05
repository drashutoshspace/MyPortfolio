# drmishra.space

Personal research site for Ashutosh Mishra, postdoctoral researcher in the
Dynamic Legged Systems lab at Istituto Italiano di Tecnologia (IIT), Genova.

## Stack

Astro 7, static output, deployed on Vercel behind Cloudflare DNS. Tailwind 4 is
present for its reset and utilities; the visual system lives in
`src/styles/global.css`. Fonts are self-hosted via Fontsource, so the site makes
no request to Google's font CDN.

Every page is prerendered HTML and the build ships **zero bytes of client
JavaScript** except the contact form's submit handler. That is deliberate:
Google Scholar's inclusion guidelines want static markup carrying `citation_*`
meta tags, and no major AI crawler executes JavaScript.

## Editing content

All content is typed data. There is no CMS and no content-layer library.

| File | Holds |
| --- | --- |
| `src/data/profile.ts` | Name, post, positioning line, bio, links |
| `src/data/publications.ts` | Every paper. Adding one generates its detail page, sitemap entry and Scholar tags |
| `src/data/research.ts` | The three research themes |
| `src/data/cv.ts` | Appointments, education, experience, awards, skills, field campaigns |

## The hero image

`src/pages/index.astro` has a `heroMedia` constant, currently `null`. Point it at
a file in `public/media/` and the homepage switches from the typographic plate to
a full-bleed field frame with the name set small beneath it, which is the
intended composition.

## Enabling the contact form

The form renders only when a sending provider is configured, so the site never
ships a control that fails on submit. To switch it on:

1. Create a Resend account.
2. Verify the **subdomain** `mail.drmishra.space`, not the root domain.
   `drmishra.space` publishes `p=reject; sp=reject; adkim=s; aspf=s`. Strict
   alignment means the DKIM `d=` domain must exactly match the From domain.
   Verifying the subdomain and sending from `noreply@mail.drmishra.space`
   satisfies that with **no change to the DMARC record**.
3. Add `RESEND_API_KEY` to the Vercel project, then redeploy.

`CONTACT_TO` and `CONTACT_FROM` are optional overrides.

## The email address, and bots

The address is deliberately **plain text and crawler-readable**. `src/components/Email.astro`
wraps every instance in Cloudflare's `<!--email_off-->` guard so Scrape Shield cannot rewrite
it into a JavaScript-decoded `__cf_email__` span.

That is a considered trade, not an oversight. Any obfuscation that defeats a text-parsing
harvester defeats a text-parsing crawler too, because it is the same operation: Googlebot,
Google Scholar, GPTBot and ClaudeBot would all read the blob instead of the address. Since
a visible, copyable address is the site's primary contact channel, the address stays readable
and spam is handled where filters are actually good, at the mailbox.

**Defence in depth, in order of how much work each does:**

1. **Destination mailbox filtering.** `contact@drmishra.space` is forwarded by Cloudflare Email
   Routing to a real mailbox. That mailbox's spam filter is the main defence and is far better
   than any page-level trick.
2. **The contact form** as an alternative route, with a honeypot field and server-side length
   and header-injection guards in `src/pages/api/contact.ts`.
3. **A Cloudflare rate-limit rule on `/api/contact`.** Free tier includes one rule. Set it in the
   Cloudflare dashboard under Security, Rate limiting rules: match path `/api/contact`, method
   POST, and cap at roughly 5 requests per minute per IP.

Do NOT re-enable Cloudflare Scrape Shield email obfuscation. It will silently break the address
for every crawler that matters.

## Commands

```
npm run dev            # local dev server
npm run build          # static build into dist/
npm run vc -- <cmd>    # vercel CLI, scoped to the right account
```

`npm run vc` matters: this machine has two Vercel accounts, and the flagless
`vercel` command targets the other one.
