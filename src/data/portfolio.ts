export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Java Backend Developer",
    subtitle: "with Full Stack Vision",
    email: "your.email@gmail.com",
    githubUrl: "#",
    linkedinUrl: "#",
    summary: "I build robust, scalable backends using Java & Spring Boot, while leveraging my React & Next.js knowledge to create seamless full-stack integrations. Passionate about Algorithms, OOP, and Clean Code.",
    availability: "Available for Internship"
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  skills: [
    {
      category: "Backend & Java",
      icon: "Storage", 
      items: ["Java Core", "Spring Boot", "Hibernate/JPA", "OOP Principles", "REST APIs", "Maven"]
    },
    {
      category: "Frontend Ecosystem",
      icon: "Layers", 
      items: ["React.js", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)"]
    },
    {
      category: "CS & Tools",
      icon: "Memory", 
      items: ["Data Structures", "Algorithms", "Git / GitHub", "SQL (MySQL)", "Postman", "Unit Testing"]
    }
  ],
  projects: [
    {
      title: "Java Algorithms & Structures",
      description: "A comprehensive collection of Data Structures and Algorithm solutions implemented in Java. Demonstrates understanding of time complexity, memory management, and pure OOP concepts.",
      tags: ["Java 17", "JUnit", "Algorithms"],
      repoLink: "#",
      demoLink: null,
      featured: true,
      category: "Core Java"
    },
    {
      title: "Task Management REST API",
      description: "A complete backend application managing tasks and users. Features include JWT Authentication, CRUD operations, and One-to-Many database relationships.",
      tags: ["Spring Boot 3", "MySQL", "Next.js"],
      repoLink: "#",
      demoLink: "#",
      featured: true,
      category: "Full Stack"
    }
  ]
};