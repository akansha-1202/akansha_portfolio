const profile = {
  name: "Akansha Verma",
  title: "Full Stack Web Developer",
  email: "akanshav325@gmail.com",
  phone: "7236010850",
  location: "New Delhi, India",
  github: "https://github.com/akansha-1202",
  linkedin: "https://www.linkedin.com/in/akansha-verma-12f21cent",
};

const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Production Dashboards" },
  { value: 12, suffix: "+", label: "Technologies Used" },
  { value: 3, suffix: "", label: "Certifications Earned" },
];

const logoIconsList = [
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/python.svg" },
  { imgPath: "/images/logos/git.svg" },
  { imgPath: "/images/logos/three.png" },
  { imgPath: "/images/logos/react.png" },
  { imgPath: "/images/logos/node.png" },
  { imgPath: "/images/logos/python.svg" },
  { imgPath: "/images/logos/git.svg" },
  { imgPath: "/images/logos/three.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Ad-Tech Integration",
    desc: "Integrating Google AdX, AdSense, header bidding, and Prebid.js with optimized ad placements across publisher websites.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Full-Stack Dashboards",
    desc: "Building scalable dashboards with Next.js, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  },
  {
    imgPath: "/images/time.png",
    title: "API & Data Pipelines",
    desc: "Developing REST APIs and backend workflows with Python and Google Ad Manager API for analytics and reporting.",
  },
];

const projects = [
  {
    title: "Dental Nightteer — Free & Low Cost Dental Care",
    description:
      "A full-stack web platform helping users find free and affordable dental clinics across U.S. states, with state-wise search, service categories, and user reviews.",
    image: "/images/projects/dental.png",
    featured: true,
    tech: "Next.js, React.js, Node.js, MongoDB",
    url: "https://dental.nightteer.live/",
    bgColor: "",
  },
  {
    title: "FindQuickData — Affordable Housing Finder",
    description:
      "Section 8 and low-income housing resource platform with state search, waiting list openings, and affordable apartment listings.",
    image: "/images/projects/findquickdata.png",
    tech: "Next.js, React.js, Node.js, MongoDB",
    url: "https://findquickdata.com/",
    bgColor: "bg-[#FFEFDB]",
  },
  {
    title: "SP Enterprises Store — RBX Counter",
    description:
      "Robux calculator and converter landing page with spin, quiz, and scratch-card features for Roblox players.",
    image: "/images/projects/spenterprises.png",
    tech: "React.js, JavaScript, Tailwind CSS",
    url: "https://spenterprisesstore.com/",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    title: "Global Mindset Co — Quiz Landing Page",
    description:
      "Interactive quiz funnel landing page designed to engage users and drive conversions for free product offers.",
    image: "/images/projects/globalmindset.png",
    tech: "Next.js, React.js, Tailwind CSS",
    url: "https://globalmindsetco.com/quiz-lp",
    bgColor: "bg-[#E8F4FD]",
  },
  {
    title: "Color Theoryz — Video Platform",
    description:
      "A video streaming web platform with a modern UI, built for content discovery with terms, privacy, and contact pages.",
    image: "/images/projects/colourtheoryz.png",
    tech: "Next.js, React.js, Node.js",
    url: "https://test.colourtheoryz.com/",
    bgColor: "bg-[#12081f]",
  },
];

const techStackIcons = [
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Next.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const skillTags = [
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "AdX",
  "AdSense",
  "Prebid.js",
  "GitHub",
  "Fastify.js",
  "Ants Design",
  "RestAPI",
   "FastAPI",
];

const techStackImgs = [
  { name: "React.js", imgPath: "/images/logos/react.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Next.js", imgPath: "/images/logos/three.png" },
  { name: "Git & GitHub", imgPath: "/images/logos/git.svg" },
];

const expCards = [
  {
    review:
      "Leading ad-tech integrations with Google AdX, AdSense, and header bidding to optimize ad revenue and performance across publisher platforms.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer — Unibots",
    date: "April 2026 - Present",
    responsibilities: [
      "Integrated Google Ad Exchange (AdX) and AdSense ads with optimized placements and responsive ad units.",
      "Improved ad rendering performance across devices with efficient client-side ad scripts.",
      "Implemented header bidding with Prebid.js to increase bid competition across demand partners.",
      "Managed performance tracking and ad delivery workflows for publisher websites.",
    ],
  },
  {
    review:
      "Delivered multiple production dashboards and APIs for ad-tech operations, campaign reporting, and real-time data services.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer — Unibots",
    date: "June 2025 - March 2026",
    responsibilities: [
      "Built Unidash dashboards for ticketing systems and publisher management (GAM & AFS).",
      "Developed campaign reporting integrations for Outbrain and Taboola with performance visualization.",
      "Created REST APIs for live cricket scores, match schedules, and commentary with real-time updates.",
      "Configured header bidding, Generic Cube scripts, and ad subdomains for AFS implementations.",
    ],
  },
  {
    review:
      "Built foundational ad-tech systems including AFS dashboards, RSOC campaign analytics, and GAM data integration pipelines.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo1.png",
    title: "Junior Web Developer — Unibots",
    date: "January 2024 - May 2025",
    responsibilities: [
      "Developed the AFS backend dashboard for managing articles, domains, subdomains, networks, and channels.",
      "Built RSOC dashboard components to visualize Google Ads and Meta campaign data.",
      "Integrated Google Ad Manager API using Python to fetch and store ad performance data.",
      "Created the Universal Dashboard for managing header bidding and Generic Cube ad-tech scripts.",
    ],
  },
];

const expLogos = [
  { name: "unibots", imgPath: "/images/logo1.png" },
  { name: "unibots", imgPath: "/images/logo1.png" },
  { name: "unibots", imgPath: "/images/logo1.png" },
];

const educationItems = [
  {
    name: "Bachelor of Science (PCM)",
    mentions: "Vimla Devi Ravindra Patel Mahavidhyalaya, Sitapur",
    review:
      "Completed B.Sc. in Physics, Chemistry, and Mathematics (2018–2021), building a strong analytical foundation before pursuing software development.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Full Stack Web Development",
    mentions: "Dec 2022 – Sep 2023",
    review:
      "Comprehensive training in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB with hands-on full-stack project development.",
    imgPath: "/images/client1.png",
  },
  {
    name: "NIELIT (DOEACC) O Level",
    mentions: "Aug 2022 – Jul 2023",
    review:
      "National certification in electronics and information technology from the National Institute of Electronics and Information Technology (NIELIT).",
    imgPath: "/images/client2.png",
  },
  {
    name: "Course on Computer Concepts",
    mentions: "NIELIT — Feb 2021",
    review:
      "Foundational certification in computer concepts issued by NIELIT, marking the start of my journey into programming and technology.",
    imgPath: "/images/client4.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/akansha-1202",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/akansha-verma-12f21cent",
    imgPath: "/images/linkedin.png",
  },
];

export {
  profile,
  words,
  abilities,
  logoIconsList,
  counterItems,
  projects,
  expCards,
  expLogos,
  educationItems,
  socialImgs,
  techStackIcons,
  techStackImgs,
  skillTags,
  navLinks,
};
