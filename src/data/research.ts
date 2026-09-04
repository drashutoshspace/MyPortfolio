/**
 * Three research themes. These replace the eight-item chronological CV nav
 * (Home / Education / Experiences / Publications / Projects / Posts / Skills /
 * Awards) that read as a student's site.
 *
 * Each theme is a real page, and each cites its own publications by slug so
 * there is no second copy of the citation data to drift.
 */

export interface Theme {
  slug: string;
  title: string;
  /** One line for the homepage card. */
  kicker: string;
  /** The question the theme is trying to answer. Question-shaped headings
   *  are also what AI answer engines quote. */
  question: string;
  body: string[];
  /** Publication slugs, most representative first. */
  publications: string[];
  /** Where this work was physically done and tested. Field provenance is the
   *  part of the record that machine-learning-only groups cannot claim. */
  fieldwork?: string[];
  current?: boolean;
}

export const themes: Theme[] = [
  {
    slug: "legged-locomotion-for-space",
    title: "Legged locomotion for space",
    kicker:
      "Learning-based controllers for quadrupeds that have to walk on surfaces nobody has surveyed.",
    question:
      "How does a legged robot keep walking on terrain that no one has surveyed, with no chance of rescue?",
    body: [
      "Wheels are a reasonable choice on graded terrain. Most of the lunar surface is not graded. Legs can step over and around what wheels have to drive through, but that flexibility only helps if the controller can decide where to put a foot on ground it has never seen, under lighting that gives almost no usable shadow gradient.",
      "This is the work I do now in the Dynamic Legged Systems lab at Istituto Italiano di Tecnologia (IIT) in Genova, with Claudio Semini, under the ALTEC project. It is mostly reinforcement learning trained on GPU at scale, and then the harder half: the sim-to-real transfer pipeline that determines whether a policy which looks excellent in Isaac Lab still works when it is driving real actuators against real regolith simulant.",
    ],
    publications: [],
    current: true,
  },
  {
    slug: "modular-reconfigurable-lunar-robots",
    title: "Modular reconfigurable lunar robots",
    kicker:
      "MoonBot: one set of limbs and modules that recombines into whichever machine the task needs.",
    question:
      "If you can only land a fixed mass on the Moon, should it be one specialised machine or a set of parts?",
    body: [
      "Every kilogram delivered to the lunar surface is expensive enough that sending three single-purpose machines is hard to justify when one set of reconfigurable parts could do all three jobs. That is the argument behind MoonBot, developed at the Space Robotics Lab at Tohoku University under JST Moonshot Goal 3: limbs and modules that attach on demand, so the same hardware becomes a manipulator, a walker, or an excavator depending on what the task requires.",
      "Modularity moves the difficulty rather than removing it. A robot whose morphology changes cannot rely on a controller written for one fixed body, and it cannot rely on a central planner that assumes it knows what is attached. Most of my doctoral work went into that problem, on both the control side and the software architecture side.",
    ],
    publications: [
      "moonbot-modular-reconfigurable-robot-moon-base",
      "distributed-heterogeneous-modularity-moonbots",
      "modular-bucket-drum-excavator-lunar-isru",
      "multi-limb-synchronization-motion-stack-hypersphere",
    ],
    fieldwork: [
      "JAXA Space Exploration Test Field, Sagamihara",
      "Abukuma Cave, as a stand-in for lunar cave environments",
    ],
  },
  {
    slug: "learning-and-autonomy-for-field-robots",
    title: "Learning and autonomy for field robots",
    kicker:
      "Decentralized RL, agentic planning, and the sim-to-real gap that decides whether any of it survives contact.",
    question:
      "What has to be true for a learned policy to still work outside the simulator?",
    body: [
      "A policy that performs well in simulation and fails on hardware has told you something about your simulator, not about your method. Field robotics is where that distinction stops being academic, and it is the reason the work below is validated on real machines in real terrain rather than in benchmark environments.",
      "Two threads run through it. One is decentralization: when a robot's morphology can change, control that assumes a fixed body and a central authority breaks, so each module has to act on what it can observe locally. The other is agentic planning: giving a modular platform enough autonomy to decompose a task and execute it without a human specifying every step.",
    ],
    publications: [
      "multi-modal-decentralized-rl-modular-lunar-robots",
      "moonbot-apex-agentic-planning-execution",
      "distributed-multi-robot-lunar-cargo-transportation",
      "robogene-modular-drl-framework",
      "human-in-loop-manipulator-control-uncertain-assembly",
    ],
    fieldwork: ["JAXA Space Exploration Test Field, Sagamihara"],
  },
];

export const getTheme = (slug: string) => themes.find((t) => t.slug === slug);
