export const portfolioData = {
  en: {
    personal: {
      name: "Khanh Nguyen",
      title: "Java Full-Stack Developer",
      subtitle: "Cloud-Native Solutions",
      availability: "Available for Full-time",
      githubUrl: "https://github.com/khanh-hm-nguyen",
      linkedinUrl: "#",
      email: "khanh.hm.nguyen03@gmail.com",
      summary:
        "Java Full-Stack Developer focused on building secure, scalable systems. I specialize in bridging robust Java backends with the elite performance of Next.js to create seamless, SEO-optimized user experiences.",
    },
    hero: {
      btnProject: "View My Projects",
      btnGithub: "GitHub",
      codeFileName: "Developer.java",
      codeComment: "// Core Competencies",
    },
    skills: [
      {
        category: "Backend & Java",
        icon: "Storage",
        items: [
          "Java 21",
          "Spring Boot 4",
          "Spring Secruity 6",
          "OOP Principles",
          "JWT Security",
          "Hibernate/JPA",
          "Maven",
        ],
      },
      {
        category: "Databases & Cloud",
        icon: "Cloud",
        items: [
          "PostgreSQL (Neon)",
          "MongoDB",
          "Cloudinary",
          "Docker",
          "REST APIs",
          "Render/Vercel",
        ],
      },
      {
        category: "Frontend & Tools",
        icon: "Layers",
        items: [
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS",
          "Zustand/Redux",
          "Git / GitHub",
          "Responsive Design",
        ],
      },
    ],
    projects: [
      {
        title: "TaskFlow Full-Stack",
        image: "/projects/taskflow.png",
        description:
          "A production-grade task manager. I applied OOP Design Patterns in the Java backend to handle business logic and used JWT for secure, stateless authentication.",
        deployment: {
          frontend: "Vercel (Edge Network)",
          backend: "Render (Dockerized Spring Boot)",
          database: "Neon (Serverless PostgreSQL)",
        },
        tags: ["Spring Boot 4", "Next.js 16", "PostgreSQL", "Docker", "JWT"],
        repoLink: "https://github.com/khanh-hm-nguyen/task-flow",
        demoLink: "https://task-flow-vert-kappa.vercel.app",
        featured: true,
        category: "Full Stack",
      },
      {
        title: "EventHub Command Center",
        image: "/projects/eventhub.png",
        description:
          "A high-performance event discovery platform using a Hybrid Architecture. I implemented secure JWT-based Authentication and Role-Based Access Control (RBAC) via a custom Next.js 16 Proxy. Leveraged Server Actions for SEO-optimized data fetching and RESTful API routes for secure mutations (POST/PUT/DELETE).",
        deployment: {
          frontend: "Vercel (Next.js 16 Runtime)",
          backend: "Hybrid (Server Actions + REST API)",
          database: "MongoDB Atlas",
        },

        tags: [
          "Next.js 16",
          "JWT Auth",
          "RBAC",
          "Hybrid Architecture",
          "Cloudinary",
          "SEO",
        ],
        repoLink: "https://github.com/khanh-hm-nguyen/event-hub",
        demoLink: "https://event-hub-phi-ten.vercel.app/",
        featured: true,
        category: "Full Stack",
      },
    ],

    footer: {
      ctaTitle: "Ready to Collaborate?",
      ctaDesc:
        "I am currently available for internships and junior positions. If you are looking for a dedicated Java developer to join your team, let's get in touch.",
      emailBtn: "Email Me",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
    },
  },
  vi: {
    personal: {
      name: "Khánh Nguyễn",
      title: "Lập trình viên Java Full-Stack",
      subtitle: "Giải pháp Cloud-Native",
      availability: "Sẵn sàng làm việc toàn thời gian",
      githubUrl: "https://github.com/khanh-hm-nguyen",
      linkedinUrl: "#",
      email: "khanh.hm.nguyen03@gmail.com",
      summary:
        "Lập trình viên Java Full-Stack chuyên xây dựng các hệ thống bảo mật và có khả năng mở rộng cao. Thế mạnh của tôi là kết hợp hệ thống backend Java mạnh mẽ với hiệu suất vượt trội của Next.js để tạo ra những trải nghiệm người dùng mượt mà và tối ưu SEO.",
    },
    hero: {
      btnProject: "Xem Dự án",
      btnGithub: "GitHub",
      codeFileName: "Developer.java",
      codeComment: "// Kỹ năng cốt lõi",
    },
    skills: [
      {
        category: "Backend & Java",
        icon: "Storage",
        items: [
          "Java 21",
          "Spring Boot 4",
          "Spring Secruity 6",
          "OOP Principles",
          "JWT Security",
          "Hibernate/JPA",
          "Maven",
        ],
      },
      {
        category: "Databases & Cloud",
        icon: "Cloud",
        items: [
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "REST APIs",
          "Vercel",
          "Render",
          "Neon",
        ],
      },
      {
        category: "Frontend & Tools",
        icon: "Layers",
        items: [
          "Next.js 16",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Zustand/Redux",
          "Git / GitHub",
          "Responsive Design",
        ],
      },
    ],
    projects: [
      {
        title: "TaskFlow Full-Stack",
        image: "/projects/taskflow.png",
        description:
          "Trình quản lý tác vụ cấp sản xuất. Mình đã áp dụng OOP Design Patterns trong backend Java để xử lý nghiệp vụ và sử dụng JWT để xác thực bảo mật, không trạng thái.",
        deployment: {
          frontend: "Vercel (Edge Network)",
          backend: "Render (Dockerized Spring Boot)",
          database: "Neon (Serverless PostgreSQL)",
        },
        tags: ["Spring Boot 4", "Next.js 16", "PostgreSQL", "Docker", "JWT"],
        repoLink: "https://github.com/khanh-hm-nguyen/task-flow",
        demoLink: "https://task-flow-vert-kappa.vercel.app/",
        featured: true,
        category: "Full Stack",
      },
      {
        title: "EventHub Command Center",
        image: "/projects/eventhub.png",
        description:
          "Nền tảng khám phá sự kiện hiệu suất cao với Kiến trúc Hybrid. Mình đã triển khai Xác thực & Phân quyền bảo mật bằng JWT và RBAC thông qua hệ thống Proxy tùy chỉnh trên Next.js 16. Sử dụng Server Actions để tối ưu SEO và RESTful API cho các tác vụ thay đổi dữ liệu (POST/PUT/DELETE).",
        deployment: {
          frontend: "Vercel (Next.js 16 Runtime)",
          backend: "Hybrid (Server Actions + REST API)",
          database: "MongoDB Atlas",
        },
        tags: [
          "Next.js 16",
          "JWT Auth",
          "RBAC",
          "Kiến trúc Hybrid",
          "Cloudinary",
          "Tối ưu SEO",
        ],
        repoLink: "https://github.com/khanh-hm-nguyen/event-hub",
        demoLink: "https://event-hub-phi-ten.vercel.app",
        featured: true,
        category: "Full Stack",
      },
    ],
    footer: {
      ctaTitle: "Sẵn sàng hợp tác?",
      ctaDesc:
        "Mình hiện đang tìm kiếm vị trí thực tập hoặc lập trình viên sơ cấp. Nếu bạn đang tìm kiếm một lập trình viên Java tận tâm, hãy liên hệ với mình.",
      emailBtn: "Gửi Email",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
    },
  },
};
