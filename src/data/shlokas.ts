/**
 * Verses from the Bhagavad Gita, chosen around work, action and skill rather
 * than sampled at random from all seven hundred: most of the text concerns
 * war, grief and metaphysics, which would sit oddly above a robotics page. The
 * selection below is thematically of a piece with the site.
 *
 * The Sanskrit itself is ancient and in the public domain.
 *
 * >> VERIFY BEFORE TRUSTING. <<
 * These were written from memory, not copied from a critical edition. Sanskrit
 * orthography is unforgiving and a wrong conjunct or a missing anusvara is a
 * visible error on a page that carries the verse for meaning. Ashutosh should
 * check every line against an edition he trusts, and correct or delete any
 * that are wrong. Deleting is safe: the rotation adapts to the list length.
 */

export interface Shloka {
  /** Devanagari, one line. */
  deva: string;
  /** IAST transliteration. */
  iast: string;
  /** Chapter and verse, in Devanagari numerals, so the epigraph stays in one script. */
  ref: string;
  /** Kept for the author's own reference. Never rendered. */
  gloss: string;
  /** Cleared once Ashutosh has checked the Devanagari against an edition. */
  unverified?: boolean;
}

export const shlokas: Shloka[] = [
  {
    // The one he asked for.
    deva: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    iast: "karmaṇy-evādhikāras te mā phaleṣu kadācana",
    ref: "२.४७",
    gloss: "To the work alone you have a right, never to its fruits.",
  },
  {
    deva: "योगः कर्मसु कौशलम्",
    iast: "yogaḥ karmasu kauśalam",
    ref: "२.५०",
    gloss: "Yoga is skill in action.",
    unverified: true,
  },
  {
    deva: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय",
    iast: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya",
    ref: "२.४८",
    gloss: "Steadfast in yoga, do your work, abandoning attachment.",
    unverified: true,
  },
  {
    deva: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्",
    iast: "uddhared ātmanātmānaṁ nātmānam avasādayet",
    ref: "६.५",
    gloss: "Lift yourself by yourself; do not let yourself sink.",
    unverified: true,
  },
  {
    deva: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्",
    iast: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt",
    ref: "३.३५",
    gloss: "Better one's own duty done imperfectly than another's done well.",
    unverified: true,
  },
  {
    deva: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्",
    iast: "na hi kaścit kṣaṇam api jātu tiṣṭhaty akarma-kṛt",
    ref: "३.५",
    gloss: "No one ever rests even for a moment without doing work.",
    unverified: true,
  },
];

/** Only verses the author has checked are eligible to render. */
export const verified = shlokas.filter((s) => !s.unverified);

/**
 * Deterministic per page: the same route always shows the same verse, so the
 * page is stable across reloads and cacheable, while different pages carry
 * different verses. A cheap string hash over the path, not Math.random, which
 * is unavailable at build time and would break caching anyway.
 */
export function shlokaFor(path: string): Shloka {
  const pool = verified.length > 0 ? verified : shlokas;
  let h = 2166136261;
  for (let i = 0; i < path.length; i++) {
    h ^= path.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return pool[Math.abs(h) % pool.length];
}
