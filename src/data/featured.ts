/**
 * The featured research block: the MoonBot video and the iSpaRo 2025 paper
 * figure. Read by the homepage and by /research/moonbot/, so the facts live
 * in one place.
 */

export interface Video {
  /** YouTube video id. */
  id: string;
  title: string;
  description: string;
  /** Self-hosted copy of the YouTube poster frame, so the page makes no
   *  request to YouTube until the visitor presses play. */
  poster: string;
  /** ISO 8601, as YouTube reports it. Feeds the VideoObject node. */
  uploadDate: string;
  /** ISO 8601 duration. */
  duration: string;
  credit: string;
}

export const moonbotVideo: Video = {
  id: "wzuCd1ytsMk",
  title: "MoonBot: Modular and On-demand Reconfigurable Robot for Moon Base Construction",
  description:
    "MoonBot, the modular and on-demand reconfigurable robot developed in the Japanese Moonshot R&D programme, working toward the robotic construction of a Moon outpost.",
  poster: "/media/moonbot-video.jpg",
  uploadDate: "2025-02-27T22:48:21-08:00",
  duration: "PT41S",
  credit: "Space Robotics Lab, Tohoku University",
};

export const moonbotArxiv = "https://arxiv.org/abs/2512.21853";

/**
 * MoonBot, described once. The homepage feature, /research/moonbot/, the
 * modular-robots theme and the project pages all read these strings, so the
 * eight separately typed descriptions the audit found cannot drift apart again.
 */
export const moonbot = {
  href: "/research/moonbot/",
  /** The noun phrase, as the T-FR paper has it. */
  what: "a modular, on-demand reconfigurable robot for Moon base construction",
  oneLine:
    "One set of limbs, wheels and tools that reconfigures on demand into whichever machine a lunar construction task needs.",
  becomes: "a manipulator, a vehicle, a walker or an excavator",
  role: "My part was the control and learning side: decentralized control and reinforcement learning for a robot whose body changes every time a module is attached or removed, and the software that lets the modules work as one machine.",
  lab: "Space Robotics Lab, Tohoku University",
  programme: "JST Moonshot Goal 3",
  fieldSites: [
    "JAXA Space Exploration Test Field, Sagamihara",
    "Abukuma Cave, a stand-in for lunar cave environments",
  ],
  /** Field photographs for the strip on /research/moonbot/. */
  fieldPhotos: [
    { src: "/media/robotics/luna-dragon-crater-floor.webp", caption: "Dragon configuration in a regolith crater, DLR-ESA LUNA facility, Cologne." },
    { src: "/media/robotics/jaxa-dragon-sled-towing.webp", caption: "A Dragon towing a sledge carrying a folded solar tower, JAXA Space Exploration Test Field." },
    { src: "/media/robotics/jaxa-tricycle-cargo.webp", caption: "The Tricycle configuration among rock mock-ups, JAXA Space Exploration Test Field." },
    { src: "/media/robotics/jaxa-minimal-palette-assembly.webp", caption: "A limb lifting a wheel off the launch-lock palette to form a Minimal robot." },
    { src: "/media/robotics/jaxa-limb-wheel-self-assembly.webp", caption: "Self-assembly in the field: a limb reaching for a wheel module." },
    { src: "/media/robotics/jaxa-hidas-inflation-monitoring.webp", caption: "Monitoring the HIDAS inflatable habitat module as it inflates." },
  ],
  /** Project pages that are MoonBot campaigns or systems, in date order. */
  projects: [
    "self-evolving-ai-robot-system-lunar-exploration",
    "modular-rl-policy-reconfigurable-robots",
    "moonbot-apex-agentic-planning-execution",
    "plug-and-play-modular-sensor-box",
  ],
};

/** Fig. 1 of the iSpaRo 2025 paper, rendered from the arXiv source. */
export const decRlFigure = {
  pub: "multi-modal-decentralized-rl-modular-lunar-robots",
  src: "/media/isparo-2025-dec-rl-fig1.webp",
  width: 1100,
  height: 1193,
  alt: "Three MoonBot configurations with each module colour coded by the policy that drives it: manipulator in cyan, steering limb in yellow, wheels in magenta.",
  caption:
    "Each module runs its own policy: wheel modules learn locomotion with SAC, and 7-DoF limbs learn manipulation and steering with PPO. The same policies carry across configurations.",
  arxiv: "https://arxiv.org/abs/2510.20347",
  /** The paper's video on the Space Robotics Lab channel. */
  video: "6kRCybQMMCI",
};
