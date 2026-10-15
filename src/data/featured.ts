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
};
