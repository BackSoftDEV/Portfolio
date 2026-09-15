// ── Loader ──────────────────────────────────────────
THREE.Cache.enabled = true;
const loader = document.getElementById('loader');
const pct = document.getElementById('loader-pct');
let p = 0;
const counter = setInterval(() => {
    p = Math.min(p + Math.random() * 8, 100);
    pct.textContent = Math.floor(p) + '%';
    if (p >= 100) {
        clearInterval(counter);
        setTimeout(() => {
            loader.style.transition = 'opacity .6s, transform .6s';
            loader.style.opacity = '0';
            loader.style.transform = 'scale(1.05)';
            setTimeout(() => loader.style.display = 'none', 600);
        }, 300);
    }
}, 40);

// ── Cursor ───────────────────────────────────────────
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    rx += (mx - rx) * .15; ry += (my - ry) * .15;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
}
animCursor();

// ── Theme ────────────────────────────────────────────
const savedTheme = localStorage.getItem('portfolio_theme');
let dark = savedTheme ? savedTheme === 'dark' : true;

function applyTheme(isDark) {
    dark = isDark;
    document.body.classList.toggle('light', !dark);
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = dark ? '☀ Light' : '🌙 Dark';
    }
    localStorage.setItem('portfolio_theme', dark ? 'dark' : 'light');
}

function toggleTheme() {
    applyTheme(!dark);
}

// Khởi tạo theme khi tải trang
applyTheme(dark);

// ── Mobile menu ──────────────────────────────────────
document.getElementById('burgerBtn').onclick = () => document.getElementById('mobileMenu').classList.add('open');
document.getElementById('mobileClose').onclick = () => closeMobile();
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// ── Toast ─────────────────────────────────────────────
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Starfield ─────────────────────────────────────────
(function () {
    const canvas = document.getElementById('star-canvas');
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    cam.position.z = 800;

    const count = window.innerWidth < 768 ? 1500 : 3000;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 3000;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 3000;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 3000;
        const c = Math.random();
        if (c < 0.4) { cols[i * 3] = 0; cols[i * 3 + 1] = 0.94; cols[i * 3 + 2] = 1; } // Electric Cyan SCADA
        else if (c < 0.7) { cols[i * 3] = 0.15; cols[i * 3 + 1] = 0.39; cols[i * 3 + 2] = 0.92; } // Cobalt Control Blue
        else if (c < 0.85) { cols[i * 3] = 0.96; cols[i * 3 + 1] = 0.62; cols[i * 3 + 2] = 0.04; } // Industrial Amber
        else { cols[i * 3] = 0.88; cols[i * 3 + 1] = 0.91; cols[i * 3 + 2] = 0.94; } // Steel White
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const mat = new THREE.PointsMaterial({ size: 1.8, vertexColors: true, transparent: true, opacity: .85, sizeAttenuation: true });
    const stars = new THREE.Points(geom, mat);
    scene.add(stars);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        requestAnimationFrame(animate);
        stars.rotation.y += 0.0002;
        stars.rotation.x += 0.00008;
        cam.position.x += (mouseX * 30 - cam.position.x) * 0.03;
        cam.position.y += (-mouseY * 30 - cam.position.y) * 0.03;
        cam.lookAt(scene.position);
        renderer.render(scene, cam);
    }
    animate();

    window.addEventListener('resize', () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        cam.aspect = canvas.clientWidth / canvas.clientHeight;
        cam.updateProjectionMatrix();
    });
})();

// ── i18n & Typing animation ───────────────────────────
let currentLang = localStorage.getItem('portfolio_lang') || 'vi';
let phrases = (typeof phrasesByLang !== 'undefined' && phrasesByLang[currentLang]) ? phrasesByLang[currentLang] : [
    'Full Stack Developer',
    'Smart Factory & MES / OEE Specialist',
    'SCADA 3D & WebGL Pioneer',
    'Microservices & Monorepo Architect',
    'Real-time Telemetry & IoT Engineer'
];
let pi = 0, ci = 0, deleting = false;
const typingEl = document.getElementById('typing-text');
function typeLoop() {
    const phrase = phrases[pi];
    if (!deleting) {
        typingEl.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) { deleting = true; setTimeout(typeLoop, 2200); return; }
        setTimeout(typeLoop, 90);
    } else {
        typingEl.textContent = phrase.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
        setTimeout(typeLoop, 45);
    }
}
setTimeout(typeLoop, 2800);

// ── Skills ────────────────────────────────────────────
const skills = [
    { icon: '⚛️', name: 'React 18/19 & TS', level: .95 },
    { icon: '🟢', name: 'Node.js & Microservices', level: .92 },
    { icon: '🌐', name: 'Three.js / WebGL 3D', level: .90 },
    { icon: '⚡', name: 'Real-time & Socket.IO', level: .92 },
    { icon: '🏗️', name: 'gRPC & Protocol Buffers', level: .85 },
    { icon: '📊', name: 'Highcharts 3D & Konva', level: .88 },
    { icon: '🗄️', name: 'MSSQL / PostgreSQL', level: .88 },
    { icon: '🚀', name: 'Redis Pub/Sub & Cache', level: .86 },
    { icon: '🐳', name: 'Docker / Nginx / PM2', level: .84 },
    { icon: '🎨', name: 'Ant Design & Tailwind', level: .92 },
    { icon: '🔄', name: 'Zustand & Redux Toolkit', level: .90 },
    { icon: '🌍', name: 'i18next (VI/EN/JP/CN)', level: .88 },
];
const sg = document.getElementById('skillsGrid');
skills.forEach(s => {
    sg.innerHTML += `<div class="skill-chip">
    <div class="skill-icon">${s.icon}</div>
    <div class="skill-name">${s.name}</div>
    <div class="skill-level"><div class="skill-fill" style="width:${s.level * 100}%"></div></div>
  </div>`;
});

// ── Skill Globe ───────────────────────────────────────
(function () {
    const canvas = document.getElementById('globe-canvas');
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(300, 300);
    cam.position.z = 3;

    const sphereGeom = new THREE.SphereGeometry(1, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, opacity: .18, transparent: true });
    const sphere = new THREE.Mesh(sphereGeom, sphereMat);
    scene.add(sphere);

    const labels = skills.map(s => s.name);
    const dots = [];
    labels.forEach((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / labels.length);
        const theta = Math.sqrt(labels.length * Math.PI) * phi;
        const dg = new THREE.SphereGeometry(.04, 8, 8);
        const dm = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
        const d = new THREE.Mesh(dg, dm);
        d.position.setFromSphericalCoords(1, phi, theta);
        scene.add(d);
        dots.push(d);
    });

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.002;
        dots.forEach(d => {
            d.rotation.y = sphere.rotation.y;
            d.rotation.x = sphere.rotation.x;
            const pos = d.position.clone().applyEuler(sphere.rotation);
            d.position.copy(pos.normalize());
        });
        // Re-implement dot rotation properly
        renderer.render(scene, cam);
    }

    // Simpler approach: rotate the whole group
    const group = new THREE.Group();
    group.add(sphere);
    dots.forEach(d => group.add(d));
    scene.remove(sphere);
    dots.forEach(d => scene.remove(d));
    scene.add(group);

    function animateGlobe() {
        requestAnimationFrame(animateGlobe);
        group.rotation.y += 0.006;
        group.rotation.x += 0.002;
        renderer.render(scene, cam);
    }
    animateGlobe();
})();

// ── Projects (Multi-language) ─────────────────────────
function renderProjects(lang) {
    const pg = document.getElementById('projectsGrid');
    if (!pg) return;
    const list = (typeof projectsByLang !== 'undefined' && projectsByLang[lang]) ? projectsByLang[lang] : (typeof projectsByLang !== 'undefined' ? projectsByLang.vi : []);
    pg.innerHTML = '';
    list.forEach(p => {
        pg.innerHTML += `<div class="proj-card" onmousemove="tilt(event,this)" onmouseleave="resetTilt(this)">
        <div class="proj-card-top">
          <div class="proj-icon">${p.icon}</div>
          <div class="proj-links">
            <a href="${p.url}" target="_blank">⎋ GitHub</a>
          </div>
        </div>
        <div class="proj-title">${p.name}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-meta">
          <div class="proj-lang"><div class="lang-dot"></div>${p.lang}</div>
          <div class="proj-stars">⭐ ${p.stars}</div>
        </div>
      </div>`;
    });
}
renderProjects(currentLang);

// Tilt effect
function tilt(e, el) {
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -20;
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`;
}
function resetTilt(el) { el.style.transform = ''; }

// ── Scroll observer ───────────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            // Animate skill bars
            if (e.target.classList.contains('skill-chip')) {
                e.target.querySelector('.skill-fill').style.transform = 'scaleX(1)';
            }
        }
    });
}, { threshold: .15 });

document.querySelectorAll('.reveal, .story-block').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-chip').forEach(el => observer.observe(el));

// ── Terminal (Multi-language) ─────────────────────────
function getTermData() {
    return (typeof termDataByLang !== 'undefined' && termDataByLang[currentLang]) 
        ? termDataByLang[currentLang] 
        : (typeof termDataByLang !== 'undefined' ? termDataByLang.vi : {});
}

const termBody = document.getElementById('termBody');
const termInput = document.getElementById('term-input');
function attachTerminalListener(inputEl) {
    inputEl.addEventListener('keydown', function handler(e) {
        if (e.key !== 'Enter') return;

        const cmd = inputEl.value.trim().toLowerCase();
        inputEl.value = '';

        const echoEl = document.createElement('div');
        echoEl.className = 'term-line';
        echoEl.textContent = '$ ' + cmd;
        inputEl.closest('.term-input-line').before(echoEl);

        if (cmd === 'clear') {
            const ph = (typeof i18nDict !== 'undefined' && i18nDict[currentLang] && i18nDict[currentLang].term_input_ph) 
                ? i18nDict[currentLang].term_input_ph 
                : 'Enter command...';
            termBody.innerHTML = `
        <div class="term-input-line">
          <span class="term-prompt">$</span>
          <input type="text" id="term-input" placeholder="${ph}" autocomplete="off" spellcheck="false"/>
        </div>`;
            attachTerminalListener(document.getElementById('term-input'));
            return;
        }

        const td = getTermData();
        const fallbackMsg = currentLang === 'en' ? `Command not found: ${cmd}\nType 'help' for available commands.` :
                            currentLang === 'ja' ? `コマンドが見つかりません: ${cmd}\n'help' で利用可能なコマンド一覧を表示します。` :
                            currentLang === 'zh' ? `未找到命令: ${cmd}\n输入 'help' 查看可用命令。` :
                            `Không tìm thấy lệnh: ${cmd}\nGõ 'help' để xem danh sách các lệnh hỗ trợ.`;

        const out = document.createElement('div');
        out.className = 'term-output';
        out.textContent = td[cmd] || fallbackMsg;
        inputEl.closest('.term-input-line').before(out);

        termBody.scrollTop = termBody.scrollHeight;
    });
}

attachTerminalListener(termInput);


// ── AI Chat (Multi-language) ──────────────────────────
function getAIResponse(msg) {
    const kb = (typeof aiKBByLang !== 'undefined' && aiKBByLang[currentLang]) 
        ? aiKBByLang[currentLang] 
        : (typeof aiKBByLang !== 'undefined' ? aiKBByLang.vi : {});
    const m = msg.toLowerCase();
    if (m.includes('skill') || m.includes('kỹ năng') || m.includes('スキル') || m.includes('技能') || m.includes('tech') || m.includes('stack')) return kb.skills;
    if (m.includes('project') || m.includes('dự án') || m.includes('プロジェクト') || m.includes('项目') || m.includes('fujikin') || m.includes('meiko') || m.includes('wms') || m.includes('gunze')) return kb.projects;
    if (m.includes('experience') || m.includes('kinh nghiệm') || m.includes('経歴') || m.includes('履历') || m.includes('sti') || m.includes('công tác')) return kb.experience;
    if (m.includes('available') || m.includes('hợp tác') || m.includes('liên hệ') || m.includes('contact') || m.includes('email') || m.includes('連絡') || m.includes('联系')) return kb.available;
    if (m.includes('scada') || m.includes('3d') || m.includes('three') || m.includes('webgl')) return kb.scada;
    if (m.includes('microservice') || m.includes('grpc') || m.includes('kiến trúc') || m.includes('アーキテクチャ') || m.includes('架构')) return kb.microservices;
    if (m.includes('hello') || m.includes('hi') || m.includes('chào') || m.includes('hey') || m.includes('こんにちは') || m.includes('你好')) return kb.greeting;
    return kb.default;
}

const chatMessages = document.getElementById('chatMessages');
function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function addBotTyping() {
    const div = document.createElement('div');
    div.className = 'msg bot'; div.id = 'typing-indicator';
    div.textContent = '...';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}
function sendChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if (!msg) return;
    addMsg(msg, 'user');
    input.value = '';
    const indicator = addBotTyping();
    setTimeout(() => {
        indicator.remove();
        addMsg(getAIResponse(msg), 'bot');
    }, 800);
}
function sendQuick(msg) {
    document.getElementById('chat-input').value = msg;
    sendChat();
}
function sendQuickByRole(role) {
    const questions = {
        skills: { vi: 'Kỹ năng và công nghệ chuyên sâu?', en: 'What are your core technical skills?', ja: '保有スキルと技術スタックを教えてください', zh: '您的核心技术栈与专业技能有哪些？' },
        projects: { vi: 'Các dự án công nghiệp tiêu biểu?', en: 'Tell me about your key industrial projects', ja: '代表的な産業プロジェクトについて教えてください', zh: '有哪些代表性工业项目？' },
        experience: { vi: 'Kinh nghiệm làm việc?', en: 'Tell me about your work experience', ja: '職務経歴について教えてください', zh: '您的工作履历与研发经验？' },
        contact: { vi: 'Thông tin liên hệ?', en: 'How can I get in touch?', ja: '連絡先を教えてください', zh: '如何联系您？' }
    };
    const q = (questions[role] && questions[role][currentLang]) 
        ? questions[role][currentLang] 
        : (questions[role] ? questions[role].vi : role);
    document.getElementById('chat-input').value = q;
    sendChat();
}

// ── Contact form ──────────────────────────────────────
function submitForm() {
    const dict = (typeof i18nDict !== 'undefined' && i18nDict[currentLang]) 
        ? i18nDict[currentLang] 
        : (typeof i18nDict !== 'undefined' ? i18nDict.vi : {});
    const n = document.getElementById('fname').value.trim();
    const e = document.getElementById('femail').value.trim();
    const m = document.getElementById('fmsg').value.trim();
    if (!n || !e || !m) { showToast(dict.toast_missing || '⚠ Vui lòng nhập đầy đủ thông tin'); return; }
    showToast(dict.toast_success || '✓ Đã gửi tin nhắn thành công!');
    document.getElementById('fname').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fmsg').value = '';
}

// ── i18n Engine ───────────────────────────────────────
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    const langSelect = document.getElementById('lang-select');
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }

    const dict = (typeof i18nDict !== 'undefined' && i18nDict[lang]) 
        ? i18nDict[lang] 
        : (typeof i18nDict !== 'undefined' ? i18nDict.vi : null);
    if (dict) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) el.setAttribute('placeholder', dict[key]);
        });
    }

    if (typeof phrasesByLang !== 'undefined' && phrasesByLang[lang]) {
        phrases = phrasesByLang[lang];
        pi = 0; ci = 0; deleting = false;
    }

    renderProjects(lang);
}

function changeLanguage(lang) {
    applyLanguage(lang);
}

// Apply initial language from localStorage or default
applyLanguage(currentLang);

// ── Nav scroll shrink ─────────────────────────────────
window.addEventListener('scroll', () => {
    document.querySelector('nav').style.height = window.scrollY > 60 ? '52px' : '64px';
});
console.log(`
██████╗  █████╗  ██████╗██╗  ██╗██████╗ ███████╗██╗   ██╗
██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔══██╗██╔════╝██║   ██║
██████╔╝███████║██║     █████╔╝ ██║  ██║█████╗  ██║   ██║
██╔══██╗██╔══██║██║     ██╔═██╗ ██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝██║  ██║╚██████╗██║  ██╗██████╔╝███████╗ ╚████╔╝ 
╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝  ╚═══╝  

Nguyễn Đình Bách (BackDEV) · Full Stack Developer
Smart Factory / MES / OEE / SCADA 3D Solutions
Supported languages: VI, EN, JA, ZH
`);
