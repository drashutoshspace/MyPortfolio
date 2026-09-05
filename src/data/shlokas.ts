/**
 * The epigraph verse.
 *
 * One verse, held locally, rendered at build time. No API call: that would put
 * a third-party request on pages that currently make none, add a dependency
 * that can fail mid-visit, and send visitor IPs to someone else's server.
 *
 * The array and the selector below are kept rather than collapsed to a
 * constant, so adding a second verse is the whole change needed to turn on
 * per-page rotation. With one entry every route shows this one.
 *
 * The Sanskrit is ancient and in the public domain.
 */

export interface Shloka {
  /** Devanagari, one line. */
  deva: string;
  /** IAST transliteration, set in italic. */
  iast: string;
  /** Chapter and verse in Devanagari numerals, so the block stays in one script. */
  ref: string;
  /** For the author's reference only. Never rendered: no translation on the page. */
  gloss: string;
}

export const shlokas: Shloka[] = [
  {
    deva: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    iast: "karmaṇy-evādhikāras te mā phaleṣu kadācana",
    ref: "२.४७",
    gloss: "To the work alone you have a right, never to its fruits.",
  },
];

/**
 * Deterministic per route: a given path always shows the same verse, so pages
 * stay stable and cacheable. With a single verse this returns it every time.
 * Math.random is unavailable at build time and would defeat caching anyway.
 */
export function shlokaFor(path: string): Shloka {
  if (shlokas.length === 1) return shlokas[0];
  let h = 2166136261;
  for (let i = 0; i < path.length; i++) {
    h ^= path.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return shlokas[Math.abs(h) % shlokas.length];
}
