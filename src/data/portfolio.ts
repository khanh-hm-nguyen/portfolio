export const portfolioData = {
  en: {
    personal: {
      name: "Khanh Nguyen",
      birthYear: 2003,
      title: "Java Full-Stack Developer",
      subtitle: "Cloud-Native Solutions",
      availability: "Available for Full-time",
      githubUrl: "https://github.com/khanh-hm-nguyen",
      linkedinUrl: "#",
      email: "your.email@example.com",
      summary:
        "Born in 2003, I began my global journey at 16, moving to Canada to pursue my education. After graduating from SAIT in 2023, I navigated a period of personal growth and resilience. Today, I am back with a deeper passion for coding, combining my strong Java foundation with the cutting-edge capabilities of Next.js 16 to build high-performance, full-stack applications.",
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
          "Spring Boot 3",
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
          "Docker",
          "REST APIs",
          "Render/Vercel",
        ],
      },
      {
        category: "Frontend Ecosystem",
        icon: "Layers",
        items: [
          "Next.js 16",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Zustand/Redux",
          "Responsive Design",
        ],
      },
    ],
    projects: [
      {
        title: "TaskFlow Full-Stack",
        description:
          "A production-grade task manager. I applied OOP Design Patterns in the Java backend to handle business logic and used JWT for secure, stateless authentication.",
        deployment: {
          frontend: "Vercel (Edge Network)",
          backend: "Render (Dockerized Spring Boot)",
          database: "Neon (Serverless PostgreSQL)",
        },
        tags: ["Spring Boot 3", "Next.js 16", "PostgreSQL", "Docker", "JWT"],
        repoLink: "https://github.com/khanh-hm-nguyen/task-flow",
        demoLink: "https://task-flow-frontend.vercel.app",
        featured: true,
        category: "Full Stack",
      },
      {
        title: "EventHub Command Center",
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
        demoLink: "event-hub-phi-ten.vercel.app",
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
      birthYear: 2003,
      title: "Lập trình viên Java Full-Stack",
      subtitle: "Giải pháp Cloud-Native",
      availability: "Sẵn sàng làm việc Full-time",
      githubUrl: "https://github.com/khanh-hm-nguyen",
      linkedinUrl: "",
      email: "your.email@example.com",
      summary:
        "Sinh năm 2003, mình bắt đầu hành trình quốc tế từ năm 16 tuổi khi chuyển đến Canada. Sau khi tốt nghiệp SAIT năm 2023, mình đã trải qua giai đoạn phát triển cá nhân. Hôm nay, mình trở lại với niềm đam mê mãnh liệt hơn, kết hợp nền tảng Java vững chắc với khả năng của Next.js 16 để xây dựng các ứng dụng hiệu suất cao.",
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
          "Spring Boot 3",
          "Nguyên lý OOP",
          "Bảo mật JWT",
          "Hibernate/JPA",
          "Maven",
        ],
      },
      {
        category: "Cơ sở dữ liệu & Cloud",
        icon: "Cloud",
        items: [
          "PostgreSQL (Neon)",
          "MongoDB",
          "Docker",
          "REST APIs",
          "Render/Vercel",
        ],
      },
      {
        category: "Hệ sinh thái Frontend",
        icon: "Layers",
        items: [
          "Next.js 16",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Zustand/Redux",
          "Responsive Design",
        ],
      },
    ],
    projects: [
      {
        title: "TaskFlow Full-Stack",
        description:
          "Trình quản lý tác vụ cấp sản xuất. Mình đã áp dụng các Mẫu thiết kế OOP trong backend Java để xử lý nghiệp vụ và sử dụng JWT để xác thực bảo mật, không trạng thái.",
        deployment: {
          frontend: "Vercel (Edge Network)",
          backend: "Render (Dockerized Spring Boot)",
          database: "Neon (Serverless PostgreSQL)",
        },
        tags: ["Spring Boot 3", "Next.js 16", "PostgreSQL", "Docker", "JWT"],
        repoLink: "https://github.com/khanh-hm-nguyen/task-flow",
        demoLink: "https://task-flow-frontend.vercel.app",
        featured: true,
        category: "Full Stack",
      },
      {
        title: "EventHub Command Center",
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
        demoLink: "event-hub-phi-ten.vercel.app",
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
