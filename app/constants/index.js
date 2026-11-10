const profile = {
  name: "Akansha Verma",
  title: "Full Stack Developer",
  email: "akanshav325@gmail.com",
  phone: "7236010850",
  location: "Delhi NCR, India · Open to Remote",
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
  { value: 2.5, decimals: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Production Web Apps" },
  { value: 350, suffix: "+", label: "REST APIs on Nexus" },
  { value: 50, suffix: "+", label: "Ad Accounts Integrated" },
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
    imgPath: "/images/chat.png",
    title: "End-to-End Features",
    desc: "Owning features from UI and state management to API contracts, JWT/OAuth auth, MongoDB design, and deployment.",
  },
  {
    imgPath: "/images/time.png",
    title: "Microservices & Background Jobs",
    desc: "Building Node.js/Fastify services with Redis caching, BullMQ queues, and rate-limited third-party data sync.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Ad-Tech Integrations",
    desc: "Integrating Google Ads, Meta Marketing API, Google Ad Manager (GPT, KV targeting), and header bidding.",
  },
];

const projects = [
  {
    title: "Nexus — Ad Campaign Management Platform",
    description:
      "A Next.js frontend and 9 Fastify microservices behind an API gateway for creating, launching, and reporting on Google Ads, Meta, Outbrain, and Taboola campaigns.",
    highlights: [
      "350+ REST APIs with JWT auth, rate limiting, Joi validation, and Swagger docs",
      "Built the Outbrain & Taboola reporting microservices with paginated, rate-limited sync jobs",
      "Launchpad bulk launches plus AI-generated ad assets with Vertex AI and Gemini",
    ],
    image: "/images/projects/nexus-cover.png",
    featured: true,
    tech: "Next.js, React.js, Node.js, Fastify, MongoDB, Redis, BullMQ, Docker, Vertex AI",
    url: "https://beta-nexus.unibots.com/",
    bgColor: "",
  },
  {
    title: "Dental Nightteer — Healthcare Locator Platform",
    description:
      "A full-stack platform helping users find free and low-cost dental clinics across U.S. states, with state-wise search, service filters, and user reviews.",
    image: "/images/projects/dental.png",
    tech: "Next.js, React.js, Node.js, Express.js, MongoDB, Mongoose",
    url: "https://dental.nightteer.live/",
    bgColor: "",
  },
  {
    title: "Unidash — Operations Dashboard",
    description:
      "Internal operations platform for ticketing, publisher onboarding, and campaign workflows across 50+ client accounts.",
    image: "/images/projects/unidash-cover.png",
    tech: "Next.js, React.js, Node.js, MongoDB, Redis, Bull, Ant Design",
    url: "https://unidash.unibots.com/",
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
  { name: "HTML5", icon: "/images/skills/html5.svg", category: "Frontend" },
  { name: "CSS3", icon: "/images/skills/css3.svg", category: "Frontend" },
  { name: "Redux Toolkit", icon: "/images/skills/redux.svg", category: "Frontend" },
  { name: "Zustand", icon: "/images/skills/zustand.svg", category: "Frontend" },
  { name: "TanStack Query", icon: "/images/skills/reactquery.svg", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/images/skills/tailwind.svg", category: "Frontend" },
  { name: "Ant Design", icon: "/images/skills/antdesign.svg", category: "Frontend" },
  { name: "Material UI", icon: "/images/skills/materialui.svg", category: "Frontend" },
  { name: "Bootstrap", icon: "/images/skills/bootstrap.svg", category: "Frontend" },
  { name: "React Hooks", category: "Frontend" },
  { name: "Context API", category: "Frontend" },
  { name: "Next.js SSR", category: "Frontend" },
  { name: "Responsive Design", category: "Frontend" },

  { name: "Fastify.js", icon: "/images/skills/fastify.svg", category: "Backend & APIs" },
  { name: "FastAPI", icon: "/images/skills/fastapi.svg", category: "Backend & APIs" },
  { name: "REST API Design", icon: "/images/skills/restapi.svg", category: "Backend & APIs" },
  { name: "WebSocket", icon: "/images/skills/socketio.svg", category: "Backend & APIs" },
  { name: "JWT Auth", icon: "/images/skills/jsonwebtokens.svg", category: "Backend & APIs" },
  { name: "Swagger / OpenAPI", icon: "/images/skills/swagger.svg", category: "Backend & APIs" },
  { name: "OAuth 2.0", category: "Backend & APIs" },
  { name: "Token Rotation", category: "Backend & APIs" },
  { name: "Joi Validation", category: "Backend & APIs" },
  { name: "Middleware", category: "Backend & APIs" },
  { name: "Webhooks", category: "Backend & APIs" },
  { name: "MVC Architecture", category: "Backend & APIs" },

  { name: "Redis Caching", icon: "/images/skills/redis.svg", category: "Microservices" },
  { name: "BullMQ", category: "Microservices" },
  { name: "API Gateway", category: "Microservices" },
  { name: "Message Queues", category: "Microservices" },
  { name: "Scheduled Jobs", category: "Microservices" },
  { name: "Rate-Limited Data Sync", category: "Microservices" },
  { name: "Retry & Token Refresh", category: "Microservices" },
  { name: "Third-Party APIs", category: "Microservices" },

  { name: "Mongoose", icon: "/images/skills/mongoose.svg", category: "Database" },
  { name: "Schema Design", category: "Database" },
  { name: "Aggregation Pipeline", category: "Database" },
  { name: "Indexing", category: "Database" },
  { name: "Query Optimization", category: "Database" },

  { name: "Docker", icon: "/images/skills/docker.svg", category: "Testing & DevOps" },
  { name: "Jenkins", icon: "/images/skills/jenkins.svg", category: "Testing & DevOps" },
  { name: "Jest", icon: "/images/skills/jest.svg", category: "Testing & DevOps" },
  { name: "Postman", icon: "/images/skills/postman.svg", category: "Testing & DevOps" },
  { name: "Git", icon: "/images/logos/git.svg", category: "Testing & DevOps" },
  { name: "GitHub", icon: "/images/github.svg", category: "Testing & DevOps" },
  { name: "Vercel", icon: "/images/skills/vercel.svg", category: "Testing & DevOps" },
  { name: "Nginx", icon: "/images/skills/nginx.svg", category: "Testing & DevOps" },
  { name: "MongoDB Compass", icon: "/images/skills/compass.svg", category: "Testing & DevOps" },
  { name: "Performance Profiling", category: "Testing & DevOps" },
  { name: "Code Reviews", category: "Testing & DevOps" },

  { name: "Google Ads API", icon: "/images/skills/googleads.svg", category: "Ad-Tech" },
  { name: "Meta Marketing API", icon: "/images/skills/meta.svg", category: "Ad-Tech" },
  { name: "Google Ad Manager", icon: "/images/skills/google.svg", category: "Ad-Tech" },
  { name: "AdSense", icon: "/images/skills/googleadsense.svg", category: "Ad-Tech" },
  { name: "Header Bidding", icon: "/images/skills/prebid.svg", category: "Ad-Tech" },
  { name: "Google Publisher Tags", category: "Ad-Tech" },
  { name: "KV Targeting", category: "Ad-Tech" },

  { name: "Vertex AI", icon: "/images/skills/googlecloud.svg", category: "AI & Practices" },
  { name: "Gemini", icon: "/images/skills/googlegemini.svg", category: "AI & Practices" },
  { name: "Cloud Translate", icon: "/images/skills/googletranslate.svg", category: "AI & Practices" },
  { name: "ChatGPT", icon: "/images/skills/openai.svg", category: "AI & Practices" },
  { name: "Cursor", icon: "/images/skills/cursor.svg", category: "AI & Practices" },
  { name: "Agile / Scrum", category: "AI & Practices" },
  { name: "CI/CD Workflows", category: "AI & Practices" },
];

const techStackImgs = [
  { name: "React.js", imgPath: "/images/logos/react.png", accent: "#61DAFB" },
  { name: "Next.js", imgPath: "/images/nextjs.svg", accent: "#ffffff" },
  { name: "JavaScript", imgPath: "/images/skills/javascript.svg", accent: "#F7DF1E" },
  { name: "TypeScript", imgPath: "/images/skills/typescript.svg", accent: "#3178C6" },
  { name: "Node.js", imgPath: "/images/logos/node.png", accent: "#68A063" },
  { name: "Express.js", imgPath: "/images/express.svg", accent: "#ffffff" },
  { name: "MongoDB", imgPath: "/images/skills/mongodb.svg", accent: "#13AA52" },
  { name: "Redis", imgPath: "/images/skills/redis.svg", accent: "#DC382D" },
  { name: "Python", imgPath: "/images/logos/python.svg", accent: "#FFD43B" },
];

const expCards = [
  {
    review:
      "Contributing to Nexus, a microservice ad campaign platform for Google Ads and Meta — 7 Node.js/Fastify services behind an API gateway, with a Next.js frontend and MongoDB.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer — Somo Media Private Limited",
    date: "April 2026 - Present",
    responsibilities: [
      "Integrated the Google Ads API and Meta Marketing API to create, clone, publish, and sync campaigns across 50+ ad accounts, with long-running tasks on 20+ BullMQ queues and Redis.",
      "Added Redis caching and scheduled sync jobs, cutting report load time by ~60%, and optimized MongoDB aggregation pipelines to reduce API response time by ~40%.",
      "Shipped a shared React.js component library reused across 10+ production apps, improving render performance by ~15%.",
      "Built Google Ad Manager integrations (GPT, KV targeting, lazy loading, rewarded ads) and header-bidding modules calling 5+ partner APIs, improving viewability by ~20%.",
      "Migrated frontend modules to TypeScript with typed API contracts, and introduced config-driven deployments that cut new-integration setup by ~30%.",
    ],
  },
  {
    review:
      "Built Unidash, real-time sports APIs, and data-sync pipelines that consolidated campaign reporting for internal teams.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer — Somo Media Private Limited",
    date: "June 2025 - March 2026",
    responsibilities: [
      "Built and maintained Unidash, a React.js + Redux operations platform used to run ticketing and manage 50+ client accounts.",
      "Designed Node.js REST APIs for live cricket scores, schedules, and ball-by-ball commentary with sub-second latency for 1,000+ concurrent users.",
      "Engineered Node.js data-sync pipelines consolidating metrics from two reporting APIs into one React view, removing ~25% of manual reporting work.",
      "Configured client-side script integrations and subdomain routing across 15+ client web properties.",
    ],
  },
  {
    review:
      "Delivered full-stack features, reporting dashboards, and automation that replaced hours of manual work every week.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo1.png",
    title: "Junior Web Developer — Somo Media Private Limited",
    date: "January 2024 - May 2025",
    responsibilities: [
      "Delivered React.js + Node.js/Express features for a content management dashboard handling 100+ articles, domains, subdomains, and channels.",
      "Built a reporting dashboard visualising Google Ads and Meta Ads campaign data, improving data visibility for 20+ clients.",
      "Automated a recurring reporting workflow in Python with a Google reporting API, replacing ~5 hours/week of manual compilation.",
      "Built an internal tool for managing and deploying client-side scripts across client sites, reducing deployment time by ~40%.",
    ],
  },
];

const expLogos = [
  { name: "somomedia", imgPath: "/images/logo1.png" },
  { name: "somomedia", imgPath: "/images/logo1.png" },
  { name: "somomedia", imgPath: "/images/logo1.png" },
];

const educationItems = [
  {
    name: "Master of Computer Applications (MCA)",
    institution: "Integral University",
    period: "2025 – Present",
    status: "pursuing",
    review:
      "Pursuing MCA part-time alongside full-time work, deepening expertise in software engineering, algorithms, and computer applications.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Bachelor of Science (PCM)",
    institution: "Vimla Devi Ravindra Patel Mahavidyalaya, Sitapur, UP",
    period: "2018 – 2021",
    status: "completed",
    review:
      "Completed B.Sc. in Physics, Chemistry, and Mathematics, building a strong analytical foundation before pursuing software development.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Full Stack Web Development",
    institution: "PrepBytes",
    period: "Dec 2022 – Sep 2023",
    status: "completed",
    review:
      "Comprehensive training in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB with hands-on full-stack project development.",
    imgPath: "/images/client1.png",
  },
  {
    name: "NIELIT (DOEACC) O Level",
    institution: "National Institute of Electronics & IT (NIELIT)",
    period: "Aug 2022 – Jul 2023",
    status: "completed",
    review:
      "National certification in electronics and information technology from NIELIT.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Course on Computer Concepts (CCC)",
    institution: "NIELIT",
    period: "Feb 2021",
    status: "completed",
    review:
      "Foundational certification in computer concepts, marking the start of my journey into programming and technology.",
    imgPath: "/images/client4.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/akansha-1202",
    imgPath: "/images/github.svg",
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
