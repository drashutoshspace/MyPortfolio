/**
 * Speaking, panels and recognition. Rendered as a horizontal scroll-snap strip
 * on the homepage.
 *
 * Deliberately not an auto-playing carousel: auto-advance moves content while
 * people are reading it, hides most of the set behind a timer, and anything
 * animating for more than five seconds needs a pause control under WCAG 2.2.2.
 * A scroll-snap strip is reachable by swipe, wheel, keyboard and screen reader,
 * and needs no JavaScript at all.
 *
 * Every entry is a fact from the CV. Add `src` once the photographs land.
 */

export interface Talk {
  /** Short, used as the card heading. */
  title: string;
  where: string;
  year: string;
  /** What the photograph should show. Doubles as alt text once `src` is set. */
  caption: string;
  src?: string;
}

export const talks: Talk[] = [
  {
    title: "IAF Next Generation Plenary",
    where: "IAC 2025, Sydney",
    year: "2025",
    caption:
      "Speaking as an invited panelist at the IAF Next Generation Plenary, International Astronautical Congress 2025, Sydney.",
  },
  {
    title: "Emerging Space Leader",
    where: "International Astronautical Federation",
    year: "2025",
    caption:
      "Recognised by the International Astronautical Federation as an Emerging Space Leader, Sydney.",
  },
  {
    title: "Best Research Paper",
    where: "IEEE iSpaRo 2025, Sendai",
    year: "2025",
    caption:
      "Presenting the Best Research Paper on multi-modal decentralized reinforcement learning at IEEE iSpaRo 2025, Sendai.",
  },
  {
    title: "Space Studies Program",
    where: "NASA Johnson Space Center, Houston",
    year: "2024",
    caption:
      "With the International Space University Space Studies Program 2024 team at NASA Johnson Space Center, Houston.",
  },
  {
    title: "I-CON Award",
    where: "Indian Society of Remote Sensing, ISRO",
    year: "2024",
    caption:
      "Receiving the I-CON Award from the Indian Society of Remote Sensing and ISRO, for satellite-based air pollution monitoring.",
  },
  {
    title: "Innovation Ambassador",
    where: "Ministry of Education, Government of India",
    year: "2020",
    caption:
      "Mentoring as an Innovation Ambassador for the Ministry of Education's Innovation Cell, India.",
  },
];
