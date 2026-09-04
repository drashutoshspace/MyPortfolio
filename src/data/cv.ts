/** Appointments, education, awards and field record. Typed from the CV PDF. */

export interface Entry {
  org: string;
  role: string;
  detail?: string;
  place: string;
  from: string;
  to: string;
  current?: boolean;
  notes?: string[];
}

export const appointments: Entry[] = [
  {
    org: "Istituto Italiano di Tecnologia (IIT)",
    role: "Postdoctoral Researcher",
    detail: "Dynamic Legged Systems lab, with Claudio Semini",
    place: "Genova, Italy",
    from: "2026-08",
    to: "Present",
    current: true,
    notes: [
      "Learning-based locomotion controllers for quadrupedal robots applied to space exploration, under the ALTEC project.",
      "GPU-accelerated reinforcement learning and sim-to-real transfer pipelines on Isaac Sim, Isaac Lab and NVIDIA Newton, for deployment on legged hardware.",
    ],
  },
];

export const education: Entry[] = [
  {
    org: "Tohoku University",
    role: "Doctoral Researcher, Space Robotics Lab",
    detail: "Japanese Government MEXT Scholar, with Kazuya Yoshida",
    place: "Sendai, Japan",
    from: "2023-10",
    to: "2026-03",
  },
  {
    org: "Pune University",
    role: "Master of Science in Electronics",
    detail: "9.6 / 10 CGPA",
    place: "Pune, India",
    from: "2021-08",
    to: "2023-07",
  },
  {
    org: "University of Delhi",
    role: "Bachelor of Science in Electronics",
    detail: "8.6 / 10 CGPA",
    place: "Delhi, India",
    from: "2018-08",
    to: "2021-07",
  },
];

export const experience: Entry[] = [
  {
    org: "International Space University, Space Studies Program 2024",
    role: "Project Management Team Lead and Lead Editor",
    detail: "Hosted at NASA Johnson Space Center and Rice University",
    place: "Houston, USA",
    from: "2024-06",
    to: "2024-08",
    notes: [
      "Led the project management team and served as lead editor for the International Lunar University project.",
      "Worked under the supervision of Dr. Jacob Cohen, Chief Scientist at NASA Ames.",
      "Collaborated with international teams to propose a strategic vision for establishing a lunar university.",
    ],
  },
  {
    org: "Wobot Intelligence Inc.",
    role: "Computer Vision Intern",
    place: "California, USA",
    from: "2023-01",
    to: "2023-06",
    notes: [
      "Developed and deployed neural network models optimised for edge computing.",
      "Applied computer vision to video intelligence and analytics on NVIDIA Jetson, with Python, Triton Server, Docker, OpenCV, TensorFlow and Keras.",
    ],
  },
  {
    org: "EVI Technologies Pvt. Ltd.",
    role: "Cloud Platform Engineer",
    detail: "In collaboration with the Centre for Automotive Research and Tribology (CART), IIT Delhi",
    place: "New Delhi, India",
    from: "2021-01",
    to: "2021-12",
    notes: [
      "Built and deployed a central cloud platform for controlling and managing electric vehicle charging stations.",
      "Managed Linux-based servers and backend infrastructure with Python, Django, Apache, AWS and MySQL.",
    ],
  },
  {
    org: "JNE Smart Technologies Pvt. Ltd.",
    role: "Embedded Engineer Intern",
    place: "Ghaziabad, India",
    from: "2020-05",
    to: "2020-12",
    notes: [
      "Developed and deployed a health kiosk to monitor government employees' health status in Meghalaya, India.",
      "Worked on AgriTech control systems for autonomous agricultural field monitoring and irrigation.",
    ],
  },
  {
    org: "VHCPL Automation India Pvt. Ltd.",
    role: "Embedded Engineer Intern",
    place: "Delhi, India",
    from: "2019-07",
    to: "2019-09",
    notes: ["Developed and deployed IoT devices for automation tasks."],
  },
];

export interface Award {
  title: string;
  body: string;
  year: string;
  place?: string;
  note?: string;
}

/** Written in full, checkable phrasing. Shorthand on an award is the kind of
 *  thing a reviewer stops to verify, and shorthand is what makes it look
 *  worth verifying. */
export const awards: Award[] = [
  {
    title: "Emerging Space Leader",
    body: "International Astronautical Federation (IAF)",
    year: "2025",
    place: "Sydney, Australia",
    note: "Recognised as an IAF Emerging Space Leader and grant recipient for IAC 2025.",
  },
  {
    title: "Invited panelist, IAF Next Generation Plenary",
    body: "International Astronautical Congress (IAC) 2025",
    year: "2025",
    place: "Sydney, Australia",
  },
  {
    title: "Best Research Paper Award",
    body: "IEEE iSpaRo 2025, 2nd International Conference on Space Robotics",
    year: "2025",
    place: "Sendai, Japan",
    note: 'For "Multi-Modal Decentralized Reinforcement Learning for Modular Reconfigurable Lunar Robots".',
  },
  {
    title: "MEXT Research Scholar",
    body: "Government of Japan",
    year: "2023-2026",
    note: "Selected as a MEXT Research Scholar through Embassy Recommendation.",
  },
  {
    title: "I-CON Award",
    body: "Indian Society of Remote Sensing (ISRS), ISRO",
    year: "2024",
    note: "For an AI-enabled satellite-based air pollution monitoring and alert system, developed with NRSC-ISRO scientists during the Space Studies Program 2024.",
  },
  {
    title: "Dispatch Program Grant",
    body: "Tohoku University",
    year: "2024",
    note: "EUR 20,000 to attend the International Space University Space Studies Program 2024.",
  },
  {
    title: "Innovation Ambassador",
    body: "Innovation Cell, Ministry of Education, Government of India",
    year: "2020-present",
  },
  {
    title: "Finalist, National Innovation Contest",
    body: "Ministry of Education, Government of India",
    year: "2020",
    note: "Top 10 of more than 30,000 submissions.",
  },
  {
    title: "2nd Runner Up, National Level IoT Challenge",
    body: "Indian Institute of Technology Bombay",
    year: "2019",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Research and simulation",
    items: [
      "Reinforcement learning",
      "Sim-to-real transfer",
      "Multi-agent systems",
      "Decentralized control",
      "Motion planning",
      "Digital twin simulation",
      "Genetic algorithms",
      "Computer vision",
    ],
  },
  {
    group: "Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Isaac Sim",
      "Isaac Lab",
      "NVIDIA Newton",
      "ROS",
      "ROS 2",
      "MoveIt",
      "MuJoCo",
      "Stable-Baselines3",
      "OpenCV",
    ],
  },
  {
    group: "Hardware and field systems",
    items: [
      "Jetson Orin NX",
      "RealSense D435i",
      "Livox Mid-360 LiDAR",
      "OptiTrack",
      "UR16e manipulator",
      "Modular robotic platforms",
      "FPGAs",
      "PCB design",
    ],
  },
  {
    group: "Languages and tools",
    items: ["Python", "C", "C++", "MATLAB", "Verilog", "VHDL", "SQL", "Bash", "Docker", "Linux", "Git", "AWS"],
  },
];

/** Field campaigns. This is the provenance that simulation-only groups
 *  cannot claim, and it is worth its own listing. */
export const fieldwork = [
  {
    site: "JAXA Space Exploration Test Field",
    place: "Sagamihara, Japan",
    what: "Full-scale field validation of the MoonBot APEX framework for modular lunar robots, agentic planning and execution in lunar-analogue terrain and lighting.",
    when: "2025",
  },
  {
    site: "JAXA Space Exploration Test Field",
    place: "Sagamihara, Japan",
    what: "Reinforcement-learning control policies tested on morphology-varying modular robots, validating adaptive control across multiple reconfigurable morphologies.",
    when: "2025",
  },
  {
    site: "Abukuma Cave",
    place: "Fukushima, Japan",
    what: "Modular plug-and-play sensor box for the MoonBot platform, fusing Livox Mid-360 LiDAR, two fisheye cameras and an Intel RealSense D435i. Field-tested by mapping the cave for lunar cave simulation work.",
    when: "2025",
  },
];
