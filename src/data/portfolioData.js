// Data: Projects
// TODO: Replace with your real projects and screenshots

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with user authentication, product catalog, cart management, and Stripe payment integration. Features real-time inventory updates and admin dashboard.",
    image: null, // TODO: Add project screenshot
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind"],
    github: "https://github.com/vikashsparmar", // TODO: Replace
    demo: "#", // TODO: Replace
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description: "Live messaging application built with Socket.io supporting private chats, group rooms, file sharing, and real-time typing indicators.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/vikashsparmar",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Kanban-style project tracker with drag-and-drop interface, team collaboration features, deadline tracking, and priority management.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/vikashsparmar",
    demo: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Full-featured blogging platform with rich text editor, categories, tags, comments, and SEO optimization. Supports Markdown and media uploads.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "Rich Text"],
    github: "https://github.com/vikashsparmar",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "API-driven weather application with 7-day forecasts, geolocation support, hourly breakdowns, and beautiful animated weather icons.",
    image: null,
    category: "Frontend",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/vikashsparmar",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Generator",
    description: "SaaS tool allowing developers to create stunning portfolios by filling out a simple form. Generates unique designs with multiple themes.",
    image: null,
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vikashsparmar",
    demo: "#",
    featured: false,
  },
];

// Data: Tech Stack
export const techStack = {
  Frontend: [
    { name: "React.js", icon: "⚛️", color: "#61DAFB", level: 90 },
    { name: "HTML5", icon: "🌐", color: "#E34F26", level: 95 },
    { name: "CSS3", icon: "🎨", color: "#1572B6", level: 90 },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E", level: 88 },
    { name: "Tailwind CSS", icon: "🌬️", color: "#06B6D4", level: 85 },
    { name: "Bootstrap", icon: "🅱️", color: "#7952B3", level: 80 },
    { name: "Redux", icon: "🔄", color: "#764ABC", level: 75 },
    { name: "Framer Motion", icon: "🎭", color: "#0055FF", level: 70 },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢", color: "#339933", level: 88 },
    { name: "Express.js", icon: "🚂", color: "#000000", level: 88 },
    { name: "REST APIs", icon: "🔌", color: "#10B981", level: 90 },
    { name: "JWT Auth", icon: "🔐", color: "#F59E0B", level: 85 },
    { name: "Socket.io", icon: "🔴", color: "#010101", level: 75 },
  ],
  Database: [
    { name: "MongoDB", icon: "🍃", color: "#47A248", level: 88 },
    { name: "Mongoose", icon: "🌿", color: "#800000", level: 85 },
    { name: "SQL", icon: "🗃️", color: "#336791", level: 65 },
    { name: "Firebase", icon: "🔥", color: "#FFCA28", level: 70 },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", icon: "🐙", color: "#F05032", level: 90 },
    { name: "VS Code", icon: "💙", color: "#007ACC", level: 95 },
    { name: "Postman", icon: "📮", color: "#FF6C37", level: 88 },
    { name: "Docker", icon: "🐳", color: "#2496ED", level: 60 },
    { name: "Vercel", icon: "▲", color: "#000000", level: 85 },
    { name: "Netlify", icon: "🌊", color: "#00C7B7", level: 80 },
  ],
  Languages: [
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E", level: 88 },
    { name: "Python", icon: "🐍", color: "#3776AB", level: 65 },
    { name: "C/C++", icon: "⚙️", color: "#00599C", level: 70 },
  ],
};

// Data: Experience
export const experience = [
  {
    id: 1,
    company: "Xorvo Technologies",
    role: "Backend Developer Intern",
    duration: "Jan 2024 - Apr 2024", // TODO: Update actual dates
    location: "Remote", // TODO: Update actual location
    type: "Internship",
    achievements: [
      "Developed and optimized RESTful APIs using Node.js and Express.js for production applications",
      "Integrated MongoDB with Mongoose for efficient data modeling and retrieval",
      "Collaborated with frontend team to ensure seamless API integration and data flow",
      "Improved backend response time by 40% through query optimization and caching strategies", // TODO: Update actual %
      "Implemented JWT-based authentication and authorization middleware",
    ],
    color: "#10B981",
  },
  {
    id: 2,
    company: "Freelance Projects",
    role: "Full Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    type: "Freelance",
    achievements: [
      "Built and deployed 5+ full-stack MERN applications for clients",
      "Worked with clients to define requirements and deliver solutions on time",
      "Implemented responsive designs and optimized for performance",
      "Provided ongoing maintenance and feature additions",
    ],
    color: "#F59E0B",
  },
];

// Data: Education
export const education = [
  {
    id: 1,
    degree: "B.Tech in CSE (AI & ML)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    duration: "2021 - 2025",
    cgpa: "X.X/10", // TODO: Add actual CGPA
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Machine Learning",
      "Operating Systems",
    ],
    color: "#10B981",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Intermediate (12th - Science)",
    institution: "Navjeevan Mission School",
    duration: "Year", // TODO: Add year
    percentage: "XX%", // TODO: Add percentage
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    color: "#06B6D4",
    icon: "📚",
  },
  {
    id: 3,
    degree: "Matriculation (10th)",
    institution: "Divya Jyoti Public School",
    duration: "Year", // TODO: Add year
    percentage: "XX%", // TODO: Add percentage
    highlights: ["Mathematics", "Science", "Social Studies", "Hindi"],
    color: "#F59E0B",
    icon: "🏫",
  },
];

// Data: Achievements
export const achievements = [
  {
    id: 1,
    category: "Certification",
    title: "Full Stack Web Development",
    issuer: "Udemy / Coursera", // TODO: Add actual platform
    year: "2023",
    icon: "🏆",
    color: "#10B981",
  },
  {
    id: 2,
    category: "Certification",
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    year: "2023",
    icon: "🍃",
    color: "#47A248",
  },
  {
    id: 3,
    category: "Certification",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    icon: "⚡",
    color: "#F59E0B",
  },
  {
    id: 4,
    category: "Certification",
    title: "Node.js Essential Training",
    issuer: "LinkedIn Learning",
    year: "2023",
    icon: "🟢",
    color: "#339933",
  },
  {
    id: 5,
    category: "Hackathon",
    title: "Smart India Hackathon",
    issuer: "[Position]", // TODO: Add position/achievement
    year: "2023",
    icon: "💡",
    color: "#06B6D4",
  },
  {
    id: 6,
    category: "Achievement",
    title: "Open Source Contributor",
    issuer: "10+ merged PRs", // TODO: Update actual number
    year: "2023-2024",
    icon: "🚀",
    color: "#8B5CF6",
  },
];

// Data: Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "Vikash's backend development skills are exceptional. He delivered clean, optimized APIs ahead of schedule.", // TODO: Get real testimonials
    name: "John Doe",
    role: "CTO",
    company: "Xorvo Technologies",
    avatar: null,
  },
  {
    id: 2,
    quote: "Working with Vikash was a great experience. His MERN stack knowledge and problem-solving skills are impressive.",
    name: "Jane Smith",
    role: "Product Manager",
    company: "Tech Startup",
    avatar: null,
  },
  {
    id: 3,
    quote: "Vikash built our entire e-commerce platform in record time. The code quality and attention to detail was outstanding.",
    name: "Alex Johnson",
    role: "Founder",
    company: "E-Commerce Startup",
    avatar: null,
  },
];

// Data: Blog/Code Snippets
export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable REST APIs with Node.js & Express",
    excerpt: "Learn best practices for building production-ready APIs including error handling, validation, and authentication.",
    date: "Mar 2024",
    tags: ["Node.js", "Express", "REST API"],
    type: "blog",
    code: null,
    link: "#", // TODO: Link to real blog
  },
  {
    id: 2,
    title: "MongoDB Aggregation Pipeline Explained",
    excerpt: "A deep dive into MongoDB's aggregation framework with real-world examples for MERN stack developers.",
    date: "Feb 2024",
    tags: ["MongoDB", "Database"],
    type: "blog",
    code: `db.orders.aggregate([
  { $match: { status: "active" } },
  { $group: {
    _id: "$userId",
    total: { $sum: "$amount" }
  }},
  { $sort: { total: -1 } }
])`,
    link: "#",
  },
  {
    id: 3,
    title: "React Custom Hooks: useLocalStorage",
    excerpt: "Creating reusable custom hooks to persist state in localStorage with TypeScript-ready implementations.",
    date: "Jan 2024",
    tags: ["React", "JavaScript", "Hooks"],
    type: "snippet",
    code: `const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(
    () => JSON.parse(
      localStorage.getItem(key)
    ) ?? initial
  );
  useEffect(() => {
    localStorage.setItem(key, 
      JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};`,
    link: "#",
  },
];
