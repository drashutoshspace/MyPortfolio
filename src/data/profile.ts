/**
 * Single source of truth for identity. Everything that names him, his post,
 * or his affiliations reads from here, so there is exactly one place to edit
 * when he moves institution.
 *
 * Note on "IIT": always expanded on first use. He is an Indian national whose
 * own CV also contains IIT Delhi, so an unqualified "IIT" is read by a large
 * part of his network as an Indian Institute of Technology.
 */

export const profile = {
  name: "Ashutosh Mishra",
  // Used in <title> and JSON-LD. Deliberately not a tagline: it is a checkable
  // statement of post and place, not a category label.
  role: "Postdoctoral Researcher",
  lab: "Dynamic Legged Systems",
  institution: "Istituto Italiano di Tecnologia",
  institutionShort: "Istituto Italiano di Tecnologia (IIT)",
  city: "Genova",
  country: "Italy",

  /** The positioning line. One sentence, it must survive a 30-second skim,
   *  and it names the problem rather than the job title so that all four
   *  audiences (PIs, agencies, startups, grant co-applicants) see themselves. */
  positioning:
    "I build legged and modular robots that can work on the lunar surface, and the learning-based control that lets them keep working when the terrain does not cooperate.",

  /** Two paragraphs. Read after the positioning line by anyone still there. */
  bio: [
    "I am a postdoctoral researcher in the Dynamic Legged Systems lab at Istituto Italiano di Tecnologia (IIT) in Genova, working with Claudio Semini on learning-based locomotion controllers for quadrupedal robots in space exploration, under the ALTEC project. Most of my time goes into GPU-accelerated reinforcement learning and the sim-to-real transfer pipelines that decide whether a policy trained in Isaac Lab survives contact with real hardware.",
    "Before Genova I completed my doctorate at the Space Robotics Lab at Tohoku University with Kazuya Yoshida, as a Japanese Government MEXT scholar, working on MoonBot: a modular, reconfigurable robot for lunar base construction developed under JST Moonshot Goal 3. That work was field-tested at the JAXA Space Exploration Test Field in Sagamihara and in the Abukuma Cave, which we used as a stand-in for lunar cave environments.",
  ],

  email: "contact@drmishra.space",
  site: "https://drmishra.space",

  /** sameAs targets for the Person JSON-LD. These are the identity signals
   *  that disambiguate him from the other researchers sharing his name, and
   *  Scholar is currently the strongest (it carries a verified iit.it email).
   *  Both identifiers below were checked against the issuing service:
   *  ORCID 0000-0002-8595-9995 resolves to Ashutosh Mishra; Scholar
   *  KwFxQqIAAAAJ shows "PostDoc Researcher, verified email at iit.it". */
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=KwFxQqIAAAAJ",
    orcid: "https://orcid.org/0000-0002-8595-9995",
    linkedin: "https://www.linkedin.com/in/drashutoshspace/",
    github: "https://github.com/drashutoshspace",
    x: "https://twitter.com/drashutoshspace",
  },

  /** Shown in the header link row. GitHub is deliberately absent: the public
   *  repos are student projects and a keylogger, so a PI clicking through to
   *  check the RL claims finds the opposite of what the page promised. It
   *  stays in sameAs below for entity resolution, and returns to the visible
   *  row once there is a research repo worth landing on. */
  visibleLinks: ["email", "cv", "scholar", "orcid", "linkedin"] as const,

  cvPdf: "/CV_Ashutosh_Mishra.pdf",

  /** knowsAbout for JSON-LD, and the vocabulary the site should keep repeating. */
  expertise: [
    "Space robotics",
    "Legged locomotion",
    "Modular reconfigurable robots",
    "Reinforcement learning",
    "Sim-to-real transfer",
    "Lunar surface operations",
    "Field robotics",
  ],
} as const;

export type Profile = typeof profile;
