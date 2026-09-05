/**
 * Institutions and people the work has been done with.
 *
 * Written as sentences naming real collaborators, not as a logo wall. Two
 * reasons: NASA states its insignia is protected and must not imply
 * endorsement, and typical university mark policy treats logo use as implied
 * endorsement requiring written permission. Naming an institution in prose is
 * nominative use and carries no such problem. Stanford's credibility work also
 * ranked affiliations last among the things that persuade a reader, so the
 * substance is in what was done together, not in the badge.
 *
 * Every entry is a fact from the CV.
 */

export interface Collaboration {
  org: string;
  /** Expanded on first use where the acronym is ambiguous. */
  place: string;
  years: string;
  /** Named people, where the CV names them. */
  people?: string[];
  what: string;
  /** Related project or publication slugs. */
  projects?: string[];
  current?: boolean;
}

export const collaborations: Collaboration[] = [
  {
    org: "Istituto Italiano di Tecnologia (IIT), Dynamic Legged Systems lab",
    place: "Genova, Italy",
    years: "2026 to present",
    people: ["Claudio Semini"],
    what: "Learning-based locomotion controllers for quadrupedal robots in space exploration, under the ALTEC project. GPU-accelerated reinforcement learning and sim-to-real transfer for deployment on legged hardware.",
    current: true,
  },
  {
    org: "Tohoku University, Space Robotics Lab",
    place: "Sendai, Japan",
    years: "2023 to 2026",
    people: ["Kazuya Yoshida", "Kentaro Uno", "Shreya Santra", "Elian Neppel"],
    what: "MoonBot, a modular reconfigurable robot for lunar base construction, developed under JST Moonshot Goal 3. Doctoral research on decentralized control and reinforcement learning for robots whose morphology changes.",
    projects: ["self-evolving-ai-robot-system-lunar-exploration"],
  },
  {
    org: "JAXA Space Exploration Test Field",
    place: "Sagamihara, Japan",
    years: "2024 to 2025",
    what: "Three field campaigns in lunar-analogue terrain and lighting: manipulator deployment for solar infrastructure, reinforcement learning policies on morphology-varying robots, and full-scale validation of the MoonBot APEX planning framework.",
    projects: [
      "moonbot-apex-agentic-planning-execution",
      "modular-rl-policy-reconfigurable-robots",
      "manipulator-control-solar-infrastructure-deployment",
    ],
  },
  {
    org: "NASA Ames Research Center, via the International Space University",
    place: "Houston, USA",
    years: "2024",
    people: ["Dr. Jacob Cohen, Chief Scientist at NASA Ames"],
    what: "Led the project management team and served as lead editor for the International Lunar University project during the Space Studies Program 2024, hosted at NASA Johnson Space Center and Rice University. Later presented at the International Astronautical Congress 2024.",
    projects: ["international-lunar-university-ssp24"],
  },
  {
    org: "Indian Space Research Organisation (ISRO) and the National Remote Sensing Centre",
    place: "India",
    years: "2024",
    what: "An AI-enabled satellite-based air pollution monitoring and alert system, developed with NRSC-ISRO scientists during the Space Studies Program. Recognised with the I-CON Award from the Indian Society of Remote Sensing.",
  },
  {
    org: "Centre for Automotive Research and Tribology (CART), Indian Institute of Technology Delhi",
    place: "New Delhi, India",
    years: "2021",
    what: "A central cloud platform for controlling and managing a cluster of electric vehicle charging stations, built with EVI Technologies.",
    projects: ["electric-vehicle-charging-management-system"],
  },
  {
    org: "University of Delhi, Department of Electronics",
    place: "Delhi, India",
    years: "2019 to 2022",
    people: ["Manoj Saxena", "Geetika Jain Saxena"],
    what: "Semiconductor device modelling and secure signal processing: machine-learning models for GaN HEMT parameter estimation and radiation damage, and memristor-based approaches to watermarking and cryptographic processing.",
  },
];

export const currentCollaborations = collaborations.filter((c) => c.current);
