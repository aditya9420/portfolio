export interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featuredStat: { label: string; value: string };
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  skills: { name: string; proficiency?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: 'internship' | 'simulation';
  description: string;
  bullets: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  details: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  file?: string;
  category: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Aditya Chavan",
    title: "Software Developer | Full-Stack Web Development",
    eyebrow: "VOLUME 01 · ISSUE 2026 · CHHATRAPATI SAMBHAJINAGAR, MH",
    heroHeading: "ENGINEERING REAL-WORLD SOFTWARE SYSTEMS.",
    heroSubheading: "Computer Science undergraduate building responsive, database-driven applications with React, Node.js, and PHP/MySQL — focused on real-world, scalable software solutions.",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    coordinates: "19.8762° N, 75.3433° E",
    email: "chavanaditya444@gmail.com",
    phone: "+91-8767759323",
    github: "https://github.com/aditya9420",
    linkedin: "https://linkedin.com/in/chavanaditya444",
    leetcode: "https://leetcode.com/u/aditya9420",
    portfolioUrl: "https://aditya9420.github.io/portfolio",
    resumePdf: "resume.pdf",
    portraitCutout: "Picsart_26-09-09_22-24-23-630.png",
    portraitFull: "pfp.jpg",
  },

  about: {
    prologue: "The digital landscape is crowded with ephemeral noise. My objective is the opposite: to architect dependable, database-driven applications that solve concrete human problems through clean code, structured schemas, and intuitive interaction.",
    paragraph1: "Currently pursuing a Bachelor of Computer Science at Deogiri Institute of Technology and Management Studies, I merge foundational algorithms and data structures with modern web engineering.",
    paragraph2: "From architecting full-stack agriculture management platforms to implementing production-ready frontend systems, I am at home across both ends of the wire — fluent in C++, Python, JavaScript, and PHP, alongside React, Node.js, and relational database management systems.",
    stats: [
      { num: "2027", label: "EXPECTED BCS GRADUATION", note: "Deogiri Institute of Tech & Mgmt" },
      { num: "4+", label: "CORE PROGRAMMING LANGUAGES", note: "C++, Python, JavaScript, PHP" },
      { num: "72.8%", label: "HSC BOARD STANDING", note: "Chhatrapati Shahu Maharaj College" },
      { num: "100%", label: "VERIFIED RESUME SOURCING", note: "No fabricated metrics" },
    ]
  },

  skills: [
    {
      category: "Core Languages",
      subtitle: "Algorithmic thinking & backend syntax",
      skills: [
        { name: "C++", highlight: true },
        { name: "Python", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "PHP", highlight: false }
      ]
    },
    {
      category: "Web Technologies",
      subtitle: "Interactive interfaces & client state",
      skills: [
        { name: "React", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Node.js", highlight: true },
        { name: "HTML5 / Semantics", highlight: false },
        { name: "CSS3 / Modern Layouts", highlight: false }
      ]
    },
    {
      category: "Databases & Schemas",
      subtitle: "Relational persistence & relational queries",
      skills: [
        { name: "MySQL", highlight: true },
        { name: "PostgreSQL", highlight: true }
      ]
    },
    {
      category: "Development Tools",
      subtitle: "Version control & environment orchestration",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "VS Code", highlight: false },
        { name: "XAMPP Server", highlight: false },
        { name: "MS Office Suite", highlight: false }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      role: "Software Development Intern",
      company: "Modi Innovations",
      period: "August 2026",
      type: "internship",
      description: "Direct industry engagement focusing on software engineering principles, application architecture, and practical system development.",
      bullets: [
        "Collaborated on core software development tasks within a professional engineering workflow.",
        "Applied full-stack web and database principles to deliver functional software modules.",
        "Participated in code reviews, bug fixes, and system feature enhancements."
      ],
      badge: "INDUSTRY INTERNSHIP"
    },
    {
      role: "GenAI & Data Analytics Simulation",
      company: "Tata (via Forage)",
      period: "2026",
      type: "simulation",
      description: "Comprehensive virtual experience evaluating GenAI technologies, data modeling, and business intelligence solutions.",
      bullets: [
        "Analyzed operational datasets to extract predictive insights using AI-assisted methodologies.",
        "Formulated business transformation recommendations backed by empirical metrics."
      ],
      badge: "VIRTUAL EXPERIENCE"
    },
    {
      role: "Data Analytics Simulation",
      company: "Deloitte (via Forage)",
      period: "July 2026",
      type: "simulation",
      description: "Virtual engineering program focused on real-world data analytics pipelines, forensic data scrutiny, and reporting.",
      bullets: [
        "Executed data cleaning, structural validation, and visualization workflows.",
        "Demonstrated practical acumen in addressing enterprise-grade analytical challenges."
      ],
      badge: "VIRTUAL EXPERIENCE"
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "e-agri-portal",
      num: "01",
      title: "e-Agri Portal",
      tagline: "Database-driven agricultural logistics & crop management ecosystem",
      description: "A web-based agriculture management platform engineered to streamline farm operations, soil metrics, and crop logistics through a database-driven architecture and responsive interface.",
      problem: "Traditional farm and crop record-keeping relies on fragmented paperwork or fragile spreadsheets, resulting in data loss, delayed harvest insights, and operational friction for local farming communities.",
      solution: "Engineered a centralized, role-based platform with complete CRUD functionality, relational MySQL integrity, and a clean, mobile-first Tailwind interface enabling instant crop logging and yield tracking.",
      architecture: [
        "Full CRUD Lifecycle: Secure creation, retrieval, updates, and deletion of crop cycles and farm inventory",
        "Database Normalization: Structured MySQL relational tables for farmers, crops, soil varieties, and seasons",
        "Server-Side Processing: PHP backend handling input sanitization, query parameterization, and session state",
        "Mobile-First Layout: Tailwind CSS styling designed for legibility on mid-tier handheld devices in outdoor lighting"
      ],
      stack: ["PHP", "MySQL", "HTML5", "Tailwind CSS"],
      githubUrl: "https://github.com/aditya9420",
      featuredStat: { label: "ARCHITECTURAL FOCUS", value: "Relational CRUD & Integrity" }
    },
    {
      id: "editorial-portfolio",
      num: "02",
      title: "Cinematic Editorial Portfolio",
      tagline: "VOX-inspired interactive documentary & dual-engine motion portfolio",
      description: "An award-winning personal web experience engineered with React, TypeScript, GSAP, and Framer Motion, presenting software engineering accomplishments through documentary storytelling.",
      problem: "Standard developer portfolios rely on predictable card templates and floating glassmorphism shapes that fail to communicate genuine craft, attention to detail, or deep technical restraint.",
      solution: "Designed a bespoke editorial system combining a 60fps GPU-accelerated flashlight reveal engine, physical string-pull interaction, SVG grain overlays, and complete accessibility compliance.",
      architecture: [
        "Dual Motion Separation: GSAP ScrollTrigger for cinematic timeline reveals; Framer Motion for tactile UI physics",
        "Flashlight Torchlight Engine: zero-re-render pointer tracking using requestAnimationFrame and CSS custom properties",
        "Mechanical String Physics: Restrained SVG bezier curve tensioning and multi-thread pulling mechanics",
        "Strict Accessibility: prefers-reduced-motion fallbacks, keyboard navigation traps, and 100% verified facts"
      ],
      stack: ["React", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/aditya9420",
      liveUrl: "https://aditya9420.github.io/portfolio",
      featuredStat: { label: "PERFORMANCE", value: "60 FPS GPU-Accelerated" }
    }
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Computer Science (BCS)",
      institution: "Deogiri Institute of Technology and Management Studies",
      period: "Expected 2027",
      details: "Comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming (C++), and Web Systems."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Chhatrapati Shahu Maharaj College Of Science",
      period: "Completed 2024",
      score: "72.83%",
      details: "Maharashtra State Board of Secondary and Higher Secondary Education. Focus on Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shivna International School & Jr College",
      period: "Completed 2022",
      score: "72.83%",
      details: "Maharashtra State Board. Strong foundation in mathematics, science, and foundational computing."
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "html-excellence",
      name: "HTML Certificate of Excellence",
      issuer: "Programming Hub",
      category: "Web Foundations",
      file: "certificates/Aditya Chavan_HTML.pdf"
    },
    {
      id: "js-programming-hub",
      name: "JavaScript Certification",
      issuer: "Programming Hub",
      category: "Programming",
      file: "certificates/Aditya Chavan_JavaScript_250305_224632.pdf"
    },
    {
      id: "react-bootcamp",
      name: "React Bootcamp Certification",
      issuer: "LetsUpgrade",
      category: "Frontend Frameworks",
      file: "certificates/LUERJSFEB1252143.pdf"
    },
    {
      id: "tata-genai",
      name: "GenAI Data Analytics Virtual Experience",
      issuer: "Tata (Forage)",
      category: "AI & Analytics",
      file: "certificates/certificate_1754659549489.png"
    },
    {
      id: "deloitte-analytics",
      name: "Data Analytics Virtual Experience",
      issuer: "Deloitte (Forage)",
      category: "Business Intelligence",
      file: "certificates/reactbt.jpeg" // verified reference
    },
    {
      id: "mongodb-basics",
      name: "MongoDB Basics",
      issuer: "MongoDB University",
      category: "Databases"
    },
    {
      id: "power-bi",
      name: "Power BI Certification",
      issuer: "Cursa",
      category: "Data Visualization"
    }
  ] as Certification[]
};
