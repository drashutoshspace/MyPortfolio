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

export type PubStatus = "published" | "accepted" | "in-review" | "in-submission";

/** Drives whether the citation renders as @article or @inproceedings, and
 *  whether the IEEE string says "in <venue>". */
export type PubKind = "journal" | "conference";

export interface Publication {
  slug: string;
  title: string;
  venue: string;
  /** Short code for the dense list. Kept in tabular mono. */
  venueShort: string;
  year: number;
  /** Author list in publication order. `me: true` marks him for bolding.
   *  `surname` is only needed where the family name is more than one word and
   *  the last-token heuristic would split it. */
  authors: { name: string; me?: boolean; equal?: boolean; surname?: string }[];
  kind: PubKind;
  doi?: string;
  /** Used when there is no DOI. */
  urls?: { label: string; href: string }[];
  status: PubStatus;
  /** Peer-reviewed? The IAC 2024 item is not, and saying so is the honest move. */
  peerReviewed: boolean;
  award?: string;
  equalAuthorship?: boolean;
  /** Set where the published author list is longer than the site shows in
   *  full, e.g. a 32-author team report. The full list is still emitted to
   *  citation tags and BibTeX. */
  manyAuthors?: boolean;
  /** Work on the MoonBot platform. Drives the publication list on
   *  /research/moonbot/ and the hub link on each publication page, so the
   *  three lists that used to be typed separately cannot drift. */
  platform?: "moonbot";
  summary: string;
  topics: string[];
}

export const publications: Publication[] = [
  {
    slug: "moonbot-modular-reconfigurable-robot-moon-base",
    title:
      "MoonBot: Modular and On-Demand Reconfigurable Robot Toward Moon Base Construction",
    venue: "IEEE Transactions on Field Robotics (T-FR)",
    venueShort: "IEEE T-FR",
    kind: "journal",
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
    urls: [{ label: "arXiv preprint", href: "https://arxiv.org/abs/2512.21853" }],
    status: "published",
    peerReviewed: true,
    equalAuthorship: true,
    platform: "moonbot",
    summary:
      "The MoonBot platform: limbs, wheels and tools that recombine on demand into whichever machine a lunar construction task needs, developed under JST Moonshot Goal 3 and shown in a preliminary field demonstration of lunar infrastructure tasks.",
    topics: ["Modular robotics", "Lunar construction", "Field robotics"],
  },
  {
    slug: "human-in-loop-manipulator-control-uncertain-assembly",
    title:
      "Enhancing Autonomous Manipulator Control with Human-in-loop for Uncertain Assembly Environments",
    venue: "IEEE International Conference on Automation Science and Engineering (CASE)",
    venueShort: "IEEE CASE",
    kind: "conference",
    year: 2025,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Shreya Santra" },
      { name: "Hazal Gozbasi" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/CASE58245.2025.11163924",
    urls: [{ label: "arXiv preprint", href: "https://arxiv.org/abs/2507.11006" }],
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
    kind: "conference",
    year: 2025,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Shreya Santra" },
      { name: "Elian Neppel" },
      { name: "Edoardo M. Rossi Lombardi", surname: "Rossi Lombardi" },
      { name: "Shamistan Karimov" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/ISPARO66239.2025.11436148",
    urls: [
      { label: "arXiv preprint", href: "https://arxiv.org/abs/2510.20347" },
      { label: "Video", href: "https://www.youtube.com/watch?v=6kRCybQMMCI" },
    ],
    status: "published",
    peerReviewed: true,
    platform: "moonbot",
    award: "Best Paper Award in Planetary Robotics, IEEE iSpaRo 2025, Sendai, Japan",
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
    kind: "conference",
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
    urls: [
      { label: "arXiv preprint", href: "https://arxiv.org/abs/2507.03934" },
      { label: "Video", href: "https://www.youtube.com/watch?v=MtAXq8mNaiw" },
      { label: "Code: Motion Stack", href: "https://github.com/2lian/Motion-Stack" },
    ],
    status: "published",
    platform: "moonbot",
    peerReviewed: true,
    summary:
      "Keeping multiple limbs of a space robot synchronized when any of them may be added, removed or delayed, using hypersphere trajectory clamping to bound the motion each limb is allowed to command.",
    topics: ["Motion planning", "Modular robotics", "Control"],
  },
  {
    slug: "distributed-heterogeneous-modularity-moonbots",
    title:
      "Designing for Distributed Heterogeneous Modularity: On Software Architecture and Deployment of the MoonBots",
    venue: "IEEE International Conference on Space Robotics (iSpaRo)",
    venueShort: "IEEE iSpaRo",
    kind: "conference",
    year: 2025,
    authors: [
      { name: "Elian Neppel" },
      { name: "Shamistan Karimov" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Gustavo H. Diaz" },
      { name: "Hazal Gozbasi" },
      { name: "Shreya Santra" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/ISPARO66239.2025.11436187",
    urls: [
      { label: "arXiv preprint", href: "https://arxiv.org/abs/2511.01437" },
      { label: "Video", href: "https://www.youtube.com/watch?v=6XAfiojazxg" },
    ],
    status: "published",
    platform: "moonbot",
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
    kind: "conference",
    year: 2025,
    authors: [
      { name: "Simon Giel" },
      { name: "James Michael Hurrell" },
      { name: "Shreya Santra" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    doi: "10.1109/ISPARO66239.2025.11437320",
    urls: [
      { label: "arXiv preprint", href: "https://arxiv.org/abs/2511.00492" },
      { label: "Video", href: "https://www.youtube.com/watch?v=N0m7cj-SgxQ" },
    ],
    status: "published",
    platform: "moonbot",
    peerReviewed: true,
    summary:
      "A bucket drum excavator built as a MoonBot module, so that regolith excavation for in-situ resource utilisation becomes one configuration of the platform rather than a separate purpose-built machine.",
    topics: ["ISRU", "Excavation", "Modular robotics"],
  },
  {
    slug: "mlp-rf-hybrid-model-gan-hemt-parameter-estimation",
    title:
      "Multilayer Perceptron-Random Forest Based Hybrid Machine Learning-Neural Network Model for GaN High Electron Mobility Transistor's Parameter Estimations",
    venue: "International Journal of RF and Microwave Computer-Aided Engineering",
    venueShort: "IJRFMCAE",
    kind: "journal",
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
      "A hybrid multilayer-perceptron and random-forest model for estimating GaN HEMT device parameters. From my earlier semiconductor device modelling work at the University of Delhi.",
    topics: ["Machine learning", "Semiconductor devices"],
  },
  {
    slug: "digital-image-watermarking-arnold-memristive-oscillators",
    title:
      "Robust and Secure Digital Image Watermarking Technique Using Arnold Transform and Memristive Chaotic Oscillators",
    venue: "IEEE Access",
    venueShort: "IEEE Access",
    kind: "journal",
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
      "An image watermarking scheme combining the Arnold transform with memristive chaotic oscillators, from my earlier work on secure signal processing.",
    topics: ["Signal processing", "Security"],
  },
  {
    slug: "hybrid-nn-radiation-damage-gan-hemts",
    title: "Hybrid NN Model to Predict the Radiation Damage in GaN HEMTs",
    venue: "IBM IEEE CAS/EDS AI Compute Symposium",
    venueShort: "IBM IEEE CAS/EDS",
    kind: "conference",
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
        href: "https://www.zurich.ibm.com/pdf/aics/3.16_Mishra_Ashutosh_DDUC_AICS2021_Poster.pdf",
      },
      {
        label: "Symposium programme",
        href: "https://www.zurich.ibm.com/thinklab/AIcomputesymposium2021.html",
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
    kind: "conference",
    year: 2020,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Khushwant Sehra" },
      { name: "Sahil Sahil" },
      { name: "Ajay Joshi" },
      { name: "Poonam Kasturi" },
      { name: "Manoj Saxena" },
    ],
    doi: "10.1109/icdcs48716.2020.243573",
    status: "published",
    peerReviewed: true,
    summary:
      "Memristor-based cryptographic information processing for secure communication systems.",
    topics: ["Security", "Circuits"],
  },
  {
    slug: "international-lunar-university-ssp24",
    title: "International Lunar University: The Dawn of Interplanetary Education",
    venue: "International Astronautical Congress (IAC) 2024, IAF Space Exploration Symposium",
    venueShort: "IAC",
    kind: "conference",
    year: 2024,
    manyAuthors: true,
    authors: [
      { name: "Adam Hanlon" },
      { name: "Alba Badia Rifà", surname: "Badia Rifà" },
      { name: "Alejandro J. Garcia Morales", surname: "Garcia Morales" },
      { name: "Annemarie Schuite" },
      { name: "Ashutosh Mishra", me: true },
      { name: "Austin Phillips" },
      { name: "Bénédicte Darbon" },
      { name: "Danny Tjokrosetio" },
      { name: "Eugene Rotherham" },
      { name: "Gabriele Del Zompo", surname: "Del Zompo" },
      { name: "Gonzalo Guerrero Rodriguez", surname: "Guerrero Rodriguez" },
      { name: "Hannah Bradley" },
      { name: "Hilal Albusaidi" },
      { name: "Hinako Tanaka" },
      { name: "Ian Van Den Broek", surname: "Van Den Broek" },
      { name: "Ismael Tito Freire González", surname: "Freire González" },
      { name: "Konrad Bojar" },
      { name: "Laura Antonia Cerbone" },
      { name: "Madalina Alexandra Grozav" },
      { name: "Matilda Khoshaba" },
      { name: "Matteo Rossi" },
      { name: "Murray Mackay" },
      { name: "Niamh O'Neill-Berest" },
      { name: "One Mikulskyte" },
      { name: "Pierre-Frédéric Siaud" },
      { name: "Rim Ghanim" },
      { name: "Sarah Lejczak" },
      { name: "Tymoteusz Kraski" },
      { name: "Vittorio Di Pietrantonio", surname: "Di Pietrantonio" },
      { name: "Meritxell Lorber" },
      { name: "Dan Rasky" },
      { name: "Jacob Cohen" },
    ],
    doi: "10.52202/078357-0031",
    status: "published",
    peerReviewed: false,
    summary:
      "The International Lunar University proposal from the International Space University Space Studies Program 2024, hosted at NASA Johnson Space Center and Rice University, where I led the project management team and served as lead editor, supervised by Jacob Cohen, Chief Scientist at NASA Ames.",
    topics: ["Space policy", "Outreach"],
  },

  {
    slug: "evolutionary-algorithms-adaptive-modular-robotics-lunar",
    title: "Harnessing Evolutionary Algorithms for Adaptive Modular Robotics Design in Lunar Missions",
    venue: "International Astronautical Congress (IAC) 2025, IAF Space Exploration Symposium",
    venueShort: "IAC",
    kind: "conference",
    year: 2025,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Kangsan Kim" },
      { name: "Shreya Santra" },
    ],
    doi: "10.52202/083076-0098",
    status: "published",
    peerReviewed: false,
    summary:
      "Evolutionary algorithms for choosing the design of a modular robot to fit a lunar mission, rather than fixing the body first and fitting the task to it.",
    topics: ["Modular robotics", "Evolutionary algorithms"],
  },
  {
    slug: "gnn-multi-robot-path-planning-planetary-exploration",
    title:
      "Coordinated Multi-Robot Path Planning Utilizing Learning-based Approaches with Graph Neural Networks for Planetary Exploration",
    venue: "International Astronautical Congress (IAC) 2024, IAF Space Systems Symposium",
    venueShort: "IAC",
    kind: "conference",
    year: 2024,
    authors: [
      { name: "Shreya Santra" },
      { name: "Ashutosh Mishra", me: true },
      { name: "A. Sejal Jain" },
    ],
    doi: "10.52202/078372-0095",
    status: "published",
    peerReviewed: false,
    summary:
      "Graph neural networks for coordinating the paths of several robots exploring planetary terrain together.",
    topics: ["Multi-agent systems", "Planning"],
  },
  {
    slug: "chandrayaan-2-ohrc-crater-boulder-detection",
    title:
      "Automated Detection and Segmentation of Craters and Boulders in Chandrayaan-2 Orbiter High-Resolution Camera (OHRC) Images",
    venue: "IAF Global Conference on Space Exploration (GLEX) 2025, AI Impact and Autonomy on Space Exploration",
    venueShort: "GLEX",
    kind: "conference",
    year: 2025,
    authors: [
      { name: "Shreya Santra" },
      { name: "Abhishek Mishra" },
      { name: "Ashutosh Mishra", me: true },
    ],
    doi: "10.52202/080565-0008",
    status: "published",
    peerReviewed: false,
    summary:
      "Automated detection and segmentation of craters and boulders in high-resolution lunar orbiter imagery from Chandrayaan-2.",
    topics: ["Computer vision", "Planetary science"],
  },

  /* ---- accepted, to appear ------------------------------------------- */

  {
    slug: "inflatable-modules-lunar-habitation-field-demonstration",
    title:
      "Robot-Assisted Deployment and Maintenance of Inflatable Modules for Lunar Habitation: A Field Demonstration",
    venue: "IEEE International Conference on Space Robotics (iSpaRo)",
    venueShort: "IEEE iSpaRo",
    kind: "conference",
    year: 2026,
    authors: [
      { name: "Kentaro Uno", equal: true },
      { name: "Shamistan Karimov", equal: true },
      { name: "Ashutosh Mishra", me: true },
      { name: "Elian Neppel" },
      { name: "Hazal Gozbasi" },
      { name: "Shreya Santra" },
      { name: "Shinichi Kimura" },
      { name: "Kazuya Yoshida" },
    ],
    equalAuthorship: true,
    urls: [
      { label: "arXiv preprint", href: "https://arxiv.org/abs/2609.34498" },
      { label: "Video", href: "https://www.youtube.com/watch?v=ccDAhaAJAL4" },
    ],
    status: "accepted",
    peerReviewed: true,
    platform: "moonbot",
    summary:
      "MoonBot working alongside the HIDAS inflatable habitat module: inspection during inflation, alignment, final safety locking, and 3D mapping for maintenance, demonstrated on real hardware in the lab and at a lunar analogue site.",
    topics: ["Modular robotics", "Lunar construction", "Field robotics"],
  },

  /* ---- not yet published ---------------------------------------------- */

  {
    slug: "distributed-multi-robot-lunar-cargo-transportation",
    title:
      "Distributed Multi Robot Lunar Cargo Transportation via Phase Decomposed Reinforcement Learning",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    venueShort: "IEEE/RSJ IROS",
    kind: "conference",
    year: 2026,
    authors: [
      { name: "Ashutosh Mishra", me: true },
      { name: "Elian Neppel" },
      { name: "Shreya Santra" },
      { name: "Antoine Jonquières" },
      { name: "Muhammad Athallah Naufal" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    urls: [{ label: "arXiv preprint", href: "https://arxiv.org/abs/2607.00160" }],
    status: "accepted",
    platform: "moonbot",
    peerReviewed: true,
    summary:
      "Lunar cargo transport split into lifting, transportation and placement, each learned as its own policy so several robots can share the load, evaluated in simulation and in field experiments at a JAXA test facility.",
    topics: ["Reinforcement learning", "Multi-agent systems"],
  },
  {
    slug: "robogene-modular-drl-framework",
    title:
      "RoboGene: A Task-Oriented Morphology Evolution through Genetic Algorithm and Reinforcement Learning for Modular Reconfigurable Lunar Robots",
    venue: "IEEE Access",
    venueShort: "IEEE Access",
    kind: "journal",
    year: 2026,
    authors: [
      { name: "Ashutosh Mishra", me: true, equal: true },
      { name: "Elian Neppel", equal: true },
      { name: "Shreya Santra" },
      { name: "Kentaro Uno" },
      { name: "Kazuya Yoshida" },
    ],
    equalAuthorship: true,
    status: "in-submission",
    peerReviewed: true,
    platform: "moonbot",
    summary:
      "Evolving a modular robot's morphology for the task with a genetic algorithm, and learning its control with reinforcement learning, so the body and the policy are chosen together.",
    topics: ["Reinforcement learning", "Modular robotics"],
  },
  {
    slug: "moonbot-apex-agentic-planning-execution",
    title: "MoonBot APEX: Agentic Planning and Execution for Modular Lunar Robots",
    venue: "IEEE Robotics and Automation Letters (RA-L)",
    venueShort: "IEEE RA-L",
    kind: "journal",
    year: 2026,
    // Under double-blind review: the co-author list stays off the site until
    // the paper is accepted.
    authors: [{ name: "Ashutosh Mishra", me: true }],
    manyAuthors: true,
    urls: [{ label: "Demo video", href: "https://youtu.be/wrkr4xLJ7zM" }],
    status: "in-submission",
    peerReviewed: true,
    platform: "moonbot",
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
