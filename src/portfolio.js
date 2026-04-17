/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "BK Vishwakarma",
  title: "Hi, I'm BK Vishwakarma",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with 8+ years of experience (2017–present) building Web, Mobile & Desktop applications. Skilled in React, Node.js, Flutter, PHP, Python, AWS, Firebase and Agentic AI systems using LangChain & LLMs."
  ),
  resumeLink: "", // Add your resume link here
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bkweb11",
  linkedin: "https://www.linkedin.com/in/bk-vishwakarma/",
  gmail: "bkweb11@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK DEVELOPER | AI ENGINEER | MOBILE & DESKTOP APP BUILDER",
  skills: [
    emoji(
      "⚡ Build scalable Web & Mobile applications using React, Next.js, Node.js, Flutter & React Native"
    ),
    emoji(
      "⚡ Develop Agentic AI systems with LangChain, LLMs, RAG Pipelines & Hugging Face"
    ),
    emoji(
      "⚡ Cloud infrastructure management on AWS, Firebase, Linux servers, cPanel & CloudPanel"
    ),
    emoji(
      "⚡ CRM, ERP, WebRTC video/chat platforms, and IoT/Electronics projects"
    )
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "SQL Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress" },
    { skillName: "Android", fontAwesomeClassname: "fab fa-android" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false,
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Full Stack Web Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Mobile App Development (Flutter / React Native)",
      progressPercentage: "85%"
    },
    {
      Stack: "AI / Machine Learning (LangChain, LLMs, RAG)",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend & Server Management",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Sr. Development Manager",
      company: "JKM Global Services",
      date: "Apr 2022 – Present",
      desc: "Leading full-stack development teams and managing end-to-end product delivery. Overseeing architecture decisions, cloud infrastructure, and AI integrations.",
      descBullets: [
        "Managing development of web, mobile & desktop applications",
        "Architecting AWS cloud infrastructure and server management",
        "Building Agentic AI systems using LangChain, LLMs & RAG pipelines",
        "Noida, Uttar Pradesh, India · On-site"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "JKM Global Services",
      date: "2017 – Apr 2022",
      desc: "Full-stack development across web, mobile, and desktop platforms using modern technologies.",
      descBullets: [
        "React.js, Next.js, Node.js, PHP, Python, Flutter, React Native",
        "AWS, Firebase, MongoDB, MySQL, PostgreSQL",
        "WebRTC video/chat platforms, CRM & ERP systems",
        "IoT & Electronics projects with Arduino"
      ]
    },
    {
      role: "PHP Developer",
      company: "Delimp Technology",
      companyUrl: "https://delimp.com/",
      date: "Nov 2016 – Mar 2017",
      desc: "Worked as a PHP Developer building web applications and backend systems.",
      descBullets: [
        "PHP-based web application development",
        "Database design and management",
        "Frontend integration with HTML, CSS & JavaScript"
      ]
    },
    {
      role: "Intern",
      company: "Obly India",
      date: "Feb 2016 – Nov 2016",
      desc: "Started professional journey as an intern at Obly India, Prayagraj. Gained hands-on experience in web development and software engineering fundamentals.",
      descBullets: [
        "Web development fundamentals — HTML, CSS, JavaScript, PHP",
        "Assisted in building and maintaining web projects",
        "Prayagraj, Uttar Pradesh, India"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCTS & PLATFORMS I HAVE BUILT",
  projects: [
    {
      projectName: "Computeroids",
      projectDesc:
        "Tech news and information platform available at computeroids.com & computeroids.us",
      footerLink: [
        { name: "Visit Website", url: "https://computeroids.com/" },
        { name: "US Version", url: "https://computeroids.us/" }
      ]
    },
    {
      projectName: "Insaaf99",
      projectDesc:
        "Legal services platform with WebRTC-based online video call & chat at meet.insaaf99.com",
      footerLink: [
        { name: "Visit Website", url: "https://insaaf99.com/" },
        { name: "Video Call", url: "https://meet.insaaf99.com/" }
      ]
    },
    {
      projectName: "Wallex Appliances",
      projectDesc: "E-commerce platform for home appliances",
      footerLink: [
        { name: "Visit Website", url: "https://wallexappliances.com/" }
      ]
    },
    {
      projectName: "Sapphire Softech",
      projectDesc:
        "Software company website with a full-featured CRM system at crm.sapphiresoftech.com",
      footerLink: [
        { name: "Visit Website", url: "https://sapphiresoftech.com/" },
        { name: "CRM Portal", url: "https://crm.sapphiresoftech.com/" }
      ]
    },
    {
      projectName: "iMeet – Chat & Video Platform",
      projectDesc:
        "Microsoft Teams-like chat & video conferencing web and mobile application",
      footerLink: [
        { name: "Visit App", url: "https://imeet.jkmglobal.net/" }
      ]
    },
    {
      projectName: "InsurMonthly",
      projectDesc: "Insurance services platform",
      footerLink: [
        { name: "Visit Website", url: "https://insurmonthly.com/" }
      ]
    },
    {
      projectName: "HomeStation",
      projectDesc: "Real estate & home services platform",
      footerLink: [
        { name: "Visit Website", url: "https://homestation.ae/" }
      ]
    },
    {
      projectName: "ChatLooper – Agentic AI",
      projectDesc: "Agentic AI chat platform powered by LLMs",
      footerLink: [
        { name: "Visit Website", url: "https://chatlooper.com/" }
      ]
    },
    {
      projectName: "Zintrix CRM",
      projectDesc: "WhatsApp Bot CRM system for business automation",
      footerLink: [
        { name: "Visit CRM", url: "https://crm.zintrix.com/" }
      ]
    },
    {
      projectName: "A4Paper.in",
      projectDesc: "Online document & paper services platform",
      footerLink: [
        { name: "Visit Website", url: "https://a4paper.in/" }
      ]
    },
    {
      projectName: "PcDriverPro",
      projectDesc:
        "Windows desktop application built with Python for automatic PC driver management",
      footerLink: [
        { name: "Visit Website", url: "https://pcdriverpro.com/" }
      ]
    },
    {
      projectName: "IIMM Delhi",
      projectDesc: "Institute website and management portal",
      footerLink: [
        { name: "Visit Website", url: "https://iimmdelhi.org/" }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Skills & Expertise 🏆"),
  subtitle: "Technologies, Frameworks & Tools I Work With",

  achievementsCards: [
    {
      title: "Languages & Frameworks",
      subtitle:
        "Python, Node.js, React.js, Next.js, PHP, Flutter, Laravel, Django, CodeIgniter, MERN Stack, PyQt",
      footerLink: []
    },
    {
      title: "Databases",
      subtitle:
        "MySQL, MongoDB, PostgreSQL, Firebase Realtime DB & Firestore, NoSQL",
      footerLink: []
    },
    {
      title: "AI & Machine Learning",
      subtitle:
        "LangChain, LLMs, RAG Pipelines, Hugging Face, AI Agents, Cursor, GitHub Copilot",
      footerLink: []
    },
    {
      title: "CMS & Platforms",
      subtitle: "WordPress, MERN, Laravel, CodeIgniter, Django",
      footerLink: []
    },
    {
      title: "Server & DevOps",
      subtitle:
        "Linux, cPanel, CloudPanel, AWS, Firebase, Perl, Firewall & Networking, Inhouse Server Setup",
      footerLink: []
    },
    {
      title: "Mobile & Desktop Apps",
      subtitle:
        "Flutter (iOS/Android), React Native, PcDriverPro (Python/Windows), iMeet (Teams-like), JKM CRM ERP",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I share knowledge about Full Stack Development and AI Engineering.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://www.linkedin.com/in/bk-vishwakarma/",
      title: "AI Developer | Building Agentic AI Systems with LangChain & LLMs",
      description:
        "Exploring how to build production-ready Agentic AI systems using LangChain, LLMs, and RAG pipelines."
    },
    {
      url: "https://www.linkedin.com/in/bk-vishwakarma/",
      title: "Full Stack Development: From Web to Mobile to AI",
      description:
        "8+ years of experience building scalable applications across web, mobile, desktop, and AI domains."
    }
  ],
  display: false
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Sharing knowledge about Full Stack Dev & AI 🤖"),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "TALKING ABOUT TECH, AI AND DEVELOPMENT",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or collaborate? My inbox is open for all.",
  number: "+91-9084928656",
  email_address: "bkweb11@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
