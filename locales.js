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
        hud_oee_sub: "Đo lường thời gian thực",
        hud_fps: "ĐỒ HỌA SCADA 3D",
        hud_fps_sub: "Three.js 60 FPS",
        hud_arch: "KIẾN TRÚC HỆ THỐNG",
        hud_arch_sub: "Microservices & gRPC",
        spec_title: "HỒ SƠ NĂNG LỰC KỸ THUẬT",
        hero_bio: "Kỹ sư phát triển phần mềm Full Stack. Chuyên sâu kiến trúc Microservices, giải pháp Smart Factory (MES / OEE / SCADA), xử lý dữ liệu thời gian thực và mô phỏng 3D WebGL với Three.js.",
        btn_projects: "Xem Dự Án",
        btn_github: "GitHub Profile",
        btn_contact: "Liên Hệ",
        about_label: "// 01 · Giới thiệu",
        about_title: "Tôi Là Ai",
        about_quote: `"Tôi thiết kế <strong>kiến trúc Microservices & Monorepo</strong>, làm chủ <strong>dữ liệu thời gian thực (IoT, Socket.IO, gRPC)</strong> và trực quan hóa nhà xưởng thông minh <strong>SCADA 3D với Three.js</strong>."`,
        about_p1: "Tôi chịu trách nhiệm chính về kiến trúc và phát triển các hệ thống số hóa sản xuất quy mô lớn cho các đối tác công nghiệp hàng đầu như Fujikin Thăng Long, Meiko, Gunze...",
        about_p2: "Định hướng kỹ thuật tập trung vào hiệu năng cao, tối ưu hóa bộ nhớ đệm (Redis, IndexedDB), khả năng mở rộng linh hoạt của dịch vụ và đem đến trải nghiệm người dùng trực quan, chính xác cho hệ thống điều hành sản xuất.",
        stat_exp: "Năm kinh nghiệm",
        stat_proj: "Dự án công nghiệp",
        stat_tech: "Công nghệ nòng cốt",
        mod_scada: "Lõi SCADA 3D · Real-time",
        mod_cluster: "Cụm Microservices · gRPC",
        mod_twin: "Digital Twin Node · MES/OEE",
        mod_iot: "IoT Telemetry Radar · Active",
        skills_label: "// 02 · Kỹ năng",
        skills_title: "Vũ Khí Công Nghệ",
        proj_label: "// 03 · Dự án",
        proj_title: "Dự Án Công Nghiệp & Cốt Lõi",
        story_1: "Tôi không chỉ viết mã nguồn —<br>Tôi kiến tạo <em>giải pháp số hóa công nghiệp</em>.",
        story_2: "Mỗi kiến trúc là một cam kết hiệu năng.<br>Mỗi dòng lệnh là một <em>chuẩn mực tin cậy</em>.",
        story_3: "Từ <em>Microservices & Telemetry</em> đến không gian SCADA 3D,<br>tôi xây dựng hệ thống bền vững theo thời gian.",
        story_4: "Tương lai của nhà máy thông minh<br>được tạo dựng từ <em>kỹ thuật xuất sắc</em>.",
        term_label: "// 04 · Terminal",
        term_title: "Interactive Shell",
        term_welcome: "Chào mừng bạn đến với Terminal điều khiển của Nguyễn Đình Bách (BackDEV).",
        term_help: `Nhập lệnh: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,
        term_input_ph: "Nhập lệnh...",
        ai_label: "// 05 · AI Assistant",
        ai_title: "Hỏi Về Bách",
        ai_status: "Online · Full Stack Developer Profile",
        qchip_skills: "🧠 Kỹ năng",
        qchip_projects: "🏭 Dự án (MES/OEE/SCADA)",
        qchip_exp: "💼 Kinh nghiệm làm việc",
        qchip_contact: "🚀 Liên hệ",
        ai_welcome: "👋 Xin chào! Tôi là trợ lý AI của Nguyễn Đình Bách (BackDEV). Hãy hỏi tôi bất kỳ thông tin nào về kiến trúc Microservices, dự án Smart Factory (MES / OEE / SCADA 3D), hoặc kinh nghiệm phát triển phần mềm Full Stack!",
        ai_input_ph: "Hỏi về Bách (kỹ năng, dự án SCADA, Microservices)...",
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
        contact_p: "Tôi luôn sẵn sàng trao đổi về các giải pháp chuyển đổi số công nghiệp thông minh (Smart Factory / MES / OEE / SCADA 3D), kiến trúc Microservices và cơ hội hợp tác kỹ thuật.",
        contact_role_lbl: "Chuyên môn",
        contact_role_val: "Full Stack Developer",
        contact_loc_lbl: "Vị trí",
        contact_loc_val: "Hà Nội, Việt Nam",
        footer_text: "Thiết kế & Phát triển bởi <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",
        toast_success: "✓ Đã gửi tin nhắn thành công!",
        toast_missing: "⚠ Vui lòng nhập đầy đủ thông tin"
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_terminal: "Terminal",
        nav_contact: "Contact",
        hero_badge: "💻 &nbsp;Full Stack Developer",
        telemetry_status: "SYSTEM ONLINE",
        hud_oee: "OEE PERFORMANCE",
        hud_oee_sub: "Real-time MES Index",
        hud_fps: "3D SCADA ENGINE",
        hud_fps_sub: "Three.js 60 FPS",
        hud_arch: "DISTRIBUTED ARCH",
        hud_arch_sub: "Microservices & gRPC",
        spec_title: "ENGINEERING SPECIFICATION",
        hero_bio: "Full Stack Developer specializing in Microservices architecture, Smart Factory solutions (MES / OEE / SCADA), real-time telemetry, and 3D WebGL simulations with Three.js.",
        btn_projects: "View Projects",
        btn_github: "GitHub Profile",
        btn_contact: "Contact Me",
        about_label: "// 01 · About",
        about_title: "Who I Am",
        about_quote: `"I architect <strong>Microservices & Monorepo systems</strong>, master <strong>real-time telemetry (IoT, Socket.IO, gRPC)</strong>, and pioneer smart factory <strong>SCADA 3D visualization with Three.js</strong>."`,
        about_p1: "Leading the architecture and engineering of large-scale industrial digitalization systems for major partners including Fujikin Thang Long, Meiko, Gunze...",
        about_p2: "Technical focus is on high performance, distributed caching optimization (Redis, IndexedDB), service scalability, and delivering intuitive, mission-critical operator experiences for manufacturing operations.",
        stat_exp: "Years Experience",
        stat_proj: "Industrial Projects",
        stat_tech: "Core Technologies",
        mod_scada: "SCADA 3D Core · Real-time",
        mod_cluster: "Microservices Cluster · gRPC",
        mod_twin: "Digital Twin Node · MES/OEE",
        mod_iot: "IoT Telemetry Radar · Active",
        skills_label: "// 02 · Skills",
        skills_title: "Tech Arsenal",
        proj_label: "// 03 · Projects",
        proj_title: "Industrial & Core Projects",
        story_1: "I don't just write code —<br>I engineer <em>industrial digitalization solutions</em>.",
        story_2: "Every architecture is a commitment to performance.<br>Every line of code, a <em>contract of reliability</em>.",
        story_3: "From <em>Microservices & Telemetry</em> to SCADA 3D environments,<br>I build systems engineered to last.",
        story_4: "The future of smart factories is<br><em>crafted through engineering excellence</em>.",
        term_label: "// 04 · Terminal",
        term_title: "Interactive Shell",
        term_welcome: "Welcome to Nguyễn Đình Bách (BackDEV)'s industrial terminal.",
        term_help: `Type a command: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,
        term_input_ph: "Enter command...",
        ai_label: "// 05 · AI Assistant",
        ai_title: "Ask About Bách",
        ai_status: "Online · Full Stack Developer Profile",
        qchip_skills: "🧠 Skills",
        qchip_projects: "🏭 Projects (MES/OEE/SCADA)",
        qchip_exp: "💼 Work Experience",
        qchip_contact: "🚀 Contact",
        ai_welcome: "👋 Hello! I am Nguyễn Đình Bách (BackDEV)'s AI Assistant. Ask me anything about his Microservices architecture, Smart Factory projects (MES / OEE / SCADA 3D), or his engineering background!",
        ai_input_ph: "Ask about Bách (skills, SCADA 3D projects, Microservices)...",
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
        contact_p: "Always open to discussing smart factory digitalization solutions (MES / OEE / SCADA 3D), microservices architecture, and technical collaborations.",
        contact_role_lbl: "Specialization",
        contact_role_val: "Full Stack Developer",
        contact_loc_lbl: "Location",
        contact_loc_val: "Hanoi, Vietnam",
        footer_text: "Designed & Developed by <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",
        toast_success: "✓ Message sent successfully!",
        toast_missing: "⚠ Please fill all fields"
    },
    ja: {
        nav_about: "概要",
        nav_skills: "スキル",
        nav_projects: "プロジェクト",
        nav_terminal: "ターミナル",
        nav_contact: "お問い合わせ",
        hero_badge: "💻 &nbsp;フルスタックエンジニア",
        telemetry_status: "システム稼働中",
        hud_oee: "OEE生産効率",
        hud_oee_sub: "リアルタイムMES計測",
        hud_fps: "3Dグラフィック",
        hud_fps_sub: "Three.js 60 FPS",
        hud_arch: "分散アーキテクチャ",
        hud_arch_sub: "マイクロサービス＆gRPC",
        spec_title: "技術仕様・実績サマリー",
        hero_bio: "フルスタックエンジニア。マイクロサービス基盤、スマートファクトリーDX（MES / OEE / SCADA）、リアルタイムIoTデータ処理、Three.jsによる3D WebGLシミュレーションを専門としています。",
        btn_projects: "プロジェクトを見る",
        btn_github: "GitHub プロファイル",
        btn_contact: "お問い合わせ",
        about_label: "// 01 · 概要",
        about_title: "プロフィール",
        about_quote: `"<strong>マイクロサービス＆Monorepo</strong>を設計し、<strong>リアルタイムデータ（IoT、Socket.IO、gRPC）</strong>を駆使し、Three.jsによる<strong>スマートファクトリーSCADA 3D可視化</strong>を開拓しています。"`,
        about_p1: "Fujikin Thang Long、Meiko、Gunzeなどの大手製造業パートナー向けの大規模生産DXシステムの設計・開発をリードしています。",
        about_p2: "高パフォーマンス、キャッシュ最適化（Redis、IndexedDB）、スケーラビリティ、そして製造現場のオペレーターに向けた直感的で高精度なUI/UXの実現に注力しています。",
        stat_exp: "年の実務経験",
        stat_proj: "産業プロジェクト",
        stat_tech: "コアテクノロジー",
        mod_scada: "3D SCADAコア · リアルタイム",
        mod_cluster: "マイクロサービス群 · gRPC",
        mod_twin: "デジタルツイン · MES/OEE",
        mod_iot: "IoTテレメトリレーダー · 稼働中",
        skills_label: "// 02 · スキル",
        skills_title: "スキル・装備",
        proj_label: "// 03 · プロジェクト",
        proj_title: "産業＆主要プロジェクト",
        story_1: "単にコードを書くだけではない —<br>産業の<em>デジタル化ソリューション</em>を創造する。",
        story_2: "すべての設計は性能へのコミットメント。<br>すべてのコードは<em>信頼の証</em>。",
        story_3: "<em>マイクロサービス＆テレメトリ</em>からSCADA 3D空間まで、<br>未来へ持続するシステムを構築する。",
        story_4: "スマートファクトリーの未来は、<br><em>卓越したエンジニアリング</em>によって創られる。",
        term_label: "// 04 · ターミナル",
        term_title: "Interactive Shell",
        term_welcome: "Nguyễn Đình Bách (BackDEV) の産業ターミナルへようこそ。",
        term_help: `コマンドを入力: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,
        term_input_ph: "コマンドを入力...",
        ai_label: "// 05 · AI アシスタント",
        ai_title: "バッハについて質問",
        ai_status: "オンライン · フルスタックエンジニア",
        qchip_skills: "🧠 スキル",
        qchip_projects: "🏭 プロジェクト (MES/OEE/SCADA)",
        qchip_exp: "💼 職務経歴",
        qchip_contact: "🚀 連絡先",
        ai_welcome: "👋 こんにちは！Nguyễn Đình Bách (BackDEV) のAIアシスタントです。マイクロサービス設計、スマートファクトリー（MES / OEE / SCADA 3D）、または開発実績についてお気軽にご質問ください！",
        ai_input_ph: "バッハについて尋ねる（スキル、3D SCADA、マイクロサービス）...",
        ai_send: "送信 →",
        contact_label: "// 06 · お問い合わせ",
        contact_title: "お問い合わせ",
        form_name_lbl: "お名前",
        form_name_ph: "氏名を入力",
        form_email_lbl: "メールアドレス",
        form_email_ph: "email@example.com",
        form_msg_lbl: "お問い合わせ内容",
        form_msg_ph: "プロジェクトのご相談やお問い合わせ内容...",
        form_btn: "メッセージを送信 ✦",
        contact_heading: "協業＆プロジェクト",
        contact_p: "スマートファクトリーDXソリューション（MES / OEE / SCADA 3D）、マイクロサービスアーキテクチャ、技術協業についていつでもお気軽にご相談ください。",
        contact_role_lbl: "専門分野",
        contact_role_val: "フルスタックエンジニア",
        contact_loc_lbl: "所在地",
        contact_loc_val: "ハノイ、ベトナム",
        footer_text: "Designed & Developed by <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",
        toast_success: "✓ メッセージが送信されました！",
        toast_missing: "⚠ すべての項目を入力してください"
    },
    zh: {
        nav_about: "关于",
        nav_skills: "技能",
        nav_projects: "项目",
        nav_terminal: "终端",
        nav_contact: "联系",
        hero_badge: "💻 &nbsp;全栈工程师",
        telemetry_status: "系统运行正常",
        hud_oee: "综合设备效率 OEE",
        hud_oee_sub: "实时 MES 核算",
        hud_fps: "3D SCADA 渲染引擎",
        hud_fps_sub: "Three.js 60 FPS",
        hud_arch: "分布式系统架构",
        hud_arch_sub: "微服务与 gRPC 总线",
        spec_title: "技术工程规格概要",
        hero_bio: "全栈工程师。专注于微服务架构、智能工厂解决方案（MES / OEE / SCADA）、实时数据遥测以及基于 Three.js 的 3D WebGL 工厂仿真。",
        btn_projects: "查看项目",
        btn_github: "GitHub 主页",
        btn_contact: "联系我",
        about_label: "// 01 · 关于",
        about_title: "关于我",
        about_quote: `"我致力于构建<strong>微服务与 Monorepo 架构</strong>，精通<strong>实时数据遥测（IoT、Socket.IO、gRPC）</strong>，并以 Three.js 开拓智能工厂 <strong>SCADA 3D 可视化</strong>。"`,
        about_p1: "主导为 Fujikin Thang Long、Meiko、Gunze 等知名工业制造客户构建大型数字化生产系统。",
        about_p2: "技术重点在于高并发性能、分布式缓存优化（Redis、IndexedDB）、服务伸缩性，以及为工厂生产调度提供直观精准的操作体验。",
        stat_exp: "年开发经验",
        stat_proj: "大型工业项目",
        stat_tech: "核心技术栈",
        mod_scada: "3D SCADA 核心 · 实时遥测",
        mod_cluster: "微服务集群 · gRPC",
        mod_twin: "数字孪生节点 · MES/OEE",
        mod_iot: "IoT 遥测雷达 · 运行中",
        skills_label: "// 02 · 技能",
        skills_title: "技术装备",
        proj_label: "// 03 · 项目",
        proj_title: "工业与核心项目",
        story_1: "我不仅是在编写代码 —<br>更是在构筑<em>工业数字化解决方案</em>。",
        story_2: "每一种架构都是对极致性能的承诺，<br>每一行代码都是<em>高可用性的契约</em>。",
        story_3: "从 <em>微服务与实时遥测</em> 到 SCADA 3D 虚拟工厂，<br>打造历久弥坚的坚实系统。",
        story_4: "智能工厂的未来，<br>由<em>精益工程与技术卓越</em>所缔造。",
        term_label: "// 04 · 终端",
        term_title: "交互式命令行",
        term_welcome: "欢迎访问阮庭百 (BackDEV) 的工业控制台。",
        term_help: `输入命令: <span style="color:var(--neon)">about</span> · <span style="color:var(--neon)">skills</span> · <span style="color:var(--neon)">projects</span> · <span style="color:var(--neon)">contact</span> · <span style="color:var(--neon)">clear</span>`,
        term_input_ph: "输入命令...",
        ai_label: "// 05 · AI 助手",
        ai_title: "向助手提问",
        ai_status: "在线 · 全栈开发工程师",
        qchip_skills: "🧠 技术栈",
        qchip_projects: "🏭 工业项目 (MES/OEE/SCADA)",
        qchip_exp: "💼 工作履历",
        qchip_contact: "🚀 联系方式",
        ai_welcome: "👋 您好！我是阮庭百 (BackDEV) 的 AI 智能助手。欢迎向我咨询关于微服务架构、智能工厂项目（MES / OEE / 3D SCADA）以及全栈工程实践！",
        ai_input_ph: "向助手提问（技能栈、SCADA 3D 项目、微服务架构）...",
        ai_send: "发送 →",
        contact_label: "// 06 · 联系",
        contact_title: "保持联络",
        form_name_lbl: "姓名",
        form_name_ph: "您的姓名",
        form_email_lbl: "电子邮箱",
        form_email_ph: "email@example.com",
        form_msg_lbl: "留言内容",
        form_msg_ph: "请输入项目需求或交流内容...",
        form_btn: "发送信息 ✦",
        contact_heading: "合作共赢",
        contact_p: "随时欢迎探讨智能工厂数字化解决方案（MES / OEE / SCADA 3D）、微服务架构以及深度技术合作机会。",
        contact_role_lbl: "专业定位",
        contact_role_val: "全栈工程师",
        contact_loc_lbl: "工作地点",
        contact_loc_val: "越南 · 河内",
        footer_text: "Designed & Developed by <span>Nguyễn Đình Bách (BackDEV)</span> · 2026",
        toast_success: "✓ 信息发送成功！",
        toast_missing: "⚠ 请填写所有必填项"
    }
};

// ── Typing phrases by language ─────────────────────────
const phrasesByLang = {
    vi: [
        'Full Stack Developer',
        'Chuyên gia Smart Factory & MES / OEE',
        'Tiên phong SCADA 3D & WebGL',
        'Kiến trúc sư Microservices & Monorepo',
        'Kỹ sư Real-time Telemetry & IoT'
    ],
    en: [
        'Full Stack Developer',
        'Smart Factory & MES / OEE Specialist',
        'SCADA 3D & WebGL Pioneer',
        'Microservices & Monorepo Architect',
        'Real-time Telemetry & IoT Engineer'
    ],
    ja: [
        'フルスタックエンジニア',
        'スマートファクトリー＆MES / OEE 専門家',
        'SCADA 3D & WebGL 先駆者',
        'マイクロサービス＆Monorepo アーキテクト',
        'リアルタイムIoT＆テレメトリ技術者'
    ],
    zh: [
        '全栈工程师',
        '智能工厂与 MES / OEE 专家',
        '3D SCADA 与 WebGL 开拓者',
        '微服务与 Monorepo 架构师',
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
            desc: 'Hệ thống quản lý tài liệu kỹ thuật, chỉ dẫn công việc (WI), quy trình phê duyệt đa cấp (Approvals Workflow), kiểm định định kỳ và hệ thống phân quyền phức tạp (RBAC) cho nhà máy Meiko.',
            tags: ['React', 'Node.js', 'Ant Design', 'Zustand', 'i18n'],
            lang: 'TypeScript',
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
            desc: 'Technical documentation & Work Instructions (WI) platform, multi-level approval workflows, periodic inspections, and granular Role-Based Access Control (RBAC) for Meiko electronics manufacturing.',
            tags: ['React', 'Node.js', 'Ant Design', 'Zustand', 'i18n'],
            lang: 'TypeScript',
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
            desc: 'Meiko電子工場向け技術文書・作業手順書（WI）管理、多段階承認ワークフロー、定期検査管理、精密な権限管理（RBAC）システム。',
            tags: ['React', 'Node.js', 'Ant Design', 'Zustand', 'i18n'],
            lang: 'TypeScript',
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
            desc: '为 Meiko 电子工厂开发的技术文档、标准作业指导书（WI）管理平台，支持多层级灵活审批流、定期巡检与复杂角色权限控制（RBAC）。',
            tags: ['React', 'Node.js', 'Ant Design', 'Zustand', 'i18n'],
            lang: 'TypeScript',
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
◉ Backend   : Node.js, TypeScript, Microservices, gRPC & Protobuf, Express
◉ Database  : MSSQL, PostgreSQL, MySQL (Sequelize), Redis Pub/Sub, MinIO
◉ Client    : IndexedDB (Cache mô hình 3D dung lượng lớn), LocalStorage
◉ DevOps    : Docker, Docker Compose, Nginx, PM2, Git, Linux
◉ Khác      : i18n đa ngôn ngữ (VI/EN/JP/CN), bpmn-js, OnlyOffice`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE & SCADA 3D      [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Node.js · AntDesign] │
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
◉ Backend   : Node.js, TypeScript, Microservices, gRPC & Protobuf, Express
◉ Database  : MSSQL, PostgreSQL, MySQL (Sequelize), Redis Pub/Sub, MinIO
◉ Client    : IndexedDB (Large 3D Model Cache), LocalStorage
◉ DevOps    : Docker, Docker Compose, Nginx, PM2, Git, Linux
◉ Standards : Multi-language i18n (VI/EN/JP/CN), bpmn-js, OnlyOffice`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE & SCADA 3D      [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Node.js · AntDesign] │
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
◉ バック    : Node.js, TypeScript, Microservices, gRPC & Protobuf, Express
◉ ＤＢ      : MSSQL, PostgreSQL, MySQL (Sequelize), Redis Pub/Sub, MinIO
◉ キャッシュ: IndexedDB (大容量3Dモデル高速キャッシュ), LocalStorage
◉ 運用基盤  : Docker, Docker Compose, Nginx, PM2, Git, Linux
◉ 標準対応  : 多言語i18n (VI/EN/JP/CN), bpmn-js, OnlyOffice`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE＆SCADA 3D       [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Node.js · AntDesign] │
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
◉ 后端架构  : Node.js, TypeScript, Microservices, gRPC & Protobuf, Express
◉ 数据库    : MSSQL, PostgreSQL, MySQL (Sequelize), Redis Pub/Sub, MinIO
◉ 本地存储  : IndexedDB (超大 3D 模型缓存), LocalStorage
◉ 运维部署  : Docker, Docker Compose, Nginx, PM2, Git, Linux
◉ 规范支持  : 多语言国际化 (VI/EN/JP/CN), bpmn-js, OnlyOffice`,
        projects: `┌──────────────────────────────────────────────────────────────┐
│ 🏭 Fujikin OEE 与 3D SCADA     [React 19 · Three.js · Socket]│
│ 📋 Meiko WI & Workflow RBAC    [React · Node.js · AntDesign] │
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
        skills: "Nguyễn Đình Bách (BackDEV) có chuyên môn sâu về: **React 18/19, TypeScript, Node.js, Three.js (SCADA 3D), Kiến trúc Microservices, gRPC / Protobuf, Socket.IO, MSSQL, Redis**, Ant Design, Tailwind CSS, và các thư viện trực quan hóa dữ liệu (Highcharts 3D, Konva, ECharts).",
        projects: "Các dự án tiêu biểu của anh Bách bao gồm:\n1. **Fujikin OEE & SCADA 3D** (Nhà máy Fujikin Thăng Long - MES/OEE real-time, Gantt, 3D SCADA)\n2. **Meiko Work Instructions & Approvals** (Quản lý tài liệu kỹ thuật, quy trình phê duyệt & phân quyền RBAC)\n3. **Smart WMS** (Quản lý kho bãi thông minh)\n4. **Gunze Weave IoT Gateway** (Backend Node.js & gRPC kết nối máy dệt)",
        experience: "Anh Bách là kỹ sư Full Stack Developer có hơn 2 năm kinh nghiệm thực chiến, chuyên trách kiến trúc hệ thống số hóa nhà máy thông minh (MES/OEE/SCADA), xử lý telemetry dữ liệu thời gian thực và mô phỏng 3D WebGL.",
        available: "Anh Bách sẵn sàng trao đổi về các dự án chuyển đổi số công nghiệp, kiến trúc Microservices & giải pháp Smart Factory. Liên hệ trực tiếp qua Email: nguyendinhbach99@gmail.com.",
        contact: "📧 Email: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "Về SCADA 3D: Anh Bách ứng dụng Three.js/WebGL kết hợp WebSocket và IndexedDB cache mô hình để mô phỏng không gian nhà xưởng thời gian thực mượt mà trực tiếp trên trình duyệt.",
        microservices: "Về Microservices: Hệ thống được module hóa thành các service độc lập (Master Data, OEE Engine, Scheduling, Formula, Event) giao tiếp hiệu năng cao qua gRPC/Protobuf và Redis Pub/Sub.",
        default: "Cảm ơn câu hỏi của bạn! Nguyễn Đình Bách là Full Stack Developer, chuyên sâu kiến trúc Microservices và giải pháp Smart Factory. Bạn có muốn xem thêm chi tiết về kỹ năng, dự án tiêu biểu hay liên hệ với anh Bách không? 🚀",
        greeting: "Xin chào bạn! 👋 Tôi là trợ lý AI của Nguyễn Đình Bách. Bạn muốn tìm hiểu về kỹ năng, các dự án nhà máy thông minh (MES/OEE/SCADA 3D), hay liên hệ hợp tác?"
    },
    en: {
        skills: "Nguyễn Đình Bách (BackDEV) is proficient in: **React 18/19, TypeScript, Node.js, Three.js (SCADA 3D), Microservices Architecture, gRPC / Protobuf, Socket.IO, MSSQL, Redis**, Ant Design, Tailwind CSS, and visualization libraries (Highcharts 3D, Konva, ECharts).",
        projects: "Key featured projects include:\n1. **Fujikin OEE & SCADA 3D** (Fujikin Thang Long - Real-time MES/OEE, Gantt scheduling, 3D SCADA)\n2. **Meiko Work Instructions & Approvals** (Technical documentation & RBAC workflow)\n3. **Smart WMS** (Intelligent warehouse management)\n4. **Gunze Weave IoT Gateway** (Node.js & gRPC weaving machine telemetry)",
        experience: "Bách is a Full Stack Developer with 2+ years of hands-on experience, specializing in smart factory digitalization (MES/OEE/SCADA), real-time telemetry, and 3D WebGL simulations.",
        available: "Bách is open to discussing smart factory digitalization projects, microservices architecture, and technical collaborations. Reach him at: nguyendinhbach99@gmail.com.",
        contact: "📧 Email: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "SCADA 3D expertise: Utilizing Three.js/WebGL combined with WebSockets and IndexedDB client caching to deliver fluid, real-time 3D workshop simulations directly in web browsers.",
        microservices: "Microservices design: Architecting decoupled services (Master Data, OEE Engine, Scheduling, Formula, Event) communicating via high-throughput gRPC/Protobuf and Redis Pub/Sub.",
        default: "Thank you for asking! Nguyễn Đình Bách is a Full Stack Developer specializing in Microservices and Smart Factory solutions. Would you like to explore his skills, projects, or contact details? 🚀",
        greeting: "Hello! 👋 I am Bách's AI Assistant. How can I help you regarding his technical skills, Smart Factory projects (MES/OEE/SCADA 3D), or collaborations?"
    },
    ja: {
        skills: "Nguyễn Đình Bách (BackDEV) は以下の技術に精通しています：**React 18/19、TypeScript、Node.js、Three.js (SCADA 3D)、マイクロサービス設計、gRPC / Protobuf、Socket.IO、MSSQL、Redis**、Ant Design、Tailwind CSS、Highcharts 3D、Konva、ECharts。",
        projects: "代表的なプロジェクト実績：\n1. **Fujikin OEE＆SCADA 3D**（Fujikin Thang Long工場 - リアルタイムMES/OEE、ガントチャート、3D SCADA）\n2. **Meiko 作業手順書＆多段階承認**（技術文書管理、承認ワークフロー、RBAC権限）\n3. **Smart WMS**（スマート倉庫管理システム）\n4. **Gunze 織機IoTゲートウェイ**（Node.js・gRPC通信制御）",
        experience: "2年以上の実務経験を持つフルスタックエンジニアとして、スマートファクトリーDX（MES/OEE/SCADA）、リアルタイムIoTデータ処理、3D WebGLシミュレーションの開発を主導しています。",
        available: "製造業DX、スマートファクトリー、マイクロサービス基盤に関するご相談や技術協業を歓迎いたします。お問い合わせ: nguyendinhbach99@gmail.com",
        contact: "📧 メール: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "3D SCADAに関して: Three.js/WebGL、WebSocket、IndexedDBローカルキャッシュを組み合わせ、ブラウザ上で工場の稼働状態をミリ秒単位で滑らかに立体可視化します。",
        microservices: "マイクロサービス設計: 各業務サービス（マスターデータ、OEEエンジン、日程計画、計算式、イベントバス）をgRPC/ProtobufとRedis Pub/Subで高速連携させています。",
        default: "ご質問ありがとうございます！Nguyễn Đình Bách はスマートファクトリーやマイクロサービスを専門とするエンジニアです。スキル、プロジェクト、連絡先などお気軽にお尋ねください。🚀",
        greeting: "こんにちは！👋 Nguyễn Đình Bách のAIアシスタントです。スキル、スマートファクトリー実績（MES/OEE/SCADA 3D）、協業についてご案内します。"
    },
    zh: {
        skills: "阮庭百 (BackDEV) 精通技术栈包括：**React 18/19, TypeScript, Node.js, Three.js (3D SCADA), 微服务架构, gRPC / Protobuf, Socket.IO, MSSQL, Redis**, Ant Design, Tailwind CSS 以及工业可视化库（Highcharts 3D, Konva, ECharts）。",
        projects: "核心代表项目包括：\n1. **Fujikin OEE 与 3D SCADA**（Fujikin 昇龙工厂 - 实时 MES/OEE、甘特图排程、3D 数字孪生）\n2. **Meiko 技术标准作业与多级审批**（技术文档规范、审批工作流、RBAC 细粒度权限）\n3. **Smart WMS 智能仓储**（微服务高可用仓储管理）\n4. **Gunze 纺织设备 IoT 遥测网关**（基于 Node.js 与 gRPC 实时遥测）",
        experience: "阮庭百拥有2年以上的实战研发经验，担任全栈工程师，主导智能工厂数字化系统（MES/OEE/SCADA）、实时物联网遥测平台及 3D WebGL 仿真系统的设计与研发。",
        available: "欢迎就智能工厂数字化解决方案、微服务架构以及深度技术合作进行交流。电子邮箱：nguyendinhbach99@gmail.com。",
        contact: "📧 邮箱: nguyendinhbach99@gmail.com · ⚡ GitHub: github.com/BackSoftDEV",
        scada: "3D SCADA 专精：基于 Three.js/WebGL、WebSocket 与 IndexedDB 本地缓存技术，实现浏览器端轻量、流畅的百万面工厂实时数字孪生渲染。",
        microservices: "微服务架构：将系统解耦为主数据、OEE 核算、计划排程、公式计算与事件总线等独立微服务，通过 gRPC/Protobuf 和 Redis Pub/Sub 保证高吞吐响应。",
        default: "感谢您的提问！阮庭百是专注于智能工厂与微服务的全栈工程师。如需了解技能细节、项目成果或联系合作，欢迎随时提问！🚀",
        greeting: "您好！👋 我是阮庭百的 AI 助手。欢迎向我咨询他的专业技能、智能工厂（MES/OEE/SCADA 3D）项目以及全栈工程实践！"
    }
};
