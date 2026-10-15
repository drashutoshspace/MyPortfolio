/**
 * Work outside the lab: Helping Hut, and the smaller strands of mentoring and
 * outreach that sit next to it.
 *
 * Every fact here comes from a source that can be checked: Helping Hut's own
 * site (helpinghutngo.in, its team page lists my role), its annual magazines,
 * press coverage it archives, and the CV. Figures are Helping Hut's, quoted
 * with the date it gives them. Programme photographs are Helping Hut's and are
 * credited as such; nothing here says I was on the ground at an event unless a
 * source does.
 */

export const helpingHut = {
  name: "Helping Hut",
  legalName: "HELPING HUT for Social Welfare Service",
  site: "https://helpinghutngo.in",
  role: "Technical Lead and Advisor",
  founded: "July 2020",
  mission:
    "supporting the underprivileged by ending beggary through skill-building, assisting with education, and offering essential aid to those in need",
  /** Helping Hut's homepage figures, "as of September 2026". */
  figures: [
    { value: "85,000+", label: "lives impacted" },
    { value: "25,100+", label: "meals and essentials distributed" },
    { value: "4,025+", label: "hours of education" },
    { value: "2,100+", label: "active volunteers" },
  ],
  figuresAsOf: "September 2026",
};

/** What the platform I built for Helping Hut actually does. */
export const platformFeatures = [
  { title: "Volunteers", body: "Sign-up, city teams with roles, and a dashboard for each volunteer." },
  { title: "Field days", body: "On-site QR check-in, so hours are logged where the work happens." },
  { title: "Certificates", body: "Volunteering certificates that anyone can verify online." },
  { title: "Donations", body: "One-off and monthly giving, with receipts issued automatically." },
  { title: "Record", body: "Gallery, annual magazines and an archive of press coverage." },
  { title: "Data protection", body: "Consent and data handling under India's DPDP Act." },
];

export interface Programme {
  slug: string;
  title: string;
  when: string;
  where: string;
  body: string;
  image: { src: string; alt: string; focus?: string };
  href?: string;
}

export const programmes: Programme[] = [
  {
    slug: "gyankutir",
    title: "GyanKutir, a free village library",
    when: "Opened 10 July 2026",
    where: "Gopalpura, Jalaun, Uttar Pradesh",
    body: "A free, open reading room in a village where students had been travelling 10 to 15 km to find a quiet place to study. It was built without a government grant: every book, shelf and fan came from volunteers and donors. I built its web page and the pledge form for books and furniture.",
    image: {
      src: "/media/society/gyankutir-opening-day.webp",
      alt: "Villagers walking in under the GyanKutir banner on the library's opening day.",
    },
    href: "https://helpinghutngo.in/gyankutir",
  },
  {
    slug: "gramsutr",
    title: "GramSutr, a three-day village camp",
    when: "13 to 15 March 2026",
    where: "Gopalpura, Jalaun, Uttar Pradesh",
    body: "Education, health and hygiene workshops, a blood-donation camp and help registering for government schemes, supported by the Jalaun District Administration. Local press reported twenty young people donating blood. GyanKutir is the camp's permanent legacy.",
    image: {
      src: "/media/society/gramsutr-task-force.webp",
      alt: "The GramSutr volunteer team on Gopalpura's main street, holding the Helping Hut banner.",
    },
    href: "https://helpinghutngo.in/gramsutr",
  },
  {
    slug: "udaan",
    title: "Udaan Street School",
    when: "Since 2020",
    where: "Delhi, Sonipat and other cities",
    body: "Free classes for street and slum children, taught by volunteers in lanes, parks and community spaces. Helping Hut's 2023 magazine counted more than 285 students.",
    image: {
      src: "/media/society/udaan-lane-class.webp",
      alt: "A volunteer teaching a class of children seated on mats in a narrow residential lane.",
    },
    href: "https://helpinghutngo.in/our-work/udaan-street-school",
  },
  {
    slug: "drives",
    title: "Relief drives",
    when: "Since 2020",
    where: "Across Helping Hut's city teams",
    body: "Cooked meals, ration kits, clothes, blankets and hygiene kits. In the 2021 COVID wave, the Delhi, Patna and Kota teams distributed more than 500 food packets.",
    image: {
      src: "/media/society/meal-distribution.webp",
      alt: "Volunteers serving freshly cooked food into rows of plates at a roadside table.",
      focus: "50% 60%",
    },
    href: "https://helpinghutngo.in/our-work/drives",
  },
];

/** A strip of further programme photographs, all Helping Hut's. */
export const moreFromTheField = [
  { src: "/media/society/gyankutir-reading-room.webp", caption: "The GyanKutir reading room, shelved with donated books." },
  { src: "/media/society/gramsutr-wall-mural.webp", caption: "Volunteers at the GramSutr wall mural in Gopalpura, March 2026." },
  { src: "/media/society/gramsutr-with-officials.webp", caption: "Helping Hut volunteers with local officials and village elders, GramSutr 2026." },
  { src: "/media/society/hygiene-kit-drive.webp", caption: "A hygiene-kit distribution drive, Delhi." },
  { src: "/media/society/cleanliness-drive.webp", caption: "A roadside cleanliness drive." },
  { src: "/media/society/udaan-park-class.webp", caption: "An open-air Udaan Street School class, 2022." },
  { src: "/media/society/gyankutir-volunteer-team.webp", caption: "Team GyanKutir at the library's opening, July 2026." },
];
