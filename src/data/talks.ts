/**
 * Speaking and recognition. Rendered as a horizontal scroll-snap strip on the
 * homepage.
 *
 * Deliberately not an auto-playing carousel: auto-advance moves content while
 * people are reading it, hides most of the set behind a timer, and anything
 * animating for more than five seconds needs a pause control under WCAG 2.2.2.
 * A scroll-snap strip is reachable by swipe, wheel, keyboard and screen reader,
 * and needs no JavaScript at all.
 *
 * Every entry is a fact from the CV. Where a real photograph exists it is
 * used; a paper's own figure stands in for the paper; otherwise the card
 * carries a labelled illustration, and its caption says what it depicts
 * rather than claiming a moment nobody photographed.
 */

export interface Talk {
  /** Short, used as the card heading. */
  title: string;
  where: string;
  year: string;
  /** Doubles as alt text. Describes what the image actually shows. */
  caption: string;
  src: string;
  kind?: "photo" | "figure" | "illustration";
  focus?: string;
  /** Where the card leads, when there is somewhere real to go. */
  href?: string;
  /** Photo credit and licence, where the photograph is someone else's. */
  credit?: { text: string; href: string };
}

export const talks: Talk[] = [
  {
    title: "IAF Next Generation Plenary",
    where: "IAC 2025, Sydney",
    year: "2025",
    caption:
      'Speaking at Plenary 6, "Designing the Future of Human Spaceflight", International Astronautical Congress 2025, Sydney, 1 October 2025.',
    src: "/media/talks/iac2025-plenary6-lectern.webp",
    focus: "38% 50%",
    href: "https://www.youtube.com/watch?v=ArTSq-hJdfg",
    credit: {
      text: "Photo: IAF, CC BY-NC-SA 4.0",
      href: "https://www.flickr.com/photos/iafastro/54826281298/",
    },
  },
  {
    title: "Emerging Space Leader",
    where: "International Astronautical Federation",
    year: "2025",
    caption: "Sydney Harbour, host city of the International Astronautical Congress 2025.",
    src: "/media/illustrations/talk-sydney-iac.webp",
    kind: "illustration",
  },
  {
    title: "Best Paper Award",
    where: "IEEE iSpaRo 2025, Sendai",
    year: "2025",
    caption:
      "From the award-winning paper's field trial: MoonBot driving to its target under learned locomotion and steering policies, JAXA Space Exploration Test Field.",
    src: "/media/robotics/jaxa-decrl-phase1.webp",
    focus: "50% 10%",
    href: "/publications/multi-modal-decentralized-rl-modular-lunar-robots/",
  },
  {
    title: "Space Studies Program",
    where: "International Space University, Houston",
    year: "2024",
    caption:
      "The Space Studies Program 2024 Indian delegation, hosted by the Consul General of India in Houston, 1 July 2024.",
    src: "/media/talks/ssp24-houston-delegation.webp",
    href: "/projects/international-lunar-university-ssp24/",
  },
  {
    title: "I-CON Award",
    where: "Indian Society of Remote Sensing",
    year: "2024",
    caption:
      "An Earth-observation satellite above a city: the setting of the satellite-based air pollution monitoring system the award recognised.",
    src: "/media/illustrations/talk-icon-satellite.webp",
    kind: "illustration",
  },
  {
    title: "Innovation Ambassador",
    where: "Ministry of Education, India",
    year: "2020 to present",
    caption: "A student mentoring session around an electronics prototype.",
    src: "/media/illustrations/talk-mentoring.webp",
    kind: "illustration",
    href: "/society/",
  },
];
