export type Language = "en" | "vi";
export type TerminalTabKey = "profile" | "experience" | "hire";
export type ProjectKey = "hugoclo" | "parking";
export type SkillCategory = "all" | "frontend" | "backend" | "tools";

export const CONTACT_EMAIL = "devhugo292004@gmail.com";
export const CONTACT_PHONE = "0348 296 335";

export const IMAGES = {
  avatar: "/images/gvh.jpg",
  hugoclo: "/images/hugoclo.png",
  parking: "/images/parking.png",
} as const;

export const ROLES: Record<Language, string[]> = {
  en: [
    "Front-end Developer",
    "Full-stack Developer",
    "React & Node.js Builder",
  ],
  vi: [
    "Lập trình viên Front-end",
    "Lập trình viên Full-stack",
    "Phát triển React & Node.js",
  ],
};

export interface Translations {
  // Sidebar & Navigation
  hero_badge: string;
  nav_home: string;
  nav_about: string;
  nav_projects: string;
  nav_contact: string;
  toast_copied: string;

  // Home
  hero_title: string;
  btn_copy_email: string;
  btn_explore_work: string;
  btn_run_cmd: string;
  hl_1_tag: string;
  hl_1_sub: string;
  hl_2_tag: string;
  hl_2_title: string;
  hl_3_tag: string;
  hl_3_title: string;
  hl_3_sub: string;
  skills_title: string;
  skills_subtitle: string;

  // About
  about_eyebrow: string;
  about_title: string;
  about_p1: string;
  about_p2: string;
  stat_1_label: string;
  stat_3_label: string;
  journey_eyebrow: string;
  journey_title: string;
  tag_intern: string;
  tag_edu: string;
  exp_role: string;
  exp_b1: string;
  exp_b2: string;
  exp_b3: string;
  exp_b4: string;
  edu_degree: string;
  edu_courses: string;

  // Projects
  proj_title: string;
  btn_view_live: string;
  proj_highlights_label: string;

  // Contact
  contact_eyebrow: string;
  btn_back: string;
  contact_title: string;
  contact_subtitle: string;
  tag_primary: string;
  desc_email: string;
  btn_send_mail: string;
  desc_github: string;
  btn_open_github: string;
  desc_facebook: string;
  btn_open_fb: string;
  desc_instagram: string;
  btn_open_ig: string;
  form_title: string;
  form_name: string;
  form_email: string;
  form_msg: string;
  form_sent: string;
  form_submit: string;
  direct_info: string;
  label_phone: string;
  label_location: string;
  label_avail: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    hero_badge: "Open to Intern / Fresher",
    nav_home: "Home",
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_contact: "Contact",
    toast_copied: "Copied devhugo292004@gmail.com",

    hero_title: "Crafting fast UI & reliable full-stack apps.",
    btn_copy_email: "Copy Email",
    btn_explore_work: "Explore Work",
    btn_run_cmd: "Run",
    hl_1_tag: "EXPERIENCE",
    hl_1_sub: "Intern Front-end Developer",
    hl_2_tag: "PROJECTS",
    hl_2_title: "2 Featured Case Studies",
    hl_3_tag: "AVAILABILITY",
    hl_3_title: "Ready to Join",
    hl_3_sub: "On-site / Hybrid in HCMC",
    skills_title: "Skills & Technologies",
    skills_subtitle:
      "Hover or tap any circular logo to inspect its role in my projects.",

    about_eyebrow: "ABOUT ME",
    about_title: "Passionate about clean interfaces & scalable web systems.",
    about_p1:
      "I am Giao Vinh Hung, a final-year Software Engineering student at FPT University Ho Chi Minh City (2022–2026) with hands-on industry experience as a Front-end Developer Intern at FPT Software.",
    about_p2:
      "My focus sits at the intersection of responsive UI engineering and practical full-stack architecture — turning complex product requirements into fast, accessible ReactJS interfaces backed by reliable Node.js, Express, and MongoDB APIs.",
    stat_1_label: "TARGET ROLE",
    stat_3_label: "LOCATION",
    journey_eyebrow: "BACKGROUND",
    journey_title: "Experience & Education",
    tag_intern: "INTERNSHIP",
    tag_edu: "EDUCATION",
    exp_role: "Intern Front-end Developer",
    exp_b1:
      "Applied standard Agile/Scrum software development workflows across team sprints.",
    exp_b2:
      "Built responsive UI components with ReactJS, Tailwind CSS, and Vite across desktop and mobile viewports.",
    exp_b3:
      "Collaborated with Back-end engineers to integrate RESTful APIs and manage dynamic data flows.",
    exp_b4:
      "Participated in code reviews, bug fixing, and front-end performance optimization under mentor guidance.",
    edu_degree: "Bachelor of Software Engineering",
    edu_courses:
      "Relevant Coursework: Data Structures & Algorithms, Database Systems, Web Design, Front-End Web Development with React, Server-Side Development with Node.js, Express & MongoDB, Software Architecture & Software Testing.",

    proj_title: "Featured Projects",
    btn_view_live: "View Live",
    proj_highlights_label: "KEY ARCHITECTURE",

    contact_eyebrow: "GET IN TOUCH",
    btn_back: "Back to Portfolio",
    contact_title: "Let's connect & build together.",
    contact_subtitle:
      "Currently open to Front-end or Full-stack Developer Intern opportunities in Ho Chi Minh City. Reach out directly via email or any of my social channels below.",
    tag_primary: "PRIMARY",
    desc_email:
      "Fastest way to reach me for interviews, internships, or project inquiries.",
    btn_send_mail: "Send Mail",
    desc_github:
      "Explore source code for HugoClo, Smart Motorbike Parking, and daily commits.",
    btn_open_github: "Open GitHub",
    desc_facebook:
      "Connect or send a quick Messenger ping for collaborations and tech chats.",
    btn_open_fb: "Visit Facebook",
    desc_instagram:
      "Behind-the-scenes campus life, UI experiments, and developer journey.",
    btn_open_ig: "Visit Instagram",
    form_title: "Send a Quick Message",
    form_name: "Your Name",
    form_email: "Your Email",
    form_msg: "Message",
    form_sent: "Message received! Thank you for reaching out.",
    form_submit: "Send Message",
    direct_info: "DIRECT DETAILS",
    label_phone: "Phone / Zalo",
    label_location: "Location",
    label_avail: "Available for On-site & Hybrid Internships",
  },
  vi: {
    hero_badge: "Sẵn sàng vị trí Intern / Fresher",
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_projects: "Dự án",
    nav_contact: "Liên hệ",
    toast_copied: "Đã sao chép devhugo292004@gmail.com",

    hero_title: "Xây dựng giao diện nhanh & hệ thống full-stack.",
    btn_copy_email: "Sao chép Email",
    btn_explore_work: "Xem dự án",
    btn_run_cmd: "Chạy",
    hl_1_tag: "KINH NGHIỆM",
    hl_1_sub: "Thực tập sinh Front-end",
    hl_2_tag: "DỰ ÁN",
    hl_2_title: "2 Dự án Nổi bật",
    hl_3_tag: "TRẠNG THÁI",
    hl_3_title: "Sẵn sàng gia nhập",
    hl_3_sub: "On-site / Hybrid tại TP.HCM",
    skills_title: "Kỹ năng & Công nghệ",
    skills_subtitle:
      "Rê chuột vào từng biểu tượng tròn để xem tên và vai trò trong dự án.",

    about_eyebrow: "VỀ BẢN THÂN",
    about_title: "Đam mê giao diện tinh gọn & hệ thống web ổn định.",
    about_p1:
      "Tôi là Giao Vĩnh Hưng, sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT TP.HCM (2022–2026), đã có kinh nghiệm thực tế với vai trò Thực tập sinh Front-end Developer tại FPT Software.",
    about_p2:
      "Thế mạnh của tôi là kết hợp kỹ thuật xây dựng giao diện responsive mượt mà với tư duy full-stack thực tế — biến yêu cầu sản phẩm thành giao diện ReactJS tối ưu kết nối cùng API Node.js, Express và MongoDB.",
    stat_1_label: "VỊ TRÍ MỤC TIÊU",
    stat_3_label: "ĐỊA ĐIỂM",
    journey_eyebrow: "HÀNH TRÌNH",
    journey_title: "Kinh nghiệm & Học vấn",
    tag_intern: "THỰC TẬP",
    tag_edu: "HỌC VẤN",
    exp_role: "Thực tập sinh Front-end Developer",
    exp_b1:
      "Áp dụng quy trình phát triển phần mềm Agile/Scrum chuẩn của công ty trong các sprint.",
    exp_b2:
      "Thiết kế và xây dựng UI components responsive bằng ReactJS, Tailwind CSS và Vite trên đa thiết bị.",
    exp_b3:
      "Phối hợp chặt chẽ với đội Back-end để tích hợp RESTful API và xử lý luồng dữ liệu động.",
    exp_b4:
      "Tham gia code review, sửa lỗi và tối ưu hiệu năng website dưới sự hướng dẫn của mentor.",
    edu_degree: "Cử nhân Kỹ thuật Phần mềm",
    edu_courses:
      "Môn học tiêu biểu: Cấu trúc dữ liệu & Giải thuật, Hệ quản trị CSDL, Thiết kế Web, Front-End với React, Server-Side với Node.js, Express & MongoDB, Kiến trúc & Kiểm thử phần mềm.",

    proj_title: "Dự án Nổi bật",
    btn_view_live: "Xem Live",
    proj_highlights_label: "KIẾN TRÚC NỔI BẬT",

    contact_eyebrow: "KẾT NỐI TRỰC TIẾP",
    btn_back: "Quay lại Portfolio",
    contact_title: "Kết nối & cùng nhau xây dựng sản phẩm.",
    contact_subtitle:
      "Tôi đang tìm kiếm cơ hội thực tập Front-end hoặc Full-stack tại TP.HCM. Bạn có thể liên hệ trực tiếp qua email hoặc các kênh mạng xã hội bên dưới.",
    tag_primary: "ƯU TIÊN",
    desc_email:
      "Kênh phản hồi nhanh nhất cho lịch phỏng vấn, thực tập hoặc trao đổi dự án.",
    btn_send_mail: "Gửi Email",
    desc_github:
      "Xem mã nguồn của HugoClo, Smart Motorbike Parking và các dự án cá nhân.",
    btn_open_github: "Mở GitHub",
    desc_facebook:
      "Kết bạn hoặc nhắn Messenger để trao đổi nhanh về công việc và công nghệ.",
    btn_open_fb: "Mở Facebook",
    desc_instagram:
      "Khoảnh khắc đời thường tại ĐH FPT và các thử nghiệm giao diện mới.",
    btn_open_ig: "Mở Instagram",
    form_title: "Gửi lời nhắn nhanh",
    form_name: "Họ và tên",
    form_email: "Email của bạn",
    form_msg: "Nội dung lời nhắn",
    form_sent: "Đã ghi nhận lời nhắn! Cảm ơn bạn đã liên hệ.",
    form_submit: "Gửi tin nhắn",
    direct_info: "THÔNG TIN TRỰC TIẾP",
    label_phone: "Điện thoại / Zalo",
    label_location: "Địa điểm",
    label_avail: "Sẵn sàng thực tập On-site & Hybrid",
  },
};

export interface ProjectHighlight {
  label: string;
  detail: Record<Language, string>;
}

export interface ProjectItem {
  key: ProjectKey;
  github: string;
  live?: string;
  img: string;
  alt: string;
  role: string;
  date: string;
  title: string;
  desc: Record<Language, string>;
  stack: string[];
  highlights: ProjectHighlight[];
}

export const PROJECTS: ProjectItem[] = [
  {
    key: "hugoclo",
    github: "https://github.com/HuGo292004/HugoClo",
    live: "https://hugo-clo.vercel.app",
    img: IMAGES.hugoclo,
    alt: "HugoClo E-Commerce Platform",
    role: "Full-stack Developer",
    date: "Jun - Oct 2026",
    title: "HugoClo E-Commerce Website",
    desc: {
      en: "Full-stack fashion storefront & admin dashboard featuring VNPay and MoMo payment gateways with HMAC security & IPN webhooks, ColorThief auto-tagging, and Optimistic UI cart/wishlist.",
      vi: "Website thời trang Full-stack & trang quản trị: tích hợp VNPay/MoMo HMAC webhook, tự động gắn nhãn màu tiếng Việt bằng ColorThief, Optimistic UI và phân quyền JWT + RBAC.",
    },
    stack: [
      "ReactJS",
      "TailwindCSS",
      "Ant Design",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    highlights: [
      {
        label: "VNPay & MoMo HMAC",
        detail: {
          en: "Secured online transactions using HMAC signature verification and automated IPN webhooks for reliable order confirmation.",
          vi: "Bảo mật giao dịch trực tuyến bằng chữ ký HMAC và IPN webhook tự động xác nhận đơn hàng.",
        },
      },
      {
        label: "ColorThief Auto-Tag",
        detail: {
          en: "Extracted dominant colors from uploaded product photos and mapped them automatically to Vietnamese color names.",
          vi: "Tự động trích xuất màu chủ đạo từ ảnh sản phẩm bằng ColorThief và ánh xạ sang tên màu tiếng Việt.",
        },
      },
      {
        label: "Optimistic UI & RBAC",
        detail: {
          en: "Instant cart/wishlist responsiveness via Optimistic UI updates, backed by JWT authentication, RBAC, and scheduled order cleanup.",
          vi: "Phản hồi giỏ hàng tức thì với Optimistic UI, kết hợp xác thực JWT, phân quyền RBAC và dọn đơn tự động.",
        },
      },
    ],
  },
  {
    key: "parking",
    github: "https://github.com/DatVX02/Smart_Motorcycle_Parking_FE",
    img: IMAGES.parking,
    alt: "Smart Motorbike Parking System",
    role: "Front-end Developer",
    date: "Feb - May 2026",
    title: "Smart Motorbike Parking System",
    desc: {
      en: "Comprehensive Web Admin dashboard managing parking lots, staff shifts, monthly passes, and IoT hardware statuses. Integrated PayOS cashless top-ups and real-time AI OCR license plate logs.",
      vi: "Dashboard quản trị bãi xe thông minh: quản lý ca trực, thẻ tháng, trạng thái thiết bị IoT, biểu đồ doanh thu real-time, thanh toán PayOS và log nhận diện biển số AI OCR.",
    },
    stack: [
      "ReactJS",
      "React Native",
      "TailwindCSS",
      "C# .NET",
      "PostgreSQL",
      "Python",
    ],
    highlights: [
      {
        label: "AI OCR & Face Logs",
        detail: {
          en: "Connected frontend components with AI models and IoT hardware to display real-time license plate OCR and facial recognition logs for mismatch handling.",
          vi: "Kết nối giao diện với mô hình AI và phần cứng IoT để hiển thị log nhận diện biển số OCR và khuôn mặt theo thời gian thực.",
        },
      },
      {
        label: "PayOS E-Wallet",
        detail: {
          en: "Collaborated with Back-end team to integrate PayOS payment gateway for seamless e-wallet top-ups and cashless parking fees.",
          vi: "Phối hợp đội Back-end tích hợp cổng thanh toán PayOS cho nạp ví điện tử và thanh toán phí gửi xe không tiền mặt.",
        },
      },
      {
        label: "Real-time Analytics",
        detail: {
          en: "Built intuitive data visualization dashboards tracking live revenue, active parking sessions, and vehicle entry/exit history.",
          vi: "Xây dựng biểu đồ trực quan theo dõi doanh thu, lượt xe vào/ra và trạng thái bãi xe theo thời gian thực.",
        },
      },
    ],
  },
];

export interface SkillItem {
  name: string;
  accent: string;
  usedIn: string;
  category: Exclude<SkillCategory, "all">;
}

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    name: "ReactJS",
    accent: "#06B6D4",
    usedIn: "FPT Software, HugoClo & Smart Parking",
    category: "frontend",
  },
  {
    name: "JavaScript",
    accent: "#EAB308",
    usedIn: "Core Web & Full-stack Projects",
    category: "frontend",
  },
  {
    name: "TailwindCSS",
    accent: "#0EA5E9",
    usedIn: "FPT Software, HugoClo & Smart Parking",
    category: "frontend",
  },
  {
    name: "React Native",
    accent: "#06B6D4",
    usedIn: "Smart Motorbike Parking Mobile",
    category: "frontend",
  },
  {
    name: "HTML5",
    accent: "#EA580C",
    usedIn: "Semantic Web Markup",
    category: "frontend",
  },
  {
    name: "CSS3",
    accent: "#2563EB",
    usedIn: "Responsive Layouts & Animations",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    accent: "#7C3AED",
    usedIn: "Rapid UI Prototyping",
    category: "frontend",
  },
  {
    name: "Vite",
    accent: "#8B5CF6",
    usedIn: "FPT Software Build Tooling",
    category: "frontend",
  },
  {
    name: "Ant Design",
    accent: "#EF4444",
    usedIn: "HugoClo Admin Dashboard",
    category: "frontend",
  },
  // Backend & DB
  {
    name: "Node.js",
    accent: "#16A34A",
    usedIn: "HugoClo Backend & Webhooks",
    category: "backend",
  },
  {
    name: "Express.js",
    accent: "#52525B",
    usedIn: "REST APIs & JWT Auth",
    category: "backend",
  },
  {
    name: "MongoDB",
    accent: "#22C55E",
    usedIn: "HugoClo E-Commerce Database",
    category: "backend",
  },
  {
    name: "MySQL",
    accent: "#0284C7",
    usedIn: "Relational Database Systems",
    category: "backend",
  },
  {
    name: "Java",
    accent: "#D97706",
    usedIn: "OOP & DSA Coursework",
    category: "backend",
  },
  // Tools
  {
    name: "Git",
    accent: "#DC2626",
    usedIn: "Version Control & Team Sprints",
    category: "tools",
  },
  {
    name: "GitHub",
    accent: "#3F3F46",
    usedIn: "Code Reviews & PR Workflows",
    category: "tools",
  },
  {
    name: "Postman",
    accent: "#EA580C",
    usedIn: "API Testing & Webhook Debug",
    category: "tools",
  },
  {
    name: "Cloudinary",
    accent: "#4F46E5",
    usedIn: "HugoClo Media CDN",
    category: "tools",
  },
];
