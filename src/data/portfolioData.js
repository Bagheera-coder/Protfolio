export const PORTFOLIO_DATA = {
  personal: {
    name: "Abhishek Kumar",
    location: "Bihar, India",
    roles: [
      "MERN FULL STACK DEVELOPER",
      "WEB DEVELOPER",
      "SOFTWARE DEVELOPER",
      "DEVOPS ENTHUSIAST",
    ],
    github: "https://github.com/Bagheera-coder",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-b81472363/",
    instagram: "https://www.instagram.com/_______bagheera____/",
    aboutText: "I'm a Computer Science & Engineering student focused on building practical, real-world software using modern web technologies. I enjoy turning ideas into functional products and continuously improving my skills across full-stack development, cloud, DevOps, and emerging technologies.",
  },
  education: [
    {
      id: "class-10",
      title: "CLASS 10",
      school: "S.D. Public School, Rampur, Vaishali",
      board: "CBSE",
      year: "2021",
      score: "74.60%",
      scoreType: "Percentage"
    },
    {
      id: "class-12",
      title: "CLASS 12",
      school: "G.M.R.D. College, Mohanpur, Samastipur",
      board: "BSEB",
      stream: "PCM",
      year: "2023",
      score: "63.40%",
      scoreType: "Percentage"
    },
    {
      id: "btech",
      title: "B.TECH",
      school: "Centurion University of Technology and Management",
      campus: "Parlakhemundi, Odisha",
      degree: "Computer Science & Engineering",
      year: "2023 - 2027",
      score: "8.80",
      scoreType: "CGPA"
    }
  ],
  skills: {
    languages: ["JavaScript (ES6+)", "Java"],
    frontend: ["React.js", "Vite", "Next.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT"],
    database: ["MongoDB", "SQL", "MySQL", "Firebase / Firestore"],
    devops: ["Git", "GitHub", "Docker", "AWS", "Azure", "Firebase"],
    tools: ["Cloudinary", "Razorpay"],
    ai: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV"]
  },
  projects: [
    {
      id: "scrapbazar",
      title: "ScrapBazar",
      type: "MERN E-commerce / Scrap Marketplace",
      description: "A MERN-based marketplace for listing and discovering scrap items.",
      features: [
        "JWT authentication", "product listing", "product management", "cart",
        "checkout", "seller dashboard", "admin functionality", "image uploads",
        "Cloudinary", "payment integration", "REST APIs"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Razorpay / payment integration"],
      liveUrl: "https://scrap-bazar.vercel.app/",
      featured: true
    },
    {
      id: "flowboard",
      title: "FlowBoard",
      type: "Task / Workflow Management",
      description: "A modern web-based task and workflow management application designed to organize tasks, track progress, and manage work efficiently through an intuitive interface.",
      features: [],
      tech: ["React.js", "Vite", "CSS"],
      liveUrl: "https://flowboard-iota-three.vercel.app/",
      featured: false
    },
    {
      id: "devhire",
      title: "DevHire",
      type: "Developer Hiring Platform",
      description: "A developer-focused hiring platform designed to connect developers with job opportunities and streamline the process of discovering and applying for relevant roles.",
      features: [],
      tech: ["React.js", "Node.js"],
      liveUrl: "https://devhire-delta.vercel.app/",
      featured: false
    }
  ],
  internship: {
    title: "FULL STACK DEVELOPER INTERN",
    company: "Centurion University of Technology and Management",
    project: "AI-Integrated Website",
    duration: "1 Month"
  },
  certifications: [
    {
      title: "Course Completion Certificate",
      issuer: "GeeksforGeeks",
      year: "2025",
      url: "https://media.geeksforgeeks.org/courses/certificates/f5d106e5f772ae1bb4778a42c93535d2.pdf"
    },
    {
      title: "MERN Full Stack",
      issuer: "Tutedude",
      year: "2026",
      url: null // NOT PROVIDED YET
    }
  ],
  achievements: [
    "Senior YRC Volunteer",
    "Led Multiple Events",
    "Featured in a Local Newspaper"
  ],
  currentlyBuilding: [
    "MERN Full Stack Development",
    "DevOps",
    "Cloud",
    "AI / ML",
    "Software Engineering",
    "Production-style Projects",
    "Interview Preparation"
  ]
};
