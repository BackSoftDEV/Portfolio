// ── Multi-language Dictionary (VI, EN, JA, ZH) ──────────
const i18nDict = {
    vi: {
        nav_about: "Giới thiệu",
        nav_skills: "Kỹ năng",
        nav_projects: "Dự án",
        nav_terminal: "Terminal",
        nav_contact: "Liên hệ",

        hero_badge: "💻 &nbsp;Full Stack Developer",

        telemetry_status: "HỆ THỐNG TRỰC TUYẾN",

        hud_oee: "CHỈ SỐ OEE SẢN XUẤT",
        hud_oee_sub: "Theo dõi dữ liệu thời gian thực",

        hud_fps: "ĐỒ HỌA SCADA 3D",
        hud_fps_sub: "Three.js · WebGL",

        hud_arch: "KIẾN TRÚC HỆ THỐNG",
        hud_arch_sub: "Microservices & gRPC",

        spec_title: "NĂNG LỰC KỸ THUẬT",

        hero_bio:
            "Full Stack Developer với kinh nghiệm phát triển các hệ thống Smart Factory (MES / OEE / SCADA), xử lý dữ liệu thời gian thực và xây dựng ứng dụng 3D WebGL với Three.js. Quan tâm đến kiến trúc Microservices, hiệu năng hệ thống và các giải pháp số hóa sản xuất.",

        btn_projects: "Xem Dự Án",
        btn_github: "GitHub Profile",
        btn_contact: "Liên Hệ",

        about_label: "// 01 · Giới thiệu",
        about_title: "Tôi Là Ai",

        about_quote:
            `"Tôi phát triển các hệ thống <strong>Full Stack & Microservices</strong>, xử lý <strong>dữ liệu thời gian thực</strong> với IoT, Socket.IO và gRPC, đồng thời xây dựng giao diện <strong>SCADA 3D với Three.js</strong> cho các bài toán Smart Factory."`,

        about_p1:
            "Tôi tham gia phát triển và triển khai các hệ thống phần mềm phục vụ sản xuất cho các đối tác công nghiệp như Fujikin Thăng Long, Meiko, Gunze... Công việc tập trung vào các bài toán MES, OEE, quản lý sản xuất, giám sát dữ liệu và trực quan hóa hoạt động nhà máy.",

        about_p2:
            "Định hướng kỹ thuật của tôi tập trung vào việc xây dựng các hệ thống ổn định, dễ mở rộng và có khả năng xử lý dữ liệu thời gian thực. Tôi có kinh nghiệm làm việc với Redis, IndexedDB, Socket.IO, gRPC và WebGL để cải thiện hiệu năng, khả năng phản hồi và trải nghiệm sử dụng trong môi trường sản xuất.",

        stat_exp: "Năm kinh nghiệm",
        stat_proj: "Dự án công nghiệp",
        stat_tech: "Công nghệ sử dụng",

        mod_scada: "SCADA 3D · Real-time",
        mod_cluster: "Microservices · gRPC",
        mod_twin: "Digital Twin · MES/OEE",
        mod_iot: "IoT Telemetry · Active",

        skills_label: "// 02 · Kỹ năng",
        skills_title: "Công Nghệ & Kỹ Năng",

        cat_all: "Tất Cả",
        cat_frontend: "Frontend",
        cat_backend: "Backend",
        cat_database: "Database",
        cat_industrial: "Industrial / 3D",
        cat_devops: "DevOps",
        cat_ai: "AI Copilots",

        proj_label: "// 03 · Dự án",
        proj_title: "Dự Án Công Nghiệp & Phần Mềm",

        story_1:
            "Tôi không chỉ viết mã nguồn —<br>Tôi xây dựng <em>giải pháp phần mềm cho thực tế</em>.",

        story_2:
            "Mỗi dự án là một cơ hội học hỏi.<br>Mỗi dòng code là một bước tiến về <em>chất lượng và hiệu năng</em>.",

        story_3:
            "Từ <em>Microservices & Real-time Telemetry</em> đến SCADA 3D,<br>tôi phát triển các hệ thống phục vụ <em>sản xuất thông minh</em>.",

        story_4:
            "Tôi hướng đến việc xây dựng<br>những <em>hệ thống ổn định, trực quan và dễ mở rộng</em>.",

        term_label: "// 04 · Terminal",
        term_title: "Interactive Shell",

        term_welcome:
            "Chào mừng bạn đến với Terminal điều khiển của Nguyễn Đình Bách (BackDEV).",

        term_help:
            `Nhập lệnh: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,

        term_input_ph: "Nhập lệnh...",

        ai_label: "// 05 · AI Assistant",
        ai_title: "Hỏi Về Bách",
        ai_status: "Online · Full Stack Developer Profile",

        qchip_skills: "🧠 Kỹ năng",
        qchip_projects: "🏭 Dự án (MES/OEE/SCADA)",
        qchip_exp: "💼 Kinh nghiệm làm việc",
        qchip_contact: "🚀 Liên hệ",

        ai_welcome:
            "👋 Xin chào! Tôi là trợ lý AI của Nguyễn Đình Bách (BackDEV). Hãy hỏi tôi về kỹ năng, các dự án Smart Factory (MES / OEE / SCADA 3D), công nghệ Full Stack, Microservices hoặc kinh nghiệm phát triển phần mềm của Bách!",

        ai_input_ph:
            "Hỏi về Bách (kỹ năng, dự án SCADA, Microservices)...",

        ai_send: "Gửi →",

        contact_label: "// 06 · Liên hệ",
        contact_title: "Kết Nối Với Tôi",

        form_name_lbl: "Họ và tên",
        form_name_ph: "Họ tên của bạn",

        form_email_lbl: "Email",
        form_email_ph: "email@example.com",

        form_msg_lbl: "Nội dung",
        form_msg_ph: "Mô tả dự án hoặc nội dung trao đổi...",

        form_btn: "Gửi Tin Nhắn ✦",

        contact_heading: "Hợp Tác & Phát Triển",

        contact_p:
            "Tôi sẵn sàng trao đổi về các giải pháp phần mềm cho Smart Factory / MES / OEE / SCADA 3D, phát triển hệ thống Full Stack, Microservices và các cơ hội hợp tác kỹ thuật.",

        contact_role_lbl: "Chuyên môn",
        contact_role_val: "Full Stack Developer",

        contact_loc_lbl: "Vị trí",
        contact_loc_val: "Hà Nội, Việt Nam",

        footer_text:
            "Thiết kế & Phát triển bởi <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",

        toast_success: "✓ Đã gửi tin nhắn thành công!",
        toast_missing: "⚠ Vui lòng nhập đầy đủ thông tin",
        toast_invalid_email: "⚠ Địa chỉ email không hợp lệ",
        toast_sending: "⏳ Đang gửi tin nhắn...",
        toast_error: "❌ Gửi tin nhắn thất bại, vui lòng thử lại sau!"
    },

    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_terminal: "Terminal",
        nav_contact: "Contact",

        hero_badge: "💻 &nbsp;Full Stack Developer",

        telemetry_status: "SYSTEM ONLINE",

        hud_oee: "OEE PRODUCTION METRICS",
        hud_oee_sub: "Real-time Data Monitoring",

        hud_fps: "3D SCADA VISUALIZATION",
        hud_fps_sub: "Three.js · WebGL",

        hud_arch: "SYSTEM ARCHITECTURE",
        hud_arch_sub: "Microservices & gRPC",

        spec_title: "TECHNICAL PROFILE",

        hero_bio:
            "Full Stack Developer with hands-on experience building Smart Factory systems (MES / OEE / SCADA), processing real-time data, and developing 3D WebGL applications with Three.js. Interested in Microservices architecture, system performance, and industrial digitalization.",

        btn_projects: "View Projects",
        btn_github: "GitHub Profile",
        btn_contact: "Contact Me",

        about_label: "// 01 · About",
        about_title: "Who I Am",

        about_quote:
            `"I build <strong>Full Stack & Microservices systems</strong>, work with <strong>real-time data</strong> using IoT, Socket.IO, and gRPC, and develop <strong>3D SCADA interfaces with Three.js</strong> for Smart Factory applications."`,

        about_p1:
            "I have contributed to the development and deployment of software systems for industrial manufacturing partners including Fujikin Thang Long, Meiko, and Gunze. My work focuses on MES, OEE, production management, industrial monitoring, and factory data visualization.",

        about_p2:
            "My technical focus is on building stable, maintainable, and scalable systems capable of handling real-time data. I have worked with technologies such as Redis, IndexedDB, Socket.IO, gRPC, and WebGL to improve system responsiveness, performance, and usability in manufacturing environments.",

        stat_exp: "Years of Experience",
        stat_proj: "Industrial Projects",
        stat_tech: "Technologies Used",

        mod_scada: "SCADA 3D · Real-time",
        mod_cluster: "Microservices · gRPC",
        mod_twin: "Digital Twin · MES/OEE",
        mod_iot: "IoT Telemetry · Active",

        skills_label: "// 02 · Skills",
        skills_title: "Technologies & Skills",

        cat_all: "All Stack",
        cat_frontend: "Frontend",
        cat_backend: "Backend",
        cat_database: "Database",
        cat_industrial: "Industrial / 3D",
        cat_devops: "DevOps",
        cat_ai: "AI Copilots",

        proj_label: "// 03 · Projects",
        proj_title: "Industrial & Software Projects",

        story_1:
            "I don't just write code —<br>I build <em>software solutions for real-world needs</em>.",

        story_2:
            "Every project is an opportunity to learn.<br>Every line of code is a step toward <em>quality and performance</em>.",

        story_3:
            "From <em>Microservices & Real-time Telemetry</em> to 3D SCADA,<br>I develop systems for <em>smart manufacturing</em>.",

        story_4:
            "I aim to build<br><em>stable, intuitive, and scalable systems</em>.",

        term_label: "// 04 · Terminal",
        term_title: "Interactive Shell",

        term_welcome:
            "Welcome to Nguyễn Đình Bách (BackDEV)'s interactive terminal.",

        term_help:
            `Type a command: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,

        term_input_ph: "Enter command...",

        ai_label: "// 05 · AI Assistant",
        ai_title: "Ask About Bách",
        ai_status: "Online · Full Stack Developer Profile",

        qchip_skills: "🧠 Skills",
        qchip_projects: "🏭 Projects (MES/OEE/SCADA)",
        qchip_exp: "💼 Work Experience",
        qchip_contact: "🚀 Contact",

        ai_welcome:
            "👋 Hello! I am Nguyễn Đình Bách (BackDEV)'s AI Assistant. Ask me about his skills, Smart Factory projects (MES / OEE / SCADA 3D), Full Stack development, Microservices, or engineering experience!",

        ai_input_ph:
            "Ask about Bách (skills, SCADA projects, Microservices)...",

        ai_send: "Send →",

        contact_label: "// 06 · Contact",
        contact_title: "Let's Connect",

        form_name_lbl: "Full Name",
        form_name_ph: "Your full name",

        form_email_lbl: "Email",
        form_email_ph: "email@example.com",

        form_msg_lbl: "Message",
        form_msg_ph: "Describe your project or message...",

        form_btn: "Send Message ✦",

        contact_heading: "Collaboration & Opportunities",

        contact_p:
            "I am open to discussing software solutions for Smart Factory / MES / OEE / 3D SCADA, Full Stack development, Microservices, and technical collaboration opportunities.",

        contact_role_lbl: "Role",
        contact_role_val: "Full Stack Developer",

        contact_loc_lbl: "Location",
        contact_loc_val: "Hanoi, Vietnam",

        footer_text:
            "Designed & Developed by <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",

        toast_success: "✓ Message sent successfully!",
        toast_missing: "⚠ Please fill in all required fields",
        toast_invalid_email: "⚠ Invalid email address",
        toast_sending: "⏳ Sending message...",
        toast_error: "❌ Failed to send message, please try again later!"
    },

    ja: {
        nav_about: "概要",
        nav_skills: "スキル",
        nav_projects: "プロジェクト",
        nav_terminal: "ターミナル",
        nav_contact: "お問い合わせ",

        hero_badge: "💻 &nbsp;フルスタックエンジニア",

        telemetry_status: "システム稼働中",

        hud_oee: "OEE 生産指標",
        hud_oee_sub: "リアルタイムデータ監視",

        hud_fps: "3D SCADA ビジュアライゼーション",
        hud_fps_sub: "Three.js · WebGL",

        hud_arch: "システムアーキテクチャ",
        hud_arch_sub: "マイクロサービス＆gRPC",

        spec_title: "技術プロフィール",

        hero_bio:
            "Smart Factory（MES / OEE / SCADA）向けシステム開発、リアルタイムデータ処理、Three.jsを活用した3D WebGLアプリケーション開発に実務経験を持つフルスタックエンジニアです。マイクロサービス、システムパフォーマンス、製造業のデジタル化に関心を持っています。",

        btn_projects: "プロジェクトを見る",
        btn_github: "GitHub プロフィール",
        btn_contact: "お問い合わせ",

        about_label: "// 01 · 概要",
        about_title: "プロフィール",

        about_quote:
            `"IoT、Socket.IO、gRPCを活用した<strong>リアルタイムデータ処理</strong>、<strong>フルスタック＆マイクロサービスシステム</strong>の開発、そしてThree.jsによる<strong>3D SCADAインターフェース</strong>の構築に取り組んでいます。"`,

        about_p1:
            "Fujikin Thang Long、Meiko、Gunzeなどの製造業パートナー向けに、生産現場で利用されるソフトウェアシステムの開発・導入に携わってきました。主にMES、OEE、生産管理、設備監視、工場データの可視化などの分野に取り組んでいます。",

        about_p2:
            "安定性、保守性、拡張性を意識したシステム開発を重視しています。Redis、IndexedDB、Socket.IO、gRPC、WebGLなどの技術を活用し、製造現場におけるリアルタイム性、パフォーマンス、操作性の向上に取り組んでいます。",

        stat_exp: "実務経験年数",
        stat_proj: "産業プロジェクト",
        stat_tech: "使用テクノロジー",

        mod_scada: "SCADA 3D · リアルタイム",
        mod_cluster: "マイクロサービス · gRPC",
        mod_twin: "デジタルツイン · MES/OEE",
        mod_iot: "IoTテレメトリ · 稼働中",

        skills_label: "// 02 · スキル",
        skills_title: "テクノロジー＆スキル",

        cat_all: "すべて",
        cat_frontend: "フロントエンド",
        cat_backend: "バックエンド",
        cat_database: "データベース",
        cat_industrial: "産業 / 3D",
        cat_devops: "DevOps",
        cat_ai: "AIコパイロット",

        proj_label: "// 03 · プロジェクト",
        proj_title: "産業＆ソフトウェアプロジェクト",

        story_1:
            "コードを書くだけではない —<br><em>現実の課題を解決するソフトウェア</em>をつくる。",

        story_2:
            "すべてのプロジェクトが学びの機会。<br>すべてのコードが<em>品質とパフォーマンス</em>への一歩。",

        story_3:
            "<em>マイクロサービス＆リアルタイムテレメトリ</em>から3D SCADAまで、<br><em>スマート製造</em>を支えるシステムを開発しています。",

        story_4:
            "目指すのは、<br><em>安定性、直感的な操作性、拡張性を備えたシステム</em>。",

        term_label: "// 04 · ターミナル",
        term_title: "Interactive Shell",

        term_welcome:
            "Nguyễn Đình Bách (BackDEV) のインタラクティブターミナルへようこそ。",

        term_help:
            `コマンドを入力: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,

        term_input_ph: "コマンドを入力...",

        ai_label: "// 05 · AI アシスタント",
        ai_title: "Báchについて質問",
        ai_status: "オンライン · フルスタックエンジニア",

        qchip_skills: "🧠 スキル",
        qchip_projects: "🏭 プロジェクト (MES/OEE/SCADA)",
        qchip_exp: "💼 職務経歴",
        qchip_contact: "🚀 お問い合わせ",

        ai_welcome:
            "👋 こんにちは！Nguyễn Đình Bách (BackDEV) のAIアシスタントです。スキル、Smart Factoryプロジェクト（MES / OEE / SCADA 3D）、Full Stack開発、Microservices、開発経験についてお気軽にご質問ください。",

        ai_input_ph:
            "Báchについて質問（スキル、SCADA、Microservicesなど）...",

        ai_send: "送信 →",

        contact_label: "// 06 · お問い合わせ",
        contact_title: "お問い合わせ",

        form_name_lbl: "お名前",
        form_name_ph: "お名前を入力",

        form_email_lbl: "メールアドレス",
        form_email_ph: "email@example.com",

        form_msg_lbl: "お問い合わせ内容",
        form_msg_ph: "プロジェクトのご相談やお問い合わせ内容...",

        form_btn: "メッセージを送信 ✦",

        contact_heading: "協業・プロジェクト",

        contact_p:
            "Smart Factory / MES / OEE / 3D SCADA向けソフトウェア、フルスタック開発、マイクロサービス、技術協業などについて、お気軽にご相談ください。",

        contact_role_lbl: "専門分野",
        contact_role_val: "フルスタックエンジニア",

        contact_loc_lbl: "所在地",
        contact_loc_val: "ハノイ、ベトナム",

        footer_text:
            "Designed & Developed by <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",

        toast_success: "✓ メッセージが送信されました！",
        toast_missing: "⚠ 必須項目をすべて入力してください",
        toast_invalid_email: "⚠ 有効なメールアドレスを入力してください",
        toast_sending: "⏳ メッセージを送信中...",
        toast_error: "❌ 送信に失敗しました。後でもう一度お試しください。"
    },

    zh: {
        nav_about: "关于",
        nav_skills: "技能",
        nav_projects: "项目",
        nav_terminal: "终端",
        nav_contact: "联系",

        hero_badge: "💻 &nbsp;全栈工程师",

        telemetry_status: "系统运行正常",

        hud_oee: "OEE 生产指标",
        hud_oee_sub: "实时数据监控",

        hud_fps: "3D SCADA 可视化",
        hud_fps_sub: "Three.js · WebGL",

        hud_arch: "系统架构",
        hud_arch_sub: "微服务与 gRPC",

        spec_title: "技术能力概览",

        hero_bio:
            "全栈工程师，具备 Smart Factory（MES / OEE / SCADA）系统开发、实时数据处理以及基于 Three.js 的 3D WebGL 应用开发经验。关注微服务架构、系统性能与制造业数字化解决方案。",

        btn_projects: "查看项目",
        btn_github: "GitHub 主页",
        btn_contact: "联系我",

        about_label: "// 01 · 关于",
        about_title: "关于我",

        about_quote:
            `"我致力于开发<strong>全栈与微服务系统</strong>，使用 IoT、Socket.IO 和 gRPC 处理<strong>实时数据</strong>，并通过 Three.js 构建<strong>3D SCADA 可视化界面</strong>，服务于智能工厂应用场景。"`,

        about_p1:
            "我参与过 Fujikin Thang Long、Meiko、Gunze 等制造业合作伙伴的软件系统开发与部署，主要涉及 MES、OEE、生产管理、工业监控以及工厂数据可视化等业务场景。",

        about_p2:
            "技术方向主要关注系统的稳定性、可维护性与扩展能力，并积累了 Redis、IndexedDB、Socket.IO、gRPC、WebGL 等技术的实际开发经验，用于提升制造环境下系统的实时性、性能与操作体验。",

        stat_exp: "开发经验",
        stat_proj: "工业项目",
        stat_tech: "使用技术",

        mod_scada: "3D SCADA · 实时数据",
        mod_cluster: "微服务 · gRPC",
        mod_twin: "数字孪生 · MES/OEE",
        mod_iot: "IoT 遥测 · 运行中",

        skills_label: "// 02 · 技能",
        skills_title: "技术与技能",

        cat_all: "全部",
        cat_frontend: "前端",
        cat_backend: "后端",
        cat_database: "数据库",
        cat_industrial: "工业 / 3D",
        cat_devops: "DevOps",
        cat_ai: "AI 编程助手",

        proj_label: "// 03 · 项目",
        proj_title: "工业与软件项目",

        story_1:
            "我不仅是在编写代码 —<br>更是在构建<em>解决实际问题的软件</em>。",

        story_2:
            "每一个项目都是学习的机会。<br>每一行代码都是迈向<em>质量与性能</em>的一步。",

        story_3:
            "从<em>微服务与实时数据遥测</em>到 3D SCADA，<br>开发服务于<em>智能制造</em>的系统。",

        story_4:
            "我希望构建<br><em>稳定、直观且易于扩展的系统</em>。",

        term_label: "// 04 · 终端",
        term_title: "交互式命令行",

        term_welcome:
            "欢迎访问 Nguyễn Đình Bách (BackDEV) 的交互式终端。",

        term_help:
            `输入命令: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,

        term_input_ph: "输入命令...",

        ai_label: "// 05 · AI 助手",
        ai_title: "了解 Bách",
        ai_status: "在线 · 全栈工程师",

        qchip_skills: "🧠 技能",
        qchip_projects: "🏭 项目 (MES/OEE/SCADA)",
        qchip_exp: "💼 工作经验",
        qchip_contact: "🚀 联系方式",

        ai_welcome:
            "👋 您好！我是 Nguyễn Đình Bách (BackDEV) 的 AI 助手。欢迎向我了解他的技术栈、Smart Factory 项目（MES / OEE / SCADA 3D）、全栈开发、微服务以及软件开发经验。",

        ai_input_ph:
            "询问 Bách（技能、SCADA、Microservices 等）...",

        ai_send: "发送 →",

        contact_label: "// 06 · 联系",
        contact_title: "与我联系",

        form_name_lbl: "姓名",
        form_name_ph: "请输入您的姓名",

        form_email_lbl: "电子邮箱",
        form_email_ph: "email@example.com",

        form_msg_lbl: "留言内容",
        form_msg_ph: "请输入项目需求或交流内容...",

        form_btn: "发送信息 ✦",

        contact_heading: "合作与发展",

        contact_p:
            "欢迎交流 Smart Factory / MES / OEE / 3D SCADA 软件解决方案、全栈开发、微服务以及技术合作机会。",

        contact_role_lbl: "专业方向",
        contact_role_val: "全栈工程师",

        contact_loc_lbl: "所在地",
        contact_loc_val: "越南 · 河内",

        footer_text:
            "Designed & Developed by <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",

        toast_success: "✓ 信息发送成功！",
        toast_missing: "⚠ 请填写所有必填项",
        toast_invalid_email: "⚠ 请输入有效的邮箱地址",
        toast_sending: "⏳ 正在发送信息...",
        toast_error: "❌ 发送失败，请稍后重试！"
    }
};

// ── Typing phrases by language ─────────────────────────
const phrasesByLang = {
    vi: [
        'Full Stack Developer',
        'Smart Factory & MES / OEE Developer',
        '3D SCADA & WebGL Developer',
        'Microservices & Monorepo Developer',
        'Real-time Telemetry & IoT Engineer'
    ],

    en: [
        'Full Stack Developer',
        'Smart Factory & MES / OEE Developer',
        '3D SCADA & WebGL Developer',
        'Microservices & Monorepo Developer',
        'Real-time Telemetry & IoT Engineer'
    ],

    ja: [
        'フルスタックエンジニア',
        'スマートファクトリー＆MES / OEE 開発者',
        '3D SCADA & WebGL 開発者',
        'マイクロサービス＆Monorepo 開発者',
        'リアルタイムテレメトリ＆IoT エンジニア'
    ],

    zh: [
        '全栈工程师',
        '智能工厂与 MES / OEE 开发工程师',
        '3D SCADA 与 WebGL 开发工程师',
        '微服务与 Monorepo 开发工程师',
        '实时遥测与物联网工程师'
    ]
};

// ── Projects Data by language ──────────────────────────
const projectsByLang = {
    vi: [
        {
            name: 'Fujikin OEE & SCADA 3D',
            desc: 'Hệ thống số hóa nhà máy thông minh (Fujikin Thăng Long). Thu thập dữ liệu IoT thời gian thực, tính toán OEE, điều độ kế hoạch sản xuất (Gantt Chart) và mô hình hóa nhà xưởng SCADA 3D với Three.js/WebGL.',
            tags: ['React 19', 'Three.js 3D', 'Socket.IO', 'Microservices', 'Highcharts 3D'],
            lang: 'TypeScript',
            stars: 'MES/OEE',
            icon: '🏭',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Meiko Work Instructions & Approvals',
            desc: 'Hệ thống quản lý tài liệu kỹ thuật, chỉ dẫn công việc (WI), quy trình phê duyệt đa cấp (Approvals Workflow), kiểm định định kỳ và hệ thống phân quyền phức tạp (RBAC) cho nhà máy Meiko. Backend phát triển trên nền tảng Java & Spring Boot, tích hợp Spring Security và kiến trúc REST API bảo mật cao.',
            tags: ['React & TS', 'Java & Spring Boot', 'Spring Security', 'tailwind', 'RBAC Workflow'],
            lang: 'Java / TypeScript',
            stars: 'Smart Factory',
            icon: '📋',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Smart WMS - Warehouse Management',
            desc: 'Giải pháp quản lý kho bãi thông minh, tối ưu hóa vị trí lưu trữ, theo dõi vòng đời hàng hóa, nhập/xuất kho tự động với kiến trúc microservices hiệu năng cao.',
            tags: ['React', 'Node.js', 'MSSQL', 'Redis', 'Docker'],
            lang: 'TypeScript',
            stars: 'Logistics',
            icon: '📦',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Gunze Weave IoT Gateway',
            desc: 'Hệ thống backend điều khiển và thu thập telemetry từ dây chuyền dệt công nghiệp cho đối tác Gunze, xử lý giao thức gRPC và đồng bộ dữ liệu vào hệ thống giám sát tập trung.',
            tags: ['Node.js', 'gRPC', 'Protobuf', 'Redis', 'PM2'],
            lang: 'Node.js',
            stars: 'IoT Engine',
            icon: '⚙️',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Industrial Telemetry & 3D SCADA Engine',
            desc: 'Module trực quan hóa 3D WebGL tương tác cao, render bản đồ xưởng sản xuất, ánh xạ trạng thái máy móc thời gian thực trực tiếp trên trình duyệt với Three.js và IndexedDB cache.',
            tags: ['Three.js', 'WebGL', 'IndexedDB', 'WebSocket'],
            lang: 'JavaScript',
            stars: '3D SCADA',
            icon: '🌐',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Microservices Architecture Template',
            desc: 'Bộ khung kiến trúc Monorepo & Microservices chuẩn hóa cho giải pháp sản xuất: Master Data, OEE Engine, Scheduling, Formula Engine và Event Bus.',
            tags: ['Microservices', 'gRPC', 'Docker Compose', 'Redis'],
            lang: 'TypeScript',
            stars: 'Core Arch',
            icon: '🚀',
            url: 'https://github.com/BackSoftDEV'
        }
    ],
    en: [
        {
            name: 'Fujikin OEE & SCADA 3D',
            desc: 'Smart factory digitalization platform (Fujikin Thang Long). Real-time IoT data acquisition, OEE calculation engine, production planning (Gantt Chart), and 3D SCADA workshop visualization using Three.js/WebGL.',
            tags: ['React 19', 'Three.js 3D', 'Socket.IO', 'Microservices', 'Highcharts 3D'],
            lang: 'TypeScript',
            stars: 'MES/OEE',
            icon: '🏭',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Meiko Work Instructions & Approvals',
            desc: 'Technical documentation & Work Instructions (WI) platform, multi-level approval workflows, periodic inspections, and granular Role-Based Access Control (RBAC) for Meiko electronics manufacturing. Powered by Java & Spring Boot backend with Spring Security and high-throughput RESTful APIs.',
            tags: ['React & TS', 'Java & Spring Boot', 'Spring Security', 'tailwind', 'RBAC Workflow'],
            lang: 'Java / TypeScript',
            stars: 'Smart Factory',
            icon: '📋',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Smart WMS - Warehouse Management',
            desc: 'Intelligent warehouse management solution optimizing bin allocation, real-time inventory tracking, automated inbound/outbound fulfillment powered by a scalable microservices architecture.',
            tags: ['React', 'Node.js', 'MSSQL', 'Redis', 'Docker'],
            lang: 'TypeScript',
            stars: 'Logistics',
            icon: '📦',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Gunze Weave IoT Gateway',
            desc: 'High-throughput backend telemetry system interfacing industrial weaving machinery for Gunze, leveraging gRPC protocols and Redis synchronization for centralized supervisory monitoring.',
            tags: ['Node.js', 'gRPC', 'Protobuf', 'Redis', 'PM2'],
            lang: 'Node.js',
            stars: 'IoT Engine',
            icon: '⚙️',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Industrial Telemetry & 3D SCADA Engine',
            desc: 'Interactive 3D WebGL factory floor visualization engine rendering real-time machine statuses directly in the browser via Three.js, WebSockets, and client-side IndexedDB model caching.',
            tags: ['Three.js', 'WebGL', 'IndexedDB', 'WebSocket'],
            lang: 'JavaScript',
            stars: '3D SCADA',
            icon: '🌐',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Microservices Architecture Template',
            desc: 'Standardized monorepo microservices baseline for industrial manufacturing: Master Data, OEE Engine, Scheduling, Formula Engine, and Redis Pub/Sub Event Bus.',
            tags: ['Microservices', 'gRPC', 'Docker Compose', 'Redis'],
            lang: 'TypeScript',
            stars: 'Core Arch',
            icon: '🚀',
            url: 'https://github.com/BackSoftDEV'
        }
    ],
    ja: [
        {
            name: 'Fujikin OEE＆SCADA 3D',
            desc: 'スマートファクトリーDXシステム（Fujikin Thang Long）。IoTリアルタイムデータ収集、OEE（総合設備効率）算出エンジン、生産計画ガントチャート、Three.js/WebGLによるSCADA 3D工場可視化。',
            tags: ['React 19', 'Three.js 3D', 'Socket.IO', 'Microservices', 'Highcharts 3D'],
            lang: 'TypeScript',
            stars: 'MES/OEE',
            icon: '🏭',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Meiko 作業手順書＆多段階承認システム',
            desc: 'Meiko電子工場向け技術文書・作業手順書（WI）管理、多段階承認ワークフロー、定期検査管理、精密な権限管理（RBAC）システム。バックエンドに Java & Spring Boot と Spring Security を採用。',
            tags: ['React & TS', 'Java & Spring Boot', 'Spring Security', 'tailwind', 'RBAC Workflow'],
            lang: 'Java / TypeScript',
            stars: 'Smart Factory',
            icon: '📋',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Smart WMS - スマート倉庫管理システム',
            desc: '保管棚の最適配置、リアルタイム在庫ライフサイクル追跡、入出庫自動化をマイクロサービス基盤で実現するインテリジェントWMS。',
            tags: ['React', 'Node.js', 'MSSQL', 'Redis', 'Docker'],
            lang: 'TypeScript',
            stars: 'Logistics',
            icon: '📦',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Gunze 織機IoTゲートウェイ',
            desc: '大手繊維メーカーGunze向け織機テレメトリ収集・制御バックエンド。gRPC・ProtobufとRedisによる高信頼性中央監視連携。',
            tags: ['Node.js', 'gRPC', 'Protobuf', 'Redis', 'PM2'],
            lang: 'Node.js',
            stars: 'IoT Engine',
            icon: '⚙️',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: '産業テレメトリ＆3D SCADAエンジン',
            desc: 'Three.js・WebGL・WebSocket・IndexedDBキャッシュを活用し、製造フロアの設備稼働状況をブラウザ上に超低遅延で立体再現するSCADAエンジン。',
            tags: ['Three.js', 'WebGL', 'IndexedDB', 'WebSocket'],
            lang: 'JavaScript',
            stars: '3D SCADA',
            icon: '🌐',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'マイクロサービス・アーキテクチャ雛形',
            desc: '製造業向け標準Monorepo＆マイクロサービス基盤（マスターデータ、OEEエンジン、日程計画、計算式エンジン、Redisイベントバス）。',
            tags: ['Microservices', 'gRPC', 'Docker Compose', 'Redis'],
            lang: 'TypeScript',
            stars: 'Core Arch',
            icon: '🚀',
            url: 'https://github.com/BackSoftDEV'
        }
    ],
    zh: [
        {
            name: 'Fujikin OEE 与 3D SCADA 系统',
            desc: '智能工厂数字化平台（Fujikin 昇龙工厂）。实现实时 IoT 设备数据采集、综合设备效率（OEE）核算、生产计划甘特图排程以及基于 Three.js/WebGL 的 3D SCADA 车间数字孪生。',
            tags: ['React 19', 'Three.js 3D', 'Socket.IO', 'Microservices', 'Highcharts 3D'],
            lang: 'TypeScript',
            stars: 'MES/OEE',
            icon: '🏭',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Meiko 技术标准作业与多级审批系统',
            desc: '为 Meiko 电子工厂开发的技术文档、标准作业指导书（WI）管理平台，支持多层级灵活审批流、定期巡检与复杂角色权限控制（RBAC）。后端基于 Java & Spring Boot 与 Spring Security 打造高可用业务架构。',
            tags: ['React & TS', 'Java & Spring Boot', 'Spring Security', 'tailwind', 'RBAC Workflow'],
            lang: 'Java / TypeScript',
            stars: 'Smart Factory',
            icon: '📋',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Smart WMS - 智能仓储管理系统',
            desc: '基于高性能微服务架构的智能仓储系统，支持货位智能优化分配、物料全生命周期追溯以及出入库高效调度。',
            tags: ['React', 'Node.js', 'MSSQL', 'Redis', 'Docker'],
            lang: 'TypeScript',
            stars: 'Logistics',
            icon: '📦',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: 'Gunze 纺织设备 IoT 遥测网关',
            desc: '为工业客户 Gunze 打造的高吞吐后端遥测网关，基于 gRPC/Protobuf 高性能协议与 Redis 缓存实现设备数据与集中监控平台秒级同步。',
            tags: ['Node.js', 'gRPC', 'Protobuf', 'Redis', 'PM2'],
            lang: 'Node.js',
            stars: 'IoT Engine',
            icon: '⚙️',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: '工业遥测与 3D SCADA 渲染引擎',
            desc: '结合 Three.js、WebGL 与 WebSocket，并基于 IndexedDB 本地缓存超大模型，在浏览器端流畅呈现车间全景与机器实时运行状态。',
            tags: ['Three.js', 'WebGL', 'IndexedDB', 'WebSocket'],
            lang: 'JavaScript',
            stars: '3D SCADA',
            icon: '🌐',
            url: 'https://github.com/BackSoftDEV'
        },
        {
            name: '微服务基础架构通用模板',
            desc: '面向制造业标准化的 Monorepo 微服务框架：集成主数据管理、OEE 计算引擎、排产调度、公式引擎与 Redis 事件总线。',
            tags: ['Microservices', 'gRPC', 'Docker Compose', 'Redis'],
            lang: 'TypeScript',
            stars: 'Core Arch',
            icon: '🚀',
            url: 'https://github.com/BackSoftDEV'
        }
    ]
};

// ── Terminal Data by language ──────────────────────────
const termDataByLang = {
    vi: {
        about: `╔══════════════════════════════════════════════════════════╗
║  NGUYỄN ĐÌNH BÁCH (BackDEV)                             ║
║  Full Stack Developer                                    ║
╚══════════════════════════════════════════════════════════╝

📍 Địa điểm: Hà Nội, Việt Nam
📧 Email   : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV

Chuyên môn chính:
• Xây dựng kiến trúc Microservices & Monorepo
• Phát triển hệ thống Smart Factory (MES / OEE / SCADA 3D)
• Xử lý telemetry thời gian thực (IoT Gateway, Socket.IO, gRPC)
• Trực quan hóa dữ liệu công nghiệp (Three.js WebGL, Gantt Chart, ECharts)

"Kiến tạo giải pháp công nghiệp thông minh từ kỹ thuật chuẩn mực."`,
        skills: `◉ Frontend  : React 18/19, TypeScript, Vite, Ant Design, Tailwind, Zustand
◉ 3D & Data : Three.js (SCADA 3D), Konva, Highcharts 3D, Recharts, ECharts
◉ Backend   : Java & Spring Boot, Node.js, Microservices, gRPC & Protobuf
◉ Database  : SQL Server (MSSQL), MySQL, PostgreSQL, Redis Pub/Sub & Cache
◉ AI Copilot: Gemini 3.8, Claude 4.6 Sonnet
◉ DevOps    : Docker, Docker Compose, Nginx, PM2, Keycloak, MinIO, Git, Linux
◉ Khác      : i18n đa ngôn ngữ (VI/EN/JP/CN), IndexedDB 3D Cache, bpmn-js`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE & SCADA 3D      [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Spring Boot · RBAC] │
│ 📦 Smart WMS Warehouse         [Microservices · MSSQL]       │
│ ⚙️ Gunze Weave IoT Gateway     [Node.js · gRPC · Redis]      │
│ 🌐 Industrial 3D SCADA Engine  [Three.js · WebGL · Cache]    │
│ 🚀 Microservices Template      [Monorepo · Docker · Redis]   │
└──────────────────────────────────────────────────────────────┘

Khám phá thêm tại: github.com/BackSoftDEV`,
        contact: `📧 Email   : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV
📍 Địa điểm: Hà Nội, Việt Nam

Sẵn sàng hợp tác các dự án Smart Factory, Microservices & SCADA 3D.`,
        help: `Các lệnh khả dụng:
  about     → Thông tin giới thiệu & định vị chuyên môn
  skills    → Toàn bộ Tech Stack (Frontend, Backend, 3D, Database)
  projects  → Các dự án công nghiệp tiêu biểu (Fujikin, Meiko, WMS)
  contact   → Thông tin kết nối & liên hệ
  clear     → Xóa màn hình terminal
  whoami    → Định danh kỹ sư`,
        whoami: `Nguyễn Đình Bách (BackDEV) · Full Stack Developer`
    },
    en: {
        about: `╔══════════════════════════════════════════════════════════╗
║  NGUYỄN ĐÌNH BÁCH (BackDEV)                             ║
║  Full Stack Developer                                    ║
╚══════════════════════════════════════════════════════════╝

📍 Location: Hanoi, Vietnam
📧 Email   : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV

Core Focus:
• Microservices & Monorepo Architecture
• Smart Factory Systems (MES / OEE / SCADA 3D)
• Real-time Telemetry (IoT Gateway, Socket.IO, gRPC)
• Industrial Visualization (Three.js WebGL, Gantt, ECharts)`,
        skills: `◉ Frontend  : React 18/19, TypeScript, Vite, Ant Design, Tailwind, Zustand
◉ 3D & Data : Three.js (SCADA 3D), Konva, Highcharts 3D, Recharts, ECharts
◉ Backend   : Java & Spring Boot, Node.js, Microservices, gRPC & Protobuf
◉ Database  : SQL Server (MSSQL), MySQL, PostgreSQL, Redis Pub/Sub & Cache
◉ AI Copilot: Gemini 3.8, Claude 4.6 Sonnet
◉ DevOps    : Docker, Docker Compose, Nginx, PM2, Keycloak, MinIO, Git, Linux
◉ Standards : Multi-language i18n (VI/EN/JP/CN), IndexedDB 3D Cache, bpmn-js`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE & SCADA 3D      [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Spring Boot · RBAC] │
│ 📦 Smart WMS Warehouse         [Microservices · MSSQL]       │
│ ⚙️ Gunze Weave IoT Gateway     [Node.js · gRPC · Redis]      │
│ 🌐 Industrial 3D SCADA Engine  [Three.js · WebGL · Cache]    │
│ 🚀 Microservices Template      [Monorepo · Docker · Redis]   │
└──────────────────────────────────────────────────────────────┘

Explore more at: github.com/BackSoftDEV`,
        contact: `📧 Email   : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV
📍 Location: Hanoi, Vietnam

Open for Smart Factory, Microservices & SCADA 3D collaborations.`,
        help: `Available commands:
  about     → Bio & background overview
  skills    → Full technical arsenal
  projects  → Industrial & featured projects
  contact   → Contact information
  clear     → Clear terminal screen
  whoami    → Engineer identity`,
        whoami: `Nguyễn Đình Bách (BackDEV) · Full Stack Developer`
    },
    ja: {
        about: `╔══════════════════════════════════════════════════════════╗
║  NGUYỄN ĐÌNH BÁCH (BackDEV)                             ║
║  Full Stack Developer                                    ║
╚══════════════════════════════════════════════════════════╝

📍 所在地  : ベトナム・ハノイ
📧 Email   : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV

専門分野:
• マイクロサービス＆Monorepo設計
• スマートファクトリー開発（MES / OEE / SCADA 3D）
• リアルタイムIoTテレメトリ（Socket.IO、gRPC、Protobuf）
• 産業データ可視化（Three.js WebGL、ガントチャート、ECharts）`,
        skills: `◉ フロント  : React 18/19, TypeScript, Vite, Ant Design, Tailwind, Zustand
◉ 3D & 解析 : Three.js (SCADA 3D), Konva, Highcharts 3D, Recharts, ECharts
◉ バック    : Java & Spring Boot, Node.js, Microservices, gRPC & Protobuf
◉ ＤＢ      : SQL Server (MSSQL), MySQL, PostgreSQL, Redis Pub/Sub & Cache
◉ AI補助    : Gemini 3.8, Claude 4.6 Sonnet
◉ 運用基盤  : Docker, Docker Compose, Nginx, PM2, Keycloak, MinIO, Git, Linux
◉ 標準対応  : 多言語i18n (VI/EN/JP/CN), IndexedDB 3Dモデルキャッシュ`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE＆SCADA 3D       [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Spring Boot · RBAC] │
│ 📦 Smart WMS Warehouse         [Microservices · MSSQL]       │
│ ⚙️ Gunze Weave IoT Gateway     [Node.js · gRPC · Redis]      │
│ 🌐 Industrial 3D SCADA Engine  [Three.js · WebGL · Cache]    │
│ 🚀 Microservices Template      [Monorepo · Docker · Redis]   │
└──────────────────────────────────────────────────────────────┘

詳細リンク: github.com/BackSoftDEV`,
        contact: `📧 Email   : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV
📍 所在地  : ベトナム・ハノイ

スマートファクトリーDX、マイクロサービス、3D SCADAのご相談を承ります。`,
        help: `利用可能コマンド:
  about     → プロフィールと専門分野
  skills    → 技術スタック詳細
  projects  → 主要プロジェクト実績
  contact   → 連絡先
  clear     → 画面クリア
  whoami    → エンジニア情報`,
        whoami: `Nguyễn Đình Bách (BackDEV) · Full Stack Developer`
    },
    zh: {
        about: `╔══════════════════════════════════════════════════════════╗
║  阮庭百 (BackDEV)                                       ║
║  全栈工程师                                              ║
╚══════════════════════════════════════════════════════════╝

📍 地点    : 越南 · 河内
📧 邮箱    : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV

核心领域:
• 微服务与 Monorepo 体系架构设计
• 智能工厂系统研发（MES / OEE / 3D SCADA）
• 实时工业遥测（IoT 网关、Socket.IO、gRPC、Protobuf）
• 工业可视化（Three.js WebGL、甘特图排程、ECharts）`,
        skills: `◉ 前端技术  : React 18/19, TypeScript, Vite, Ant Design, Tailwind, Zustand
◉ 3D与图表  : Three.js (SCADA 3D), Konva, Highcharts 3D, Recharts, ECharts
◉ 后端架构  : Java & Spring Boot, Node.js, Microservices, gRPC & Protobuf
◉ 数据库    : SQL Server (MSSQL), MySQL, PostgreSQL, Redis Pub/Sub & Cache
◉ AI 助手   : Gemini 3.8, Claude 4.6 Sonnet
◉ 运维部署  : Docker, Docker Compose, Nginx, PM2, Keycloak, MinIO, Git, Linux
◉ 规范支持  : 多语言国际化 (VI/EN/JP/CN), IndexedDB 3D 缓存, bpmn-js`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE 与 3D SCADA     [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Spring Boot · RBAC] │
│ 📦 Smart WMS Warehouse         [Microservices · MSSQL]       │
│ ⚙️ Gunze Weave IoT Gateway     [Node.js · gRPC · Redis]      │
│ 🌐 Industrial 3D SCADA Engine  [Three.js · WebGL · Cache]    │
│ 🚀 Microservices Template      [Monorepo · Docker · Redis]   │
└──────────────────────────────────────────────────────────────┘

了解更多: github.com/BackSoftDEV`,
        contact: `📧 邮箱    : nguyendinhbach99@gmail.com
⚡ GitHub  : github.com/BackSoftDEV
📍 地点    : 越南 · 河内

期待在智能工厂、微服务与 3D SCADA 领域深入合作交流。`,
        help: `可用命令:
  about     → 工程师个人简介
  skills    → 核心技术清单
  projects  → 重点工业项目
  contact   → 联系方式
  clear     → 清屏
  whoami    → 工程师身份`,
        whoami: `阮庭百 (BackDEV) · 全栈工程师`
    }
};

// ── AI Knowledge Base by language ──────────────────────
const aiKBByLang = {
    vi: {
        skills: "Nguyễn Đình Bách (BackDEV) có chuyên môn sâu về: **React 18/19, TypeScript, Java & Spring Boot, Node.js, Three.js (SCADA 3D), Kiến trúc Microservices, gRPC / Protobuf, Socket.IO, MSSQL, Redis**, Docker, Keycloak (IAM / RBAC), MinIO (S3 Storage), Ant Design, Tailwind CSS, và các thư viện trực quan hóa dữ liệu (Highcharts 3D, Konva, ECharts).",
        projects: "Các dự án tiêu biểu của anh Bách bao gồm:\n1. **Fujikin OEE & SCADA 3D** (Nhà máy Fujikin Thăng Long - MES/OEE real-time, Gantt, 3D SCADA)\n2. **Meiko Work Instructions & Approvals** (Backend Java & Spring Boot, bảo mật Spring Security & quy trình phê duyệt RBAC)\n3. **Smart WMS** (Quản lý kho bãi thông minh)\n4. **Gunze Weave IoT Gateway** (Backend Node.js & gRPC kết nối máy dệt)",
        experience: "Anh Bách là kỹ sư Full Stack Developer có hơn 2 năm kinh nghiệm thực chiến, chuyên trách kiến trúc hệ thống số hóa nhà máy thông minh (MES/OEE/SCADA), xử lý telemetry dữ liệu thời gian thực và mô phỏng 3D WebGL.",
        available: "Anh Bách sẵn sàng trao đổi về các dự án chuyển đổi số công nghiệp, kiến trúc Microservices & giải pháp Smart Factory. Liên hệ trực tiếp qua Email: nguyendinhbach99@gmail.com.",
        contact: "📧 Email: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "Về SCADA 3D: Anh Bách ứng dụng Three.js/WebGL kết hợp WebSocket và IndexedDB cache mô hình để mô phỏng không gian nhà xưởng thời gian thực mượt mà trực tiếp trên trình duyệt.",
        microservices: "Về Microservices: Hệ thống được module hóa thành các service độc lập (Master Data, OEE Engine, Scheduling, Formula, Event) giao tiếp hiệu năng cao qua gRPC/Protobuf và Redis Pub/Sub.",
        default: "Cảm ơn câu hỏi của bạn! Nguyễn Đình Bách là Full Stack Developer, chuyên sâu kiến trúc Microservices và giải pháp Smart Factory. Bạn có muốn xem thêm chi tiết về kỹ năng, dự án tiêu biểu hay liên hệ với anh Bách không? 🚀",
        greeting: "Xin chào bạn! 👋 Tôi là trợ lý AI của Nguyễn Đình Bách. Bạn muốn tìm hiểu về kỹ năng, các dự án nhà máy thông minh (MES/OEE/SCADA 3D), hay liên hệ hợp tác?"
    },
    en: {
        skills: "Nguyễn Đình Bách (BackDEV) is proficient in: **React 18/19, TypeScript, Java & Spring Boot, Node.js, Three.js (SCADA 3D), Microservices Architecture, gRPC / Protobuf, Socket.IO, MSSQL, Redis**, Docker, Keycloak (IAM / RBAC), MinIO (S3 Storage), Ant Design, Tailwind CSS, and visualization libraries (Highcharts 3D, Konva, ECharts).",
        projects: "Key featured projects include:\n1. **Fujikin OEE & SCADA 3D** (Fujikin Thang Long - Real-time MES/OEE, Gantt scheduling, 3D SCADA)\n2. **Meiko Work Instructions & Approvals** (Java & Spring Boot backend, Spring Security & RBAC workflow)\n3. **Smart WMS** (Intelligent warehouse management)\n4. **Gunze Weave IoT Gateway** (Node.js & gRPC weaving machine telemetry)",
        experience: "Bách is a Full Stack Developer with 2+ years of hands-on experience, specializing in smart factory digitalization (MES/OEE/SCADA), real-time telemetry, and 3D WebGL simulations.",
        available: "Bách is open to discussing smart factory digitalization projects, microservices architecture, and technical collaborations. Reach him at: nguyendinhbach99@gmail.com.",
        contact: "📧 Email: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "SCADA 3D expertise: Utilizing Three.js/WebGL combined with WebSockets and IndexedDB client caching to deliver fluid, real-time 3D workshop simulations directly in web browsers.",
        microservices: "Microservices design: Architecting decoupled services (Master Data, OEE Engine, Scheduling, Formula, Event) communicating via high-throughput gRPC/Protobuf and Redis Pub/Sub.",
        default: "Thank you for asking! Nguyễn Đình Bách is a Full Stack Developer specializing in Microservices and Smart Factory solutions. Would you like to explore his skills, projects, or contact details? 🚀",
        greeting: "Hello! 👋 I am Bách's AI Assistant. How can I help you regarding his technical skills, Smart Factory projects (MES/OEE/SCADA 3D), or collaborations?"
    },
    ja: {
        skills: "Nguyễn Đình Bách (BackDEV) は以下の技術に精通しています：**React 18/19、TypeScript、Java & Spring Boot、Node.js、Three.js (SCADA 3D)、マイクロサービス設計、gRPC / Protobuf、Socket.IO、MSSQL、Redis**、Docker、Keycloak (IAM / RBAC)、MinIO (S3 Storage)、Ant Design、Tailwind CSS、Highcharts 3D、Konva、ECharts。",
        projects: "代表的なプロジェクト実績：\n1. **Fujikin OEE＆SCADA 3D**（Fujikin Thang Long工場 - リアルタイムMES/OEE、ガントチャート、3D SCADA）\n2. **Meiko 作業手順書＆多段階承認**（Java & Spring Bootバックエンド、Spring Security、承認ワークフロー）\n3. **Smart WMS**（スマート倉庫管理システム）\n4. **Gunze 織機IoTゲートウェイ**（Node.js・gRPC通信制御）",
        experience: "2年以上の実務経験を持つフルスタックエンジニアとして、スマートファクトリーDX（MES/OEE/SCADA）、リアルタイムIoTデータ処理、3D WebGLシミュレーションの開発を主導しています。",
        available: "製造業DX、スマートファクトリー、マイクロサービス基盤に関するご相談や技術協業を歓迎いたします。お問い合わせ: nguyendinhbach99@gmail.com",
        contact: "📧 メール: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "3D SCADAに関して: Three.js/WebGL、WebSocket、IndexedDBローカルキャッシュを組み合わせ、ブラウザ上で工場の稼働状態をミリ秒単位で滑らかに立体可視化します。",
        microservices: "マイクロサービス設計: 各業務サービス（マスターデータ、OEEエンジン、日程計画、計算式、イベントバス）をgRPC/ProtobufとRedis Pub/Subで高速連携させています。",
        default: "ご質問ありがとうございます！Nguyễn Đình Bách はスマートファクトリーやマイクロサービスを専門とするエンジニアです。スキル、プロジェクト、連絡先などお気軽にお尋ねください。🚀",
        greeting: "こんにちは！👋 Nguyễn Đình Bách のAIアシスタントです。スキル、スマートファクトリー実績（MES/OEE/SCADA 3D）、協業についてご案内します。"
    },
    zh: {
        skills: "阮庭百 (BackDEV) 精通技术栈包括：**React 18/19, TypeScript, Java & Spring Boot, Node.js, Three.js (3D SCADA), 微服务架构, gRPC / Protobuf, Socket.IO, MSSQL, Redis**, Docker, Keycloak (IAM / RBAC), MinIO (S3 Storage), Ant Design, Tailwind CSS 以及工业可视化库（Highcharts 3D, Konva, ECharts）。",
        projects: "核心代表项目包括：\n1. **Fujikin OEE 与 3D SCADA**（Fujikin 昇龙工厂 - 实时 MES/OEE、甘特图排程、3D 数字孪生）\n2. **Meiko 技术标准作业与多级审批**（基于 Java & Spring Boot 后端、Spring Security 与 RBAC 审批流）\n3. **Smart WMS 智能仓储**（微服务高可用仓储管理）\n4. **Gunze 纺织设备 IoT 遥测网关**（基于 Node.js 与 gRPC 实时遥测）",
        experience: "阮庭百拥有2年以上的实战研发经验，担任全栈工程师，主导智能工厂数字化系统（MES/OEE/SCADA）、实时物联网遥测平台及 3D WebGL 仿真系统的设计与研发。",
        available: "欢迎就智能工厂数字化解决方案、微服务架构以及深度技术合作进行交流。电子邮箱：nguyendinhbach99@gmail.com。",
        contact: "📧 邮箱: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "3D SCADA 专精：基于 Three.js/WebGL、WebSocket 与 IndexedDB 本地缓存技术，实现浏览器端轻量、流畅的百万面工厂实时数字孪生渲染。",
        microservices: "微服务架构：将系统解耦为主数据、OEE 核算、计划排程、公式计算与事件总线等独立微服务，通过 gRPC/Protobuf 和 Redis Pub/Sub 保证高吞吐响应。",
        default: "感谢您的提问！阮庭百是专注于智能工厂与微服务的全栈工程师。如需了解技能细节、项目成果或联系合作，欢迎随时提问！🚀",
        greeting: "您好！👋 我是阮庭百的 AI 助手。欢迎向我咨询他的专业技能、智能工厂（MES/OEE/SCADA 3D）项目以及全栈工程实践！"
    }
};
