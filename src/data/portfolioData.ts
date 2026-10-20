export interface PersonalInfo {
  name: string;
  role: string;
  phone: string;
  phoneFormatted: string;
  zaloUrl: string;
  phoneCallUrl: string;
  facebookUrl: string;
  email: string;
  location: string;
  shortBio: string;
  fullBio: string;
  tagline: string;
  avatarUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  highlightTag?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Portfolio' | 'Landing Page' | 'Education' | 'Creative';
  badge: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Bảo Nguyễn",
  role: "WEB DEVELOPER",
  phone: "0522253498",
  phoneFormatted: "0522 253 498",
  zaloUrl: "https://zalo.me/0522253498",
  phoneCallUrl: "tel:0522253498",
  facebookUrl: "https://www.facebook.com/share/1FmXWcJXTA/?mibextid=wwXIfr",
  email: "thnbaonguyen@gmail.com",
  location: "Việt Nam (Hỗ trợ online toàn quốc)",
  tagline: "Thiết kế website hiện đại – nhanh – đẹp – phù hợp với nhu cầu cá nhân và kinh doanh.",
  shortBio: "Nhận thiết kế website theo yêu cầu cho cá nhân, học sinh/sinh viên, cửa hàng nhỏ, người bán hàng online và doanh nghiệp nhỏ.",
  fullBio: "Mình là Bảo Nguyễn, một bạn trẻ yêu thích công nghệ và lập trình web. Mình đang phát triển kỹ năng thiết kế và xây dựng website, đồng thời nhận thực hiện các website cá nhân, landing page và website giới thiệu theo nhu cầu.",
  avatarUrl: "/images/bao-nguyen.png",
};

export const HIGHLIGHT_STATS = [
  {
    label: "Web Developer",
    value: "Frontend",
    description: "Công nghệ hiện đại & tối ưu",
  },
  {
    label: "Responsive Design",
    value: "100%",
    description: "Tương thích Mobile, Tablet, PC",
  },
  {
    label: "Landing Page",
    value: "Chuyển đổi",
    description: "Giao diện thu hút khách hàng",
  },
  {
    label: "Website theo yêu cầu",
    value: "Linh hoạt",
    description: "Chi phí phù hợp nhu cầu thực tế",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Website giới thiệu sản phẩm/dịch vụ, thiết kế tập trung vào tỷ lệ chuyển đổi và thu hút khách hàng.",
    details: [
      "Bố cục rõ ràng, nhấn mạnh ưu điểm sản phẩm",
      "Tối ưu nút kêu gọi hành động (Call to action)",
      "Tích hợp form đăng ký, nút chat Zalo/Hotline",
      "Tốc độ tải trang siêu nhanh, chuẩn SEO"
    ],
    icon: "Rocket",
    highlightTag: "Phổ biến nhất"
  },
  {
    id: "personal-web",
    title: "Website cá nhân",
    description: "Portfolio, CV online, trang giới thiệu cá nhân tạo dựng thương hiệu cá nhân uy tín và chuyên nghiệp.",
    details: [
      "Trang hồ sơ năng lực ấn tượng, hiện đại",
      "Trưng bày dự án, kỹ năng, kinh nghiệm",
      "Dễ dàng chia sẻ link cho nhà tuyển dụng/đối tác",
      "Giao diện chuẩn phong cách công nghệ trẻ trung"
    ],
    icon: "UserCheck",
  },
  {
    id: "business-web",
    title: "Website doanh nghiệp",
    description: "Website giới thiệu công ty, dịch vụ, bảng giá và thông tin liên hệ cho doanh nghiệp nhỏ và cơ sở kinh doanh.",
    details: [
      "Bộ nhận diện thương hiệu nhất quán",
      "Giới thiệu hồ sơ dịch vụ, năng lực",
      "Bản đồ, địa chỉ, phương thức liên lạc",
      "Bảo mật và ổn định lâu dài"
    ],
    icon: "Building2",
  },
  {
    id: "ecommerce-web",
    title: "Website bán hàng",
    description: "Giao diện danh mục sản phẩm, nút liên hệ đặt hàng nhanh, thiết kế phù hợp người bán hàng online và shop nhỏ.",
    details: [
      "Hiển thị sản phẩm trực quan, phân loại khoa học",
      "Nút mua hàng/đặt qua Zalo nhanh chóng",
      "Tối ưu trải nghiệm mua sắm trên điện thoại",
      "Không cần hệ thống phức tạp, dễ quản lý"
    ],
    icon: "ShoppingBag",
    highlightTag: "Tối ưu cho Shop"
  },
  {
    id: "maintain-web",
    title: "Chỉnh sửa website",
    description: "Sửa giao diện, thêm chức năng mới, sửa lỗi hiển thị và tối ưu responsive trên mọi thiết bị.",
    details: [
      "Khắc phục lỗi vỡ khung, lệch chữ trên mobile",
      "Thêm nút gọi, chat Zalo, pop-up khuyến mãi",
      "Tối ưu lại tốc độ tải trang chậm",
      "Làm mới giao diện cũ kỹ cho hiện đại hơn"
    ],
    icon: "Wrench",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "demo-portfolio",
    title: "Personal Portfolio",
    category: "Portfolio",
    badge: "PROJECT DEMO",
    description: "Mẫu portfolio dành cho lập trình viên hoặc người làm sáng tạo với phong cách tối giản, hiện đại và công nghệ.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Bố cục clean & high-tech",
      "Hiệu ứng chuyển động mượt mà",
      "Tích hợp kết nối Zalo & Hotline 1 chạm",
      "Chuẩn responsive 100% trên điện thoại"
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#"
  },
  {
    id: "demo-landing",
    title: "Landing Page",
    category: "Landing Page",
    badge: "PROJECT DEMO",
    description: "Trang đích giới thiệu sản phẩm/khóa học với cấu trúc tiếp thị thuyết phục, tăng tỷ lệ khách hàng để lại thông tin.",
    technologies: ["Vite", "Tailwind CSS", "Clean SEO", "Mobile First"],
    features: [
      "Hero section ấn tượng đập ngay vào mắt",
      "Bảng tính năng & lợi ích trực quan",
      "Khu vực báo giá & ưu đãi nổi bật",
      "Form gửi yêu cầu tư vấn tức thì"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#"
  },
  {
    id: "demo-education",
    title: "Education Website",
    category: "Education",
    badge: "PROJECT DEMO",
    description: "Trang web giáo dục, câu lạc bộ học tập hoặc trung tâm kỹ năng với giao diện sáng sủa, dễ tra cứu tài liệu.",
    technologies: ["React", "CSS Grid", "Lucide Icons", "Fast Load"],
    features: [
      "Lộ trình học tập trực quan",
      "Danh sách khóa học và giáo trình",
      "Phần cảm nhận học viên và kết quả",
      "Tương thích cực tốt cho học sinh/sinh viên"
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#"
  },
  {
    id: "demo-creative",
    title: "Creative Website",
    category: "Creative",
    badge: "PROJECT DEMO",
    description: "Giao diện website nghệ thuật / studio sáng tạo với typography ấn tượng và trải nghiệm thị giác khác biệt.",
    technologies: ["Modern Web", "Tailwind CSS", "Micro Animations"],
    features: [
      "Showcase hình ảnh kích thước lớn",
      "Phong cách thẩm mỹ tinh tế, màu sắc hài hòa",
      "Trải nghiệm lướt mượt mà không giật lag",
      "Khẳng định dấu ấn thương hiệu riêng biệt"
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#"
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Trao đổi",
    subtitle: "Tìm hiểu nhu cầu và ý tưởng",
    description: "Lắng nghe mục tiêu của bạn, đối tượng người dùng, tính năng cần có và tư vấn giải pháp phù hợp nhất với ngân sách.",
    details: ["Xác định mục đích trang web", "Tư vấn cấu trúc nội dung", "Báo giá rõ ràng, không phát sinh"]
  },
  {
    step: "02",
    title: "Thiết kế",
    subtitle: "Lên bố cục và giao diện",
    description: "Phác thảo bố cục (wireframe/UI), chọn màu sắc, typography và phong cách phù hợp với cá nhân hoặc thương hiệu.",
    details: ["Tone màu Trắng - Xanh hiện đại", "Bố cục thân thiện, dễ đọc", "Duyệt giao diện trước khi code"]
  },
  {
    step: "03",
    title: "Lập trình",
    subtitle: "Xây dựng website",
    description: "Viết mã nguồn sạch, hiện đại bằng React / Tailwind CSS, đảm bảo website load nhanh và mượt mà.",
    details: ["Code chuẩn chuẩn SEO", "Tối ưu hóa hình ảnh và tốc độ", "Tích hợp tương tác mượt mà"]
  },
  {
    step: "04",
    title: "Hoàn thiện",
    subtitle: "Kiểm tra responsive và chỉnh sửa",
    description: "Kiểm tra hiển thị kỹ lưỡng trên iPhone, Android, iPad và máy tính; tinh chỉnh các chi tiết theo phản hồi của bạn.",
    details: ["Responsive 100% mọi màn hình", "Kiểm tra form & liên kết liên hệ", "Chỉnh sửa hoàn thiện"]
  },
  {
    step: "05",
    title: "Bàn giao",
    subtitle: "Bàn giao website / source code theo thỏa thuận",
    description: "Hỗ trợ cài đặt tên miền/hosting, bàn giao toàn bộ mã nguồn hoặc hướng dẫn sử dụng, bảo hành hỗ trợ sau bàn giao.",
    details: ["Bàn giao source code đầy đủ", "Hướng dẫn cập nhật nội dung", "Hỗ trợ kỹ thuật chu đáo"]
  },
];

export const WORK_VALUES = [
  {
    title: "Trẻ trung & Nhiệt tình",
    desc: "Luôn lắng nghe, phản hồi tin nhắn nhanh chóng và hỗ trợ tận tâm từng chi tiết nhỏ."
  },
  {
    title: "Chi phí hợp lý",
    desc: "Mức giá vừa túi tiền cho sinh viên, bạn trẻ khởi nghiệp, cửa hàng và người bán online."
  },
  {
    title: "Chuẩn Mobile First",
    desc: "Hơn 80% khách hàng xem bằng điện thoại, website luôn được tối ưu tuyệt đối trên mobile."
  },
  {
    title: "Code sạch, dễ nâng cấp",
    desc: "Không dùng mã rác, dễ dàng tùy biến, mở rộng tính năng bất cứ khi nào bạn muốn."
  }
];
