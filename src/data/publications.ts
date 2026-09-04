/**
 * Publications, typed by hand from the CV. No content-layer library and no
 * citation-enrichment pipeline: at this volume a cron job hitting Crossref
 * would be a moving part on a repo that gets opened a few times a year.
 *
 * Every detail page generated from this file is the site's real SEO asset:
 * it is what wins exact-title queries and what makes the work eligible for
 * Google Scholar inclusion via citation_* meta tags.
 *
 * `summary` describes what the work is. It deliberately does not assert
 * results, numbers or improvements that are not on the CV.
 */

export type PubStatus = "published" | "in-review" | "in-submission";

export interface Publication {
  slug: string;
  title: string;
  venue: string;
  /** Short code for the dense list. Kept in tabular mono. */
  venueShort: string;
  year: number;
  /** Author list in publication order. `me: true` marks him for bolding. */
  authors: { name: string; me?: boolean; equal?: boolean }[];
  doi?: string;
  /** Used when there is no DOI. */
  urls?: { label: string; href: string }[];
  status: PubStatus;
  /** Peer-reviewed? The IAC 2024 item is not, and saying so is the honest move. */
  peerReviewed: boolean;
  award?: string;
  equalAuthorship?: boolean;
  summary: string;
  topics: string[];
}

export const publications: Publication[] = [
  {
    slug: "moonbot-modular-reconfigurable-robot-moon-base",
    title:
      "MoonBot: Modular and On-demand Reconfigurable Robot towards Moon Base Construction",
    venue: "IEEE Transactions on Field Robotics (T-FR)",
    venueShort: "IEEE T-FR",
    year: 2025,
    authors: [
      { name: "Kentaro Uno", equal: true },
      { name: "Elian Neppel", equal: true },
      { name: "Gustavo H. Diaz", equal: true },
      { name: "Ashutosh Mishra", me: true, equal: true },
      { name: "Shamistan Karimov", equal: true },
      { name: "A. Sejal Jain" },
      { name: "Ayesha Habib" },
      { name: "Pascal Pama" },
      { name: "Hazal Gozbasi" },
      { name: "Shreya Santra" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/TFR.2025.3624346",
    status: "published",
    peerReviewed: true,
    equalAuthorship: true,
    summary:
      "The full MoonBot platform: a modular robot whose limbs and modules can be recombined on demand into different machines for lunar base construction, developed under JST Moonshot Goal 3 and validated in field conditions.",
    topics: ["Modular robotics", "Lunar construction", "Field robotics"],
  },
  {
    slug: "human-in-loop-manipulator-control-uncertain-assembly",
    title:
      "Enhancing Autonomous Manipulator Control with Human-in-loop for Uncertain Assembly Environments",
    venue: "IEEE International Conference on Automation Science and Engineering (CASE)",
    venueShort: "IEEE CASE",
    year: 2025,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Shreya Santra" },
      { name: "Hazal Gozbasi" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/CASE.2025.11163924",
    status: "published",
    peerReviewed: true,
    summary:
      "Human-in-the-loop verification and validation of UR16e manipulator control for precise assembly and deployment under uncertain terrain and visual conditions, using ArUco markers and OpenCV.",
    topics: ["Manipulation", "Human-in-the-loop", "Assembly"],
  },
  {
    slug: "multi-modal-decentralized-rl-modular-lunar-robots",
    title:
      "Multi-Modal Decentralized Reinforcement Learning for Modular Reconfigurable Lunar Robots",
    venue: "IEEE International Conference on Space Robotics (iSpaRo)",
    venueShort: "IEEE iSpaRo",
    year: 2025,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Shreya Santra" },
      { name: "Elian Neppel" },
      { name: "Edoardo M. Rossi Lombardi" },
      { name: "Shamistan Karimov" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.48550/arXiv.2510.20347",
    status: "published",
    peerReviewed: true,
    award: "Best Research Paper Award, IEEE iSpaRo 2025, Sendai, Japan",
    summary:
      "A decentralized reinforcement learning approach for robots whose morphology changes: each module learns to act on local, multi-modal observation rather than from a central controller, so the same policy set survives reconfiguration.",
    topics: ["Reinforcement learning", "Modular robotics", "Decentralized control"],
  },
  {
    slug: "multi-limb-synchronization-motion-stack-hypersphere",
    title:
      "Robust and Modular Multi-Limb Synchronization in Motion Stack for Space Robots with Trajectory Clamping via Hypersphere",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    venueShort: "IEEE/RSJ IROS",
    year: 2025,
    authors: [
      { name: "Elian Neppel" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Shamistan Karimov" },
      { name: "Kentaro Uno" },
      { name: "Shreya Santra" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/IROS60139.2025.11246735",
    status: "published",
    peerReviewed: true,
    summary:
      "Keeping multiple limbs of a space robot synchronized when any of them may be added, removed or delayed, using hypersphere trajectory clamping to bound the motion each limb is allowed to command.",
    topics: ["Motion planning", "Modular robotics", "Control"],
  },
  {
    slug: "distributed-heterogeneous-modularity-moonbots",
    title:
      "Designing for Distributed Heterogeneous Modularity: On Software Architecture and Deployment of MoonBots",
    venue: "IEEE International Conference on Space Robotics (iSpaRo)",
    venueShort: "IEEE iSpaRo",
    year: 2025,
    authors: [
      { name: "Elian Neppel" },
      { name: "Shamistan Karimov" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Gustavo Hernan Diaz Huenupan" },
      { name: "Hazal Gozbasi" },
      { name: "Kentaro Uno" },
      { name: "Shreya Santra" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.48550/arXiv.2511.01437",
    status: "published",
    peerReviewed: true,
    summary:
      "The software architecture question behind modular hardware: how to deploy and coordinate software across heterogeneous modules that do not know in advance what they will be attached to.",
    topics: ["Software architecture", "Modular robotics", "Systems"],
  },
  {
    slug: "modular-bucket-drum-excavator-lunar-isru",
    title: "Design and Development of a Modular Bucket Drum Excavator for Lunar ISRU",
    venue: "IEEE International Conference on Space Robotics (iSpaRo)",
    venueShort: "IEEE iSpaRo",
    year: 2025,
    authors: [
      { name: "Simon Giel" },
      { name: "James Michael Hurrell" },
      { name: "Shreya Santra" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.48550/arXiv.2511.00492",
    status: "published",
    peerReviewed: true,
    summary:
      "A bucket drum excavator built as a MoonBot module, so that regolith excavation for in-situ resource utilisation becomes one configuration of the platform rather than a separate purpose-built machine.",
    topics: ["ISRU", "Excavation", "Modular robotics"],
  },
  {
    slug: "mlp-rf-hybrid-model-gan-hemt-parameter-estimation",
    title: "MLP-RF Based Hybrid ML-NN Model for GaN HEMT Parameter Estimation",
    venue: "International Journal of RF and Microwave Computer-Aided Engineering",
    venueShort: "IJRFMCAE",
    year: 2022,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Samriddhi Raut" },
      { name: "Khushwant Sehra" },
      { name: "Raghvendra Pratap Singh" },
      { name: "Shweta Wadhera" },
      { name: "Poonam Kasturi" },
      { name: "Geetika Jain Saxena" },
      { name: "Manoj Saxena" },
    ],
    doi: "10.1002/mmce.23191",
    status: "published",
    peerReviewed: true,
    summary:
      "A hybrid multilayer-perceptron and random-forest model for estimating GaN HEMT device parameters. From his earlier semiconductor device modelling work at the University of Delhi.",
    topics: ["Machine learning", "Semiconductor devices"],
  },
  {
    slug: "digital-image-watermarking-arnold-memristive-oscillators",
    title:
      "Robust and Secure Digital Image Watermarking Technique Using Arnold Transform and Memristive Chaotic Oscillators",
    venue: "IEEE Access",
    venueShort: "IEEE Access",
    year: 2021,
    authors: [
      { name: "Khushwant Sehra" },
      { name: "Samriddhi Raut" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Poonam Kasturi" },
      { name: "Shweta Wadhera" },
      { name: "Geetika Jain Saxena" },
      { name: "Manoj Saxena" },
    ],
    doi: "10.1109/access.2021.3079319",
    status: "published",
    peerReviewed: true,
    summary:
      "An image watermarking scheme combining the Arnold transform with memristive chaotic oscillators. Earlier work, and currently his most-cited paper.",
    topics: ["Signal processing", "Security"],
  },
  {
    slug: "hybrid-nn-radiation-damage-gan-hemts",
    title: "Hybrid NN Model to Predict the Radiation Damage in GaN HEMTs",
    venue: "IBM IEEE CAS/EDS AI Compute Symposium",
    venueShort: "IBM IEEE CAS/EDS",
    year: 2021,
    authors: [
      { name: "Samriddhi Raut" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Khushwant Sehra" },
      { name: "Raghvendra Pratap Singh" },
      { name: "Shweta Wadhera" },
      { name: "Poonam Kasturi" },
      { name: "Geetika Jain Saxena" },
      { name: "Manoj Saxena" },
    ],
    // No DOI was issued for this symposium item; the poster and programme
    // are the citable record.
    urls: [
      {
        label: "Poster (PDF)",
        href: "https://www.zurich.ibm.com/pdf/aics/3.16_Mishra_DDUC_AICS2021_Poster.pdf",
      },
      {
        label: "Symposium programme",
        href: "https://www.zurich.ibm.com/thinklab/AIcomputesymposium.html",
      },
    ],
    status: "published",
    peerReviewed: true,
    summary:
      "A neural-network model predicting radiation-induced damage in GaN HEMTs, presented at the IBM IEEE CAS/EDS AI Compute Symposium.",
    topics: ["Machine learning", "Semiconductor devices"],
  },
  {
    slug: "memristor-cryptographic-information-processing",
    title:
      "Memristor Based Cryptographic Information Processing for Secured Communication Systems",
    venue: "International Conference on Devices, Circuits and Systems (ICDCS)",
    venueShort: "ICDCS",
    year: 2020,
    authors: [{ name: "Ashutosh Mishra", me: true }],
    doi: "10.1109/icdcs48716.2020.243573",
    status: "published",
    peerReviewed: true,
    summary:
      "Memristor-based cryptographic information processing for secure communication systems.",
    topics: ["Security", "Circuits"],
  },
  {
    slug: "international-lunar-university-ssp24",
    title: "International Lunar University",
    venue: "International Astronautical Congress (IAC) 2024",
    venueShort: "IAC",
    year: 2024,
    authors: [{ name: "Ashutosh Mishra", me: true }],
    doi: "10.52202/078357-0031",
    status: "published",
    peerReviewed: false,
    summary:
      "The International Lunar University proposal from the International Space University Space Studies Program 2024, hosted at NASA Johnson Space Center and Rice University, where he led the project management team and served as lead editor under Dr. Jacob Cohen, Chief Scientist at NASA Ames.",
    topics: ["Space policy", "Outreach"],
  },

  /* ---- not yet published ---------------------------------------------- */

  {
    slug: "distributed-multi-robot-lunar-cargo-transportation",
    title:
      "Distributed Multi Robot Lunar Cargo Transportation via Phase Decomposed Reinforcement Learning",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    venueShort: "IEEE/RSJ IROS",
    year: 2026,
    authors: [{ name: "Ashutosh Mishra", me: true }],
    status: "in-review",
    peerReviewed: true,
    summary:
      "Decomposing lunar cargo transport into phases that several robots can learn and execute independently.",
    topics: ["Reinforcement learning", "Multi-agent systems"],
  },
  {
    slug: "robogene-modular-drl-framework",
    title: "RoboGene: Modular DRL Framework for Reconfigurable Lunar Robots",
    venue: "IEEE Access",
    venueShort: "IEEE Access",
    year: 2026,
    authors: [{ name: "Ashutosh Mishra", me: true }],
    status: "in-submission",
    peerReviewed: true,
    summary:
      "A deep reinforcement learning framework built around reconfiguration as a first-class property rather than an exception.",
    topics: ["Reinforcement learning", "Modular robotics"],
  },
  {
    slug: "moonbot-apex-agentic-planning-execution",
    title: "MoonBot APEX: Agentic Planning and Execution for Modular Lunar Robots",
    venue: "IEEE Robotics and Automation Letters (RA-L)",
    venueShort: "IEEE RA-L",
    year: 2026,
    authors: [{ name: "Ashutosh Mishra", me: true }],
    urls: [{ label: "Demo video", href: "https://youtu.be/wrkr4xLJ7zM" }],
    status: "in-submission",
    peerReviewed: true,
    summary:
      "Agentic planning and execution for modular lunar robots, field-validated at the JAXA Space Exploration Test Field in Sagamihara under Moonshot Goal 3.",
    topics: ["Planning", "Autonomy", "Modular robotics"],
  },
];

export const published = publications.filter((p) => p.status === "published");
export const pending = publications.filter((p) => p.status !== "published");
export const peerReviewedCount = publications.filter(
  (p) => p.status === "published" && p.peerReviewed,
).length;

export const byYear = () => {
  const groups = new Map<number, Publication[]>();
  for (const p of published) {
    if (!groups.has(p.year)) groups.set(p.year, []);
    groups.get(p.year)!.push(p);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]);
};

export const getPublication = (slug: string) =>
  publications.find((p) => p.slug === slug);
