/**
 * Projects, typed by hand from the CV. Each one gets its own page.
 *
 * Why individual pages: these are the long-tail SEO asset. Someone searching
 * "MoonBot APEX", "Abukuma Cave lunar analogue", or "modular sensor box Livox
 * Mid-360" should land on a page about that work rather than on a CV line.
 * Publication pages win exact-title queries; project pages win the queries
 * people actually type when they half-remember a system.
 *
 * `era` splits the space robotics work from the earlier electronics and
 * embedded projects. Both are on the site, but the homepage and the index
 * lead with the former: a reviewer scanning for a coherent research programme
 * should not meet an 8-bit microcontroller before MoonBot.
 */

export type Era = "space-robotics" | "earlier";

export interface Project {
  slug: string;
  title: string;
  /** One line for the index. */
  kicker: string;
  from: string;
  to: string;
  current?: boolean;
  /** Where the work physically happened, when that matters. */
  site?: string;
  /** Institution or collaborator context. */
  context?: string;
  era: Era;
  body: string[];
  stack: string[];
  /** Publication slugs this project produced. */
  publications?: string[];
  /** Research theme slugs this belongs under. */
  themes?: string[];
  links?: { label: string; href: string }[];
  /** Photograph the layout wants. Rendered as a captioned pending plate. */
  image?: { caption: string; src?: string };
}

export const projects: Project[] = [
  {
    slug: "self-evolving-ai-robot-system-lunar-exploration",
    title: "Self-Evolving AI Robot System for Lunar Exploration",
    kicker:
      "Autonomous, self-evolving robot systems for lunar exploration and outpost construction, under JST Moonshot Goal 3.",
    from: "2023-10",
    to: "Present",
    current: true,
    context: "Space Robotics Lab, Tohoku University, with Prof. Kazuya Yoshida",
    era: "space-robotics",
    body: [
      "The umbrella programme behind most of my doctoral work. The goal set by JST Moonshot Goal 3 is a robot system that can build and maintain a lunar outpost with minimal human intervention, which means the system has to keep working when its own configuration, the terrain, and the task all change.",
      "My part of it concentrated on the control and learning side: how a robot whose body can be rebuilt from modules learns policies that survive that rebuild, and how those policies transfer from simulation onto hardware that has to operate in lunar-analogue terrain and lighting.",
    ],
    stack: ["Reinforcement learning", "ROS 2", "Isaac Sim", "Python", "Modular robotics"],
    themes: ["modular-reconfigurable-lunar-robots", "learning-and-autonomy-for-field-robots"],
    publications: ["moonbot-modular-reconfigurable-robot-moon-base"],
    image: {
      caption:
        "The MoonBot platform assembled for a construction task, Space Robotics Lab, Tohoku University.",
    },
  },
  {
    slug: "moonbot-apex-agentic-planning-execution",
    title: "MoonBot APEX: Agentic Planning and Execution Framework",
    kicker:
      "Full-scale field validation of agentic planning and execution for modular lunar robots, in lunar-analogue terrain and lighting.",
    from: "2025-06",
    to: "2025-07",
    site: "JAXA Space Exploration Test Field, Sagamihara",
    context: "JST Moonshot Goal 3",
    era: "space-robotics",
    body: [
      "APEX asks whether a modular robot can be given a task rather than a script: decompose the goal, decide which configuration it needs, and execute without a human specifying every intermediate step.",
      "The framework was validated at full scale at the JAXA Space Exploration Test Field in Sagamihara, in terrain and lighting chosen to approximate lunar conditions. Field validation is the part that matters here, because agentic planning that works in simulation and fails on regolith has told you about your simulator.",
    ],
    stack: ["Agentic planning", "ROS 2", "Python", "Modular robotics"],
    themes: ["learning-and-autonomy-for-field-robots"],
    publications: ["moonbot-apex-agentic-planning-execution"],
    links: [{ label: "Demo video", href: "https://youtu.be/wrkr4xLJ7zM" }],
    image: {
      caption:
        "MoonBot executing an APEX-planned task on the regolith bed, JAXA Space Exploration Test Field, Sagamihara.",
    },
  },
  {
    slug: "modular-rl-policy-reconfigurable-robots",
    title: "Modular RL Policy Implementation on Reconfigurable Robots",
    kicker:
      "Reinforcement learning control policies tested on morphology-varying modular robots across multiple reconfigurations.",
    from: "2025-02",
    to: "2025-03",
    site: "JAXA Space Exploration Test Field, Sagamihara",
    era: "space-robotics",
    body: [
      "A controller written for one fixed body does not transfer when the body changes. This campaign tested reinforcement learning policies on robots whose morphology varied between runs, to see whether adaptive control held up across reconfigurations rather than only on the configuration it was trained for.",
      "The result fed directly into the decentralized approach in the iSpaRo 2025 paper: each module acting on local observation rather than waiting on a central controller that assumes it knows the whole body.",
    ],
    stack: ["Reinforcement learning", "Isaac Lab", "PyTorch", "Modular robotics"],
    themes: ["learning-and-autonomy-for-field-robots", "modular-reconfigurable-lunar-robots"],
    publications: ["multi-modal-decentralized-rl-modular-lunar-robots"],
    image: {
      caption:
        "A reconfigured MoonBot morphology under RL policy control, JAXA Space Exploration Test Field, Sagamihara.",
    },
  },
  {
    slug: "plug-and-play-modular-sensor-box",
    title: "Plug and Play Modular Sensor Box",
    kicker:
      "A modular sensor package for the MoonBot platform, fusing LiDAR, fisheye and depth cameras. Field tested by mapping a cave.",
    from: "2025-09",
    to: "2025-10",
    site: "Abukuma Cave, Japan",
    era: "space-robotics",
    body: [
      "A plug-and-play sensor box for the MoonBot platform, fusing a Livox Mid-360 LiDAR, two fisheye cameras and an Intel RealSense D435i. Because the platform is modular, the sensing had to be modular too: any configuration should be able to take the box and get a usable picture of its surroundings.",
      "It was field tested by mapping Abukuma Cave, used here as a stand-in for lunar cave environments. Caves are a plausible location for lunar habitation and a genuinely hard sensing problem: no GNSS, no ambient light, and geometry that defeats assumptions built on open terrain.",
    ],
    stack: ["Livox Mid-360 LiDAR", "Intel RealSense D435i", "Sensor fusion", "SLAM", "ROS 2"],
    themes: ["modular-reconfigurable-lunar-robots"],
    image: {
      caption:
        "The modular sensor box mapping Abukuma Cave, a lunar cave analogue, under working lights.",
    },
  },
  {
    slug: "manipulator-control-solar-infrastructure-deployment",
    title: "Enhanced Manipulator Control for Solar Infrastructure Deployment",
    kicker:
      "Human-in-the-loop verification of UR16e manipulator control for precise assembly under uncertain terrain and visual conditions.",
    from: "2024-10",
    to: "2024-11",
    site: "JAXA Space Exploration Test Field, Sagamihara",
    era: "space-robotics",
    body: [
      "Deploying solar infrastructure on the lunar surface means precise assembly by a manipulator that cannot fully trust its own perception: the terrain is uneven, the lighting is directional and harsh, and there is no operator standing next to it.",
      "This work performed human-in-the-loop verification and validation of UR16e manipulator control for those assembly and deployment tasks, using ArUco markers and OpenCV for pose estimation under exactly those uncertain visual conditions.",
    ],
    stack: ["UR16e", "OpenCV", "ArUco markers", "MoveIt", "ROS"],
    themes: ["learning-and-autonomy-for-field-robots"],
    publications: ["human-in-loop-manipulator-control-uncertain-assembly"],
    image: {
      caption:
        "UR16e manipulator during a deployment trial, JAXA Space Exploration Test Field, Sagamihara.",
    },
  },
  {
    slug: "international-lunar-university-ssp24",
    title: "International Lunar University (SSP24)",
    kicker:
      "Project management lead and lead editor for an interdisciplinary lunar university proposal, later presented at IAC 2024.",
    from: "2024-06",
    to: "2024-08",
    site: "NASA Johnson Space Center and Rice University, Houston",
    context:
      "International Space University Space Studies Program 2024, with Dr. Jacob Cohen, Chief Scientist at NASA Ames",
    era: "space-robotics",
    body: [
      "During the International Space University Space Studies Program 2024, hosted at NASA Johnson Space Center and Rice University, I led the project management team and served as lead editor for the International Lunar University project.",
      "The work was interdisciplinary rather than technical: a proposal for how lunar research and public engagement might be organised institutionally, developed with an international team under the supervision of Dr. Jacob Cohen, Chief Scientist at NASA Ames. It was later presented at the International Astronautical Congress 2024.",
    ],
    stack: ["Project management", "Technical editing", "Space policy"],
    publications: ["international-lunar-university-ssp24"],
    image: {
      caption:
        "The Space Studies Program 2024 team at NASA Johnson Space Center, Houston.",
    },
  },
  {
    slug: "lidar-object-mapping-identification-rover",
    title: "LiDAR Based Object Mapping and Identification Rover",
    kicker:
      "An autonomous rover for mapping and object identification, aimed at space debris tracking and warehouse management.",
    from: "2022-03",
    to: "2022-09",
    era: "space-robotics",
    body: [
      "An autonomous rover built around LiDAR mapping and convolutional object identification, with SLAM for localisation. The two application cases explored were tracking space debris and warehouse management, which share a problem: identifying and keeping track of objects in a space you are simultaneously mapping.",
    ],
    stack: ["Python", "CNN", "ROS", "SLAM", "Raspberry Pi", "Keras"],
    image: { caption: "The LiDAR mapping rover during an indoor identification run." },
  },
  {
    slug: "numerically-controlled-oscillator-isro-seams",
    title: "Numerically Controlled Oscillator for ISRO's SEAMS Project",
    kicker:
      "A numerically controlled oscillator for spectrum analyser calibration on the SEAMS payload.",
    from: "2022-02",
    to: "2022-05",
    context: "ISRO SEAMS payload",
    era: "earlier",
    body: [
      "A numerically controlled oscillator implemented on an FPGA, used for spectrum analyser calibration on ISRO's SEAMS payload. Calibration hardware is unglamorous and entirely load-bearing: the analyser's measurements are only as trustworthy as the reference it is calibrated against.",
    ],
    stack: ["Verilog", "Vivado", "Nexys DDR FPGA board"],
    image: { caption: "The NCO implementation under test on the FPGA board." },
  },
  {
    slug: "8-bit-microcontroller-verilog",
    title: "8-bit Microcontroller using Verilog",
    kicker: "An 8-bit microcontroller for small automation tasks, implemented on an FPGA.",
    from: "2021-10",
    to: "2022-03",
    era: "earlier",
    body: [
      "An 8-bit microcontroller designed and implemented in Verilog on a Nexys DDR FPGA board, intended for small automation tasks. Building a processor from the register file up is the exercise that makes the abstractions underneath everything else stop being abstractions.",
    ],
    stack: ["Verilog", "Nexys DDR FPGA board", "Vivado HLS"],
    image: { caption: "The 8-bit core running on the Nexys DDR FPGA board." },
  },
  {
    slug: "electric-vehicle-charging-management-system",
    title: "Electric Vehicle Charging Management System",
    kicker:
      "A cloud platform managing a cluster of electric vehicle charging stations, with IIT Delhi's CART.",
    from: "2021-01",
    to: "2021-12",
    context:
      "EVI Technologies, in collaboration with the Centre for Automotive Research and Tribology (CART), Indian Institute of Technology Delhi",
    era: "earlier",
    body: [
      "A central cloud platform for controlling and managing a cluster of electric vehicle charging stations, built with EVI Technologies in collaboration with the Centre for Automotive Research and Tribology at the Indian Institute of Technology Delhi.",
      "Alongside the platform I managed the Linux servers and backend infrastructure it ran on. It is the piece of my background that is straightforwardly industrial: a deployed system with real users and real uptime expectations.",
    ],
    stack: ["Python", "Django", "AWS", "MySQL", "Apache", "Linux"],
    image: { caption: "The charging station management dashboard in operation." },
  },
  {
    slug: "health-kiosk-employee-monitoring",
    title: "Health Kiosk System for Monitoring Employees' Health",
    kicker:
      "A health kiosk deployed during COVID-19 to monitor government employees' health in Meghalaya, India.",
    from: "2020-05",
    to: "2020-12",
    context: "JNE Smart Technologies",
    era: "earlier",
    body: [
      "A health kiosk machine deployed during the COVID-19 pandemic to monitor the health status of government employees in Meghalaya, India. The constraint that shaped it was deployment: it had to work unattended, in the field, maintained by people who had not built it.",
    ],
    stack: ["Raspberry Pi", "Python", "Flask", "Sensors"],
    image: { caption: "The deployed health kiosk in use, Meghalaya, India." },
  },
  {
    slug: "sebai-smart-eye-based-on-ai",
    title: "SEBAI: Smart Eye Based on AI",
    kicker:
      "An assistive device for blind, deaf and mute users, with speech navigation, sign language conversion and object identification.",
    from: "2019-10",
    to: "2020-03",
    era: "earlier",
    body: [
      "An assistive product for blind, deaf and mute users, combining speech-based navigation, sign language conversion and object identification on an ESP32-Cam with TensorFlow Lite models running on-device.",
      "It was recognised as a finalist in the National Innovation Contest 2020, placing in the top ten of more than thirty thousand submissions.",
    ],
    stack: ["ESP32-Cam", "Keras", "TensorFlow Lite", "Python", "PCB design"],
    image: { caption: "The SEBAI prototype, showing the camera module and enclosure." },
  },
];

export const spaceProjects = projects.filter((p) => p.era === "space-robotics");
export const earlierProjects = projects.filter((p) => p.era === "earlier");
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
