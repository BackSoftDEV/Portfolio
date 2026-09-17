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

// ── Starfield ───────────────────────────────────────────
(function () {
    const canvas = document.getElementById('star-canvas');
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    cam.position.z = 800;

    const count = window.innerWidth < 768 ? 800 : 1500;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 3000;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 3000;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 3000;
        const c = Math.random();
        if (c < 0.4) { cols[i * 3] = 0; cols[i * 3 + 1] = 0.94; cols[i * 3 + 2] = 1; }
        else if (c < 0.7) { cols[i * 3] = 0.15; cols[i * 3 + 1] = 0.39; cols[i * 3 + 2] = 0.92; }
        else if (c < 0.85) { cols[i * 3] = 0.96; cols[i * 3 + 1] = 0.62; cols[i * 3 + 2] = 0.04; }
        else { cols[i * 3] = 0.88; cols[i * 3 + 1] = 0.91; cols[i * 3 + 2] = 0.94; }
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const mat = new THREE.PointsMaterial({ size: 1.6, vertexColors: true, transparent: true, opacity: .8, sizeAttenuation: true });
    const stars = new THREE.Points(geom, mat);
    scene.add(stars);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', e => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    let heroVisible = true;
    const heroObs = new IntersectionObserver(entries => {
        heroVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    heroObs.observe(document.getElementById('hero'));

    function animate() {
        requestAnimationFrame(animate);
        if (!heroVisible) return;
        stars.rotation.y += 0.0002;
        stars.rotation.x += 0.00007;
        cam.position.x += (mouseX * 28 - cam.position.x) * 0.03;
        cam.position.y += (-mouseY * 28 - cam.position.y) * 0.03;
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

// ── About SCADA 3D Tech Core (Multi-Module Showcase) ──
(function initAbout3D() {
    const canvas = document.getElementById('about-3d-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 4.3;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    function resize() {
        const card = canvas.parentElement;
        if (card) {
            const rect = card.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                renderer.setSize(rect.width, rect.height);
                camera.aspect = rect.width / rect.height;
                camera.updateProjectionMatrix();
            }
        }
    }
    resize();
    window.addEventListener('resize', resize);

    // Master orientation group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ── Module 0: SCADA 3D Core ─────────────────────────
    const group0 = new THREE.Group();
    masterGroup.add(group0);

    const icoMesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.35, 1),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.55 })
    );
    group0.add(icoMesh);

    const octMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.8, 0),
        new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.2, metalness: 0.85, transparent: true, opacity: 0.85 })
    );
    group0.add(octMesh);

    const octWire = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.8, 0),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.9 })
    );
    octWire.scale.setScalar(1.02);
    group0.add(octWire);

    const ringGeo = new THREE.TorusGeometry(1.8, 0.02, 16, 80);
    const ring1 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.7 }));
    ring1.rotation.x = Math.PI / 3;
    group0.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.6 }));
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 4;
    ring2.scale.setScalar(1.12);
    group0.add(ring2);

    const pCount = 70;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 1.5 + Math.random() * 0.7;
        pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pPos[i * 3 + 2] = r * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.05, color: 0x00f0ff, transparent: true, opacity: 0.85 }));
    group0.add(particles);

    // ── Module 1: Microservices Cluster ─────────────────
    const group1 = new THREE.Group();
    masterGroup.add(group1);

    const hubCube = new THREE.Mesh(
        new THREE.BoxGeometry(0.75, 0.75, 0.75),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, metalness: 0.8, transparent: true, opacity: 0.9 })
    );
    const hubWire = new THREE.Mesh(
        new THREE.BoxGeometry(0.76, 0.76, 0.76),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true })
    );
    group1.add(hubCube);
    group1.add(hubWire);

    const satelliteOffsets = [
        [1.5, 0, 0], [-1.5, 0, 0],
        [0, 1.5, 0], [0, -1.5, 0],
        [0, 0, 1.4], [0, 0, -1.4]
    ];
    const satellites = [];
    const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.75 });

    satelliteOffsets.forEach(pos => {
        const satMesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.35, 0.35),
            new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.3, metalness: 0.7 })
        );
        satMesh.position.set(...pos);
        const satWire = new THREE.Mesh(
            new THREE.BoxGeometry(0.36, 0.36, 0.36),
            new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true })
        );
        satMesh.add(satWire);
        group1.add(satMesh);
        satellites.push(satMesh);

        // Connection link to hub
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(...pos)
        ]);
        group1.add(new THREE.Line(lineGeo, lineMat));
    });

    const clusterRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.9, 0.015, 16, 80),
        new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.4 })
    );
    clusterRing.rotation.x = Math.PI / 2;
    group1.add(clusterRing);

    // ── Module 2: Digital Twin Node (Torus Knot) ─────────
    const group2 = new THREE.Group();
    masterGroup.add(group2);

    const knotMesh = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.9, 0.28, 100, 16),
        new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.2, metalness: 0.85, transparent: true, opacity: 0.88 })
    );
    const knotWire = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.905, 0.285, 100, 16),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.65 })
    );
    group2.add(knotMesh);
    group2.add(knotWire);

    const twinRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.85, 0.02, 16, 80),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6 })
    );
    group2.add(twinRing);

    // ── Module 3: IoT Telemetry Radar ───────────────────
    const group3 = new THREE.Group();
    masterGroup.add(group3);

    const radarGlobe = new THREE.Mesh(
        new THREE.SphereGeometry(1.35, 22, 14),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.45 })
    );
    group3.add(radarGlobe);

    const sweepRing1 = new THREE.Mesh(
        new THREE.TorusGeometry(1.38, 0.025, 16, 80),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.85 })
    );
    group3.add(sweepRing1);

    const sweepRing2 = new THREE.Mesh(
        new THREE.TorusGeometry(1.42, 0.02, 16, 80),
        new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.75 })
    );
    sweepRing2.rotation.x = Math.PI / 2;
    group3.add(sweepRing2);

    // IoT Sensor Beacons
    const beaconGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const beacons = [];
    for (let i = 0; i < 12; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const b = new THREE.Mesh(beaconGeo, beaconMat);
        b.position.set(
            1.35 * Math.sin(phi) * Math.cos(theta),
            1.35 * Math.sin(phi) * Math.sin(theta),
            1.35 * Math.cos(phi)
        );
        group3.add(b);
        beacons.push(b);
    }

    // ── Lights ──────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 30);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x2563eb, 2, 30);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // ── Module State & Controller ───────────────────────
    let currentModuleIndex = 0;
    const modules = [
        { group: group0, key: 'mod_scada', dotColor: '#10b981' },
        { group: group1, key: 'mod_cluster', dotColor: '#3b82f6' },
        { group: group2, key: 'mod_twin', dotColor: '#f59e0b' },
        { group: group3, key: 'mod_iot', dotColor: '#00f0ff' }
    ];

    const targetScales = [1, 0, 0, 0];
    const currentScales = [1, 0, 0, 0];

    window.switch3DModule = function () {
        currentModuleIndex = (currentModuleIndex + 1) % modules.length;
        updateModuleUI();
    };

    window.set3DModule = function (idx) {
        if (typeof idx === 'number' && idx >= 0 && idx < modules.length) {
            currentModuleIndex = idx;
            updateModuleUI();
        }
    };

    function updateModuleUI() {
        const activeMod = modules[currentModuleIndex];
        const badgeTextEl = document.getElementById('about-badge-text');
        const badgeDotEl = document.getElementById('about-badge-dot');
        if (badgeTextEl) {
            badgeTextEl.setAttribute('data-i18n', activeMod.key);
            const dict = (typeof i18nDict !== 'undefined' && i18nDict[currentLang]) ? i18nDict[currentLang] : null;
            if (dict && dict[activeMod.key]) {
                badgeTextEl.textContent = dict[activeMod.key];
            }
        }
        if (badgeDotEl) {
            badgeDotEl.style.backgroundColor = activeMod.dotColor;
        }
        const dots = document.querySelectorAll('#about-3d-dots .cdot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentModuleIndex);
        });
    }
    window.update3DModuleUI = updateModuleUI;

    // Mouse Interaction
    let targetRotX = 0, targetRotY = 0;
    let isHovered = false;
    const cardEl = canvas.parentElement;
    if (cardEl) {
        cardEl.addEventListener('mousemove', (e) => {
            const rect = cardEl.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
            targetRotY = x * 1.1;
            targetRotX = -y * 1.1;
            isHovered = true;
        });
        cardEl.addEventListener('mouseleave', () => {
            isHovered = false;
        });
    }

    let aboutVisible = true;
    const aboutObs = new IntersectionObserver(entries => {
        aboutVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    aboutObs.observe(canvas.parentElement);

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        if (!aboutVisible) return;
        const time = clock.getElapsedTime();

        // 1. Morphing scale transitions
        for (let i = 0; i < modules.length; i++) {
            targetScales[i] = (i === currentModuleIndex) ? 1 : 0;
            currentScales[i] += (targetScales[i] - currentScales[i]) * 0.12;
            const s = Math.max(0.0001, currentScales[i]);
            modules[i].group.scale.setScalar(s);
            modules[i].group.visible = currentScales[i] > 0.01;
        }

        // 2. Animate Module 0 (SCADA Core)
        if (group0.visible) {
            icoMesh.rotation.y += 0.007;
            icoMesh.rotation.x += 0.004;
            octMesh.rotation.y -= 0.01;
            octMesh.rotation.z += 0.007;
            octWire.rotation.copy(octMesh.rotation);
            const scale = 0.8 + Math.sin(time * 2.2) * 0.06;
            octMesh.scale.setScalar(scale);
            octWire.scale.setScalar(scale * 1.02);
            ring1.rotation.z += 0.01;
            ring2.rotation.z -= 0.008;
            particles.rotation.y += 0.003;
        }

        // 3. Animate Module 1 (Cluster)
        if (group1.visible) {
            hubCube.rotation.x += 0.006;
            hubCube.rotation.y += 0.008;
            hubWire.rotation.copy(hubCube.rotation);
            satellites.forEach((sat, idx) => {
                sat.rotation.x -= 0.01;
                sat.rotation.y += 0.01;
                const satScale = 1 + Math.sin(time * 3 + idx) * 0.15;
                sat.scale.setScalar(satScale);
            });
            clusterRing.rotation.z += 0.006;
        }

        // 4. Animate Module 2 (Digital Twin)
        if (group2.visible) {
            knotMesh.rotation.x += 0.008;
            knotMesh.rotation.y += 0.012;
            knotWire.rotation.copy(knotMesh.rotation);
            twinRing.rotation.z -= 0.01;
            twinRing.rotation.x = Math.sin(time * 0.8) * 0.4;
        }

        // 5. Animate Module 3 (IoT Radar)
        if (group3.visible) {
            radarGlobe.rotation.y += 0.004;
            sweepRing1.rotation.z += 0.02;
            sweepRing2.rotation.z -= 0.015;
            beacons.forEach((b, idx) => {
                const beaconScale = 1 + Math.sin(time * 5 + idx * 2) * 0.5;
                b.scale.setScalar(Math.max(0.2, beaconScale));
            });
        }

        // Smooth master orientation to mouse
        if (isHovered) {
            masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.08;
            masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.08;
        } else {
            masterGroup.rotation.x += (Math.sin(time * 0.6) * 0.2 - masterGroup.rotation.x) * 0.04;
            masterGroup.rotation.y += (time * 0.2 - masterGroup.rotation.y) * 0.04;
        }

        renderer.render(scene, camera);
    }
    animate();
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

// ── Tech & Brand Icons (Official SVGs) ──────────────────────
const antdIcons = {
  "react": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4.2\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4.2\" transform=\"rotate(60 12 12)\"/><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"4.2\" transform=\"rotate(120 12 12)\"/><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill=\"currentColor\" stroke=\"none\"/></svg>",
  "tailwind": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C4.337 13.382 2.975 12 0.001 12z\"/></svg>",
  "redux": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M16.757 7.027a6.208 6.208 0 0 0-4.04-1.528 6.223 6.223 0 0 0-4.468 1.93l-1.07-1.071a7.712 7.712 0 0 1 5.538-2.392c1.802 0 3.486.602 4.847 1.673l-.807 1.388zm3.626 2.093l1.389-.808A7.74 7.74 0 0 1 23.444 13.1a7.702 7.702 0 0 1-2.39 5.537l-1.072-1.07a6.222 6.222 0 0 0 1.93-4.467c0-1.554-.572-2.986-1.529-4.04v.06zm-1.01 7.423l1.071 1.07a7.712 7.712 0 0 1-5.538 2.393c-1.8 0-3.483-.6-4.843-1.669l.808-1.388a6.22 6.22 0 0 0 4.035 1.524 6.222 6.222 0 0 0 4.467-1.93zm-7.423 1.01a6.221 6.221 0 0 0-4.468-1.93 6.221 6.221 0 0 0-4.04 1.528l-.807-1.388A7.737 7.737 0 0 1 7.48 14.1a7.714 7.714 0 0 1 5.538 2.392l-1.07 1.071zm-7.424-3.626l-1.388.808A7.74 7.74 0 0 1 .556 10.9a7.702 7.702 0 0 1 2.39-5.538l1.072 1.07a6.222 6.222 0 0 0-1.93 4.468c0 1.554.572 2.986 1.529 4.04v-.06zm1.01-7.423l-1.071-1.07A7.712 7.712 0 0 1 7.444 3.04c1.8 0 3.483.6 4.843 1.67l-.808 1.387a6.22 6.22 0 0 0-4.035-1.524 6.222 6.222 0 0 0-4.467 1.93zM12 9.07a2.93 2.93 0 1 0 0 5.86 2.93 2.93 0 0 0 0-5.86z\"/></svg>",
  "translation": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" t=\"1569683569194\" version=\"1.1\" p-id=\"11645\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" ><path d=\"M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140V188z\" p-id=\"11646\"></path><path d=\"M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4c-1.3-3.2-4.3-5.4-7.7-5.4z m12.4 228h-85.5L384 360.2 426.7 484zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24zM728 680h-88v-80h88v80z m160 0h-88v-80h88v80z\" p-id=\"11647\"></path></svg>",
  "java": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" fill-rule=\"evenodd\"><path d=\"M212.68 692.99s-34.325 19.95 24.343 26.6c71.1 8.05 107.351 7 185.632-7.874 0 0 20.665 12.949 49.385 24.149-175.475 75.074-397.184-4.375-259.36-42.875m-21.366-98.173s-38.352 28.35 20.315 34.475c75.83 7.875 135.897 8.4 239.571-11.55 0 0 14.36 14.525 36.952 22.4-212.427 62.123-448.846 5.075-296.838-45.325m180.73-166.422c43.256 49.699-11.384 94.498-11.384 94.498s109.804-56.7 59.368-127.573c-47.11-66.15-83.185-99.049 112.255-212.273.175 0-306.819 76.65-160.24 245.348M604.26 765.439s25.393 20.825-27.846 37.1c-101.397 30.625-421.7 39.9-510.664 1.225-32.048-13.825 28.02-33.25 46.934-37.275 19.613-4.2 30.997-3.5 30.997-3.5-35.551-25.025-229.94 49.175-98.771 70.35 357.605 58.1 652.165-26.075 559.35-67.9M229.142 493.144S66.1 531.818 171.35 545.818c44.482 5.95 133.095 4.55 215.58-2.275 67.423-5.6 135.196-17.85 135.196-17.85s-23.818 10.15-40.98 21.875C315.653 591.143-3.95 570.843 87.99 526.393c77.93-37.45 141.151-33.25 141.151-33.25M521.6 656.416c168.296-87.324 90.365-171.322 36.077-159.948-13.31 2.8-19.264 5.25-19.264 5.25s4.903-7.7 14.36-11.025c107.351-37.8 190.01 111.299-34.675 170.273 0-.175 2.627-2.45 3.502-4.55M420.028 0s93.166 93.1-88.438 236.246c-145.53 114.8-33.274 180.424 0 255.148-84.936-76.65-147.28-144.024-105.425-206.848C287.634 192.672 457.68 147.873 420.028 0m-174.25 893.188c161.466 10.325 409.443-5.775 415.222-82.075 0 0-11.208 28.875-133.445 51.975-137.824 25.9-307.87 22.925-408.567 6.3 0-.175 20.665 16.975 126.79 23.8\" transform=\"translate(182 64)\"/></svg>",
  "spring": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z\"/></svg>",
  "nodejs": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.354.241-.673.325-.999.325zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.02-.124-.126-.215-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 3.593 0 5.191-1.097 5.191-3.014z\"/></svg>",
  "socketio": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M11.9362.0137a12.1694 12.1694 0 0 0-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 0 1 3.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 0 0-3.6318-.018z\"/></svg>",
  "grpc": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.2L20.5 7.1v9.8L12 21.8 3.5 16.9V7.1L12 2.2z\"/><path d=\"M12 12V21.8 M12 12L20.5 7.1 M12 12L3.5 7.1\"/><path d=\"M12 7.1L20.5 12 12 16.9 3.5 12z\" stroke-dasharray=\"1.5 2\" opacity=\"0.75\"/><circle cx=\"12\" cy=\"2.2\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"20.5\" cy=\"7.1\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"20.5\" cy=\"16.9\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"21.8\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"3.5\" cy=\"16.9\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"3.5\" cy=\"7.1\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/></svg>",
  "mysql": "<svg viewBox=\"0 0 128 128\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0\"/></svg>",
  "keycloak": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"m18.742 1.182-12.493.002C4.155 4.784 2.079 8.393 0 12.002c2.071 3.612 4.162 7.214 6.252 10.816l12.49-.004 3.089-5.404h2.158v-.002H24L23.996 6.59h-2.168zM8.327 4.792h2.081l1.04 1.8-3.12 5.413 3.117 5.403-1.035 1.81H8.327a2047.566 2047.566 0 0 0-4.168-7.204C5.547 9.606 6.937 7.2 8.327 4.792Zm6.241 0 2.086.003c1.393 2.405 2.78 4.813 4.166 7.222l-4.167 7.2h-2.08c-.382-.562-1.038-1.808-1.038-1.808l3.123-5.405-3.124-5.413z\"/></svg>",
  "minio": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M13.2072.006c-.6216-.0478-1.2.1943-1.6211.582a2.15 2.15 0 0 0-.0938 3.0352l3.4082 3.5507a3.042 3.042 0 0 1-.664 4.6875l-.463.2383V7.2853a15.4198 15.4198 0 0 0-8.0174 10.4862v.0176l6.5487-3.3281v7.621L13.7794 24V13.6817l.8965-.4629a4.4432 4.4432 0 0 0 1.2207-7.0292l-3.371-3.5254a.7489.7489 0 0 1 .037-1.0547.7522.7522 0 0 1 1.0567.0371l.4668.4863-.006.0059 4.0704 4.2441a.0566.0566 0 0 0 .082 0 .06.06 0 0 0 0-.0703l-3.1406-5.1425-.1484.1425.1484-.1445C14.4945.3926 13.8287.0538 13.2072.006Zm-.9024 9.8652v2.9941l-4.1523 2.1484a13.9787 13.9787 0 0 1 2.7676-3.9277 14.1784 14.1784 0 0 1 1.3847-1.2148z\"/></svg>",
  "redis": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M1.385 4.382l9.615-3.87 9.615 3.87-9.615 3.871-9.615-3.871zm0 5.618l9.615 3.871 9.615-3.871v2.53l-9.615 3.871-9.615-3.871v-2.53zm0 5.618l9.615 3.871 9.615-3.871v2.53l-9.615 3.871-9.615-3.871v-2.53z\"/></svg>",
  "postgresql": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z\"/></svg>",
  "mssql": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\"><rect x=\"2\" y=\"3\" width=\"3.5\" height=\"3.5\" rx=\"0.5\" fill=\"#f25022\"/><rect x=\"6.2\" y=\"3\" width=\"3.5\" height=\"3.5\" rx=\"0.5\" fill=\"#7fba00\"/><rect x=\"2\" y=\"7.2\" width=\"3.5\" height=\"3.5\" rx=\"0.5\" fill=\"#00a4ef\"/><rect x=\"6.2\" y=\"7.2\" width=\"3.5\" height=\"3.5\" rx=\"0.5\" fill=\"#ffb900\"/><path d=\"M15.5 2C19.1 2 22 3.1 22 4.5V19.5C22 20.9 19.1 22 15.5 22C11.9 22 9 20.9 9 19.5V4.5C9 3.1 11.9 2 15.5 2Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M9 4.5C9 5.9 11.9 7 15.5 7C19.1 7 22 5.9 22 4.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M9 9.5C9 10.9 11.9 12 15.5 12C19.1 12 22 10.9 22 9.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\"/><path d=\"M9 14.5C9 15.9 11.9 17 15.5 17C19.1 17 22 15.9 22 14.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\"/></svg>",
  "threejs": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z\"/></svg>",
  "konva": "<svg viewBox=\"0 0 24 24\" width=\"1em\" height=\"1em\" fill=\"currentColor\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.391 18.541-.239-3.76-2.391-1.608.152 5.129-4.325.152-.173-13.409L10.5 4.98l.087 5.346 2.217-1.608.109-3.781 4.412.283-.348 4.586-2.608 1.608 2.673 1.174.913 5.694-4.564.259z\"/></svg>",
  "line-chart": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" > <path d=\"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z\"/> </svg>",
  "dashboard": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" > <path d=\"M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z\"/> </svg>",
  "docker": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" fill-rule=\"evenodd\"><path d=\"M491.877 286.236h-92.612v-82.784h92.612zm0-286.236h-92.612v85.59h92.612zm109.45 203.452h-92.612v82.784h92.612zm-218.9-101.024h-92.612v84.187h92.612zm109.45 0h-92.612v84.187h92.612zm388.688 140.311c-19.645-14.03-67.354-18.24-102.434-11.225-4.21-33.674-23.855-63.14-57.532-89.8l-19.645-12.627-12.628 19.644c-25.258 39.287-32.274 103.83-5.613 145.924-12.63 7.015-36.484 15.434-67.354 15.434H3.56c-12.629 71.56 8.42 164.165 61.741 227.305C117.221 599.131 195.8 630 296.832 630c220.302 0 384.478-101.024 460.25-286.236 29.468 0 95.419 0 127.692-63.14 1.404-2.807 9.823-18.24 11.226-23.853zm-717.038-39.287H70.915v82.784h92.612zm109.45 0h-92.612v82.784h92.612zm109.45 0h-92.612v82.784h92.612zm-109.45-101.024h-92.612v84.187h92.612z\" transform=\"translate(64 202)\"/></svg>",
  "linux": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" fill-rule=\"evenodd\"><path d=\"M387.86 0c-5.786 0-11.759.299-17.88.784-157.798 12.431-115.95 179.448-118.34 235.108-2.874 40.803-11.198 72.945-39.234 112.776-33.037 39.235-79.402 102.66-101.39 168.772-10.378 31.06-15.305 62.865-10.714 92.916a15.828 15.828 0 0 0-4.143 5.04c-9.706 10.004-16.762 22.436-24.713 31.32-7.429 7.43-18.106 9.968-29.753 14.933C30.01 666.726 17.13 671.69 9.44 687.07c-3.36 7.018-5.077 14.67-4.928 22.435 0 7.43 1.008 14.97 2.053 20.01 2.165 14.895 4.33 27.214 1.456 36.21-9.258 25.385-10.415 42.781-3.92 55.436 6.496 12.469 19.972 17.509 35.054 22.436 30.275 7.466 71.301 5.04 103.592 22.361 34.569 17.434 69.66 25.05 97.657 17.546a66.01 66.01 0 0 0 45.096-35.278c21.913-.112 45.917-10.042 84.367-12.468 26.094-2.165 58.759 9.967 96.239 7.429.933 5.04 2.351 7.428 4.255 12.468l.112.112c14.597 29.043 41.55 42.258 70.331 39.981 28.782-2.24 59.43-20.01 84.255-48.754 23.556-28.558 62.828-40.466 88.773-56.108 12.99-7.429 23.48-17.508 24.227-31.843.859-14.932-7.428-30.312-26.654-51.404v-3.621l-.112-.112c-6.346-7.466-9.332-19.972-12.617-34.568-3.174-14.97-6.795-29.342-18.367-39.048h-.112c-2.203-2.016-4.592-2.501-7.018-5.04a13.327 13.327 0 0 0-7.093-2.389c16.09-47.709 9.855-95.193-6.458-137.9-19.898-52.636-54.69-98.478-81.195-130.022-29.715-37.517-58.833-73.056-58.273-125.767C521.168 148.837 529.008.224 387.86 0m19.748 127.11h.486c7.951 0 14.783 2.315 21.8 7.392 7.131 5.04 12.32 12.394 16.389 19.898 3.92 9.668 5.898 17.134 6.197 27.027 0-.747.224-1.493.224-2.203v3.883a3.21 3.21 0 0 1-.15-.784l-.149-.896a67.456 67.456 0 0 1-5.6 26.355 35.576 35.576 0 0 1-7.95 12.506 26.505 26.505 0 0 0-3.286-1.568c-3.92-1.68-7.429-2.389-10.64-4.965a48.978 48.978 0 0 0-8.175-2.463c1.83-2.203 5.413-4.965 6.795-7.392 1.978-4.778 3.06-9.855 3.285-15.007v-.71a45.17 45.17 0 0 0-2.277-14.931c-1.68-5.04-3.77-7.504-6.832-12.469-3.136-2.464-6.234-4.928-9.967-4.928h-.598c-3.471 0-6.57 1.12-9.78 4.928a29.865 29.865 0 0 0-7.653 12.469 44.05 44.05 0 0 0-3.36 14.932v.71c.075 3.322.299 6.681.747 9.966-7.205-2.5-16.351-5.04-22.66-7.54-.375-2.46-.6-4.942-.672-7.43v-.746a66.15 66.15 0 0 1 5.6-28.707 40.455 40.455 0 0 1 16.052-19.897 36.77 36.77 0 0 1 22.174-7.43m-110.573 2.203h1.344c5.3 0 10.08 1.792 14.895 5.04 5.45 4.816 9.855 10.751 12.842 17.359 3.36 7.429 5.263 14.97 5.711 24.9v.149c.261 5.002.224 7.503-.074 9.93v2.986c-1.12.261-2.091.672-3.099.896-5.674 2.053-10.229 5.04-14.67 7.466.447-3.322.484-6.682.111-9.967v-.56c-.448-4.965-1.456-7.429-3.061-12.431a22.884 22.884 0 0 0-6.197-9.968 9.258 9.258 0 0 0-6.831-2.389h-.784c-2.65.224-4.853 1.53-6.944 4.928a20.607 20.607 0 0 0-4.48 10.08 35.24 35.24 0 0 0-.858 12.356v.522c.448 5.04 1.381 7.504 3.024 12.469 1.68 5.002 3.62 7.466 6.16 10.004.41.336.783.672 1.268.896-2.613 2.128-4.367 2.613-6.57 5.077a11.386 11.386 0 0 1-4.89 2.539 97.844 97.844 0 0 1-10.266-15.007 66.15 66.15 0 0 1-5.786-24.9 65.665 65.665 0 0 1 2.986-24.937 53.383 53.383 0 0 1 10.565-19.971c4.778-4.965 9.706-7.467 15.604-7.467M348.215 193c12.357 0 27.326 2.427 45.357 14.895 10.938 7.467 19.524 10.042 39.31 17.471h.111c9.52 5.077 15.12 9.93 17.844 14.895v-4.89a21.316 21.316 0 0 1 .598 17.545c-4.592 11.61-19.263 24.041-39.72 31.47v.075c-10.005 5.04-18.703 12.43-28.931 17.358-10.304 5.04-21.95 10.9-37.78 9.968a42.52 42.52 0 0 1-16.723-2.502 133.121 133.121 0 0 1-12.02-7.391c-7.28-5.04-13.552-12.394-22.847-17.359v-.186h-.187c-14.932-9.184-22.995-19.114-25.609-26.542-2.575-10.005-.186-17.509 7.205-22.399 8.362-5.04 14.186-10.116 18.031-12.543 3.882-2.762 5.338-3.808 6.57-4.89h.075v-.112c6.309-7.541 16.276-17.508 31.32-22.436 5.19-1.344 10.975-2.427 17.396-2.427m104.489 80c13.402 52.898 44.685 129.724 64.806 166.98 10.676 19.935 31.918 61.932 41.138 112.888 5.824-.187 12.282.672 19.15 2.39 24.116-62.38-20.382-129.426-40.652-148.054-8.25-7.504-8.66-12.506-4.592-12.506 21.988 19.935 50.956 58.684 61.446 102.92 4.816 19.973 5.936 41.214.784 62.343 2.501 1.045 5.04 2.277 7.653 2.501 38.525 19.935 52.748 35.016 45.917 57.377v-1.605c-2.277-.112-4.48 0-6.757 0h-.56c5.637-17.433-6.794-30.798-39.757-45.693-34.158-14.932-61.446-12.543-66.113 17.359-.261 1.605-.448 2.464-.634 5.04-2.539.858-5.19 1.978-7.802 2.389-16.053 10.004-24.713 24.974-29.604 44.311-4.853 19.898-6.346 43.155-7.652 69.771v.112c-.784 12.469-6.384 31.283-11.909 50.434-55.996 40.018-133.644 57.415-199.682 12.468a98.74 98.74 0 0 0-15.007-19.897 54.13 54.13 0 0 0-10.265-12.468c6.794 0 12.617-1.083 17.358-2.501a22.958 22.958 0 0 0 11.722-12.469c4.032-9.967 0-26.02-12.879-43.415-12.879-17.434-34.755-37.144-66.747-56.78-23.518-14.895-36.808-32.478-42.93-52.114-6.16-19.934-5.339-40.504-.56-61.409 9.146-39.944 32.59-78.767 47.559-103.144 3.994-2.427 1.381 5.04-15.231 36.36-14.783 28.035-42.594 93.214-4.554 143.872a303.274 303.274 0 0 1 24.153-107.363c21.054-47.709 65.067-130.807 68.539-196.658 1.791 1.344 8.1 5.04 10.788 7.54 8.138 4.966 14.186 12.432 22.025 17.36 7.877 7.503 17.807 12.505 32.702 12.505 1.456.112 2.8.224 4.144.224 15.343 0 27.214-5.002 37.181-10.004 10.826-5.002 19.45-12.469 27.625-14.932h.186c17.434-5.04 31.209-15.007 39.01-26.132m81.605 334.408c1.38 22.436 12.804 46.477 32.925 51.404 21.95 5.003 53.532-12.43 66.86-28.558l7.876-.336c11.76-.298 21.54.374 31.62 9.968l.111.112c7.765 7.429 11.386 19.822 14.597 32.701 3.173 14.97 5.749 29.118 15.268 39.795 18.143 19.673 24.078 33.821 23.742 42.557l.112-.224v.672l-.112-.448c-.56 9.78-6.906 14.783-18.59 22.212-23.519 14.97-65.18 26.579-91.722 58.609-23.07 27.512-51.18 42.52-76.005 44.46-24.788 1.98-46.178-7.466-58.759-33.522l-.186-.112c-7.84-14.97-4.48-38.264 2.09-63.09 6.57-24.936 15.978-50.209 17.284-70.853 1.382-26.654 2.837-49.836 7.28-67.718 4.48-17.358 11.498-29.752 23.929-36.733l1.68-.821zm-403.731 1.83h.373c1.978 0 3.92.186 5.86.522 14.037 2.053 26.356 12.431 38.19 28.073l33.971 62.118.112.112c9.071 19.897 28.147 39.72 44.386 61.147 16.202 22.324 28.745 42.221 27.214 58.61v.224c-2.128 27.774-17.881 42.855-41.997 48.305-24.078 5.04-56.742.075-89.407-17.321-36.136-20.01-79.066-17.508-106.653-22.473-13.775-2.464-22.81-7.504-26.99-14.97-4.144-7.428-4.219-22.435 4.591-45.916v-.112l.075-.112c4.368-12.469 1.12-28.11-1.008-41.773-2.053-14.97-3.099-26.468 1.605-35.091 5.973-12.469 14.783-14.895 25.721-19.897 11.013-5.04 23.929-7.541 34.195-17.509h.075v-.111c9.556-10.005 16.612-22.436 24.936-31.284 7.093-7.503 14.186-12.543 24.75-12.543m267.25-338.74c-16.24 7.504-35.278 19.973-55.548 19.973-20.233 0-36.211-9.967-47.746-17.396-5.786-5.003-10.453-10.005-13.962-12.506-6.122-5.002-5.375-12.468-2.762-12.468 4.069.597 4.815 5.04 7.429 7.503 3.583 2.464 8.026 7.429 13.476 12.431 10.863 7.466 25.385 17.434 43.527 17.434 18.106 0 39.31-9.968 52.189-17.397 7.28-5.04 16.612-12.468 24.19-17.433 5.824-5.114 5.562-10.005 10.415-10.005 4.816.598 1.27 5.003-5.487 12.432a302.304 302.304 0 0 1-25.759 17.47v-.037zm-40.392-59.13v-.822c-.224-.71.485-1.568 1.083-1.867 2.762-1.605 6.72-1.008 9.706.15 2.351 0 5.972 2.5 5.6 5.04-.225 1.829-3.174 2.463-5.04 2.463-2.054 0-3.435-1.605-5.264-2.538-1.941-.672-5.45-.299-6.085-2.427m-20.57 0c-.746 2.164-4.218 1.828-6.196 2.463-1.755.933-3.21 2.538-5.189 2.538-1.904 0-4.89-.709-5.114-2.538-.336-2.464 3.285-4.965 5.6-4.965 3.023-1.157 6.868-1.755 9.668-.187.71.336 1.344 1.12 1.12 1.867v.784h.112z\" transform=\"translate(142.938 64)\"/></svg>",
  "branches": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" > <path d=\"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0 0 34.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm96 600a48.01 48.01 0 0 1-96 0 48.01 48.01 0 0 1 96 0zm408-491a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z\"/> </svg>",
  "gemini": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" > <g transform=\"translate(64 64) scale(37.333333)\"> <path d=\"M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81\"/> </g> </svg>",
  "claude": "<svg viewBox=\"64 64 896 896\" width=\"1em\" height=\"1em\" fill=\"currentColor\" focusable=\"false\" > <g transform=\"translate(64 64) scale(37.333333)\"> <path d=\"m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z\"/> </g> </svg>"
};

// ── Skills ────────────────────────────────────────────
const skills = [
    { icon: antdIcons['react'], name: 'React 18/19 & TS', level: .95, cat: 'frontend' },
    { icon: antdIcons['tailwind'], name: 'Ant Design & Tailwind', level: .92, cat: 'frontend' },
    { icon: antdIcons['redux'], name: 'Zustand & Redux Toolkit', level: .90, cat: 'frontend' },
    { icon: antdIcons['translation'], name: 'i18next (VI/EN/JP/CN)', level: .99, cat: 'frontend' },
    { icon: antdIcons['java'], name: 'Java Core & JVM', level: .88, cat: 'backend' },
    { icon: antdIcons['spring'], name: 'Spring Boot & Security', level: .88, cat: 'backend' },
    { icon: antdIcons['nodejs'], name: 'Node.js & Microservices', level: .90, cat: 'backend' },
    { icon: antdIcons['socketio'], name: 'Real-time & Socket.IO', level: .92, cat: 'backend' },
    { icon: antdIcons['grpc'], name: 'gRPC & Protocol Buffers', level: .85, cat: 'backend' },
    { icon: antdIcons['mysql'], name: 'MySQL', level: .88, cat: 'database' },
    { icon: antdIcons['redis'], name: 'Redis (Cache & Pub/Sub)', level: .90, cat: 'database' },
    { icon: antdIcons['postgresql'], name: 'PostgreSQL', level: .90, cat: 'database' },
    { icon: antdIcons['mssql'], name: 'SQL Server (MSSQL)', level: .92, cat: 'database' },
    { icon: antdIcons['threejs'], name: 'Three.js / WebGL 3D', level: .90, cat: 'industrial', amber: true },
    { icon: antdIcons['konva'], name: 'Highcharts 3D & Konva', level: .90, cat: 'industrial', amber: true },
    { icon: antdIcons['dashboard'], name: 'MES / OEE / SCADA', level: .95, cat: 'industrial', amber: true },
    { icon: antdIcons['docker'], name: 'Docker / Nginx / PM2', level: .88, cat: 'devops' },
    { icon: antdIcons['keycloak'], name: 'Keycloak (IAM / SSO / RBAC)', level: .85, cat: 'devops' },
    { icon: antdIcons['minio'], name: 'MinIO (S3 Object Storage)', level: .88, cat: 'devops' },
    { icon: antdIcons['linux'], name: 'Linux & Shell Script', level: .70, cat: 'devops' },
    { icon: antdIcons['branches'], name: 'Monorepo & Git', level: .88, cat: 'devops' },
    { icon: antdIcons['gemini'], name: 'Gemini', level: .99, cat: 'ai', purple: true },
    { icon: antdIcons['claude'], name: 'Claude', level: .97, cat: 'ai', purple: true }
];

const sg = document.getElementById('skillsGrid');
function renderSkills(cat) {
    if (!sg) return;
    sg.innerHTML = '';
    skills.forEach(s => {
        const hidden = (cat !== 'all' && s.cat !== cat);
        const chip = document.createElement('div');
        chip.className = 'skill-chip' + (s.amber ? ' amber-accent' : '') + (s.purple ? ' purple-accent' : '');
        if (hidden) chip.setAttribute('data-hidden', 'true');
        const pct = Math.round(s.level * 100);
        chip.innerHTML = `
            <div class="skill-icon">${s.icon}</div>
            <div class="skill-name">${s.name}</div>
            <div class="skill-level-row">
                <div class="skill-level"><div class="skill-fill" style="width:${pct}%"></div></div>
                <span class="skill-pct">${pct}%</span>
            </div>
        `;
        sg.appendChild(chip);
    });
    requestAnimationFrame(() => {
        document.querySelectorAll('.skill-chip:not([data-hidden="true"])').forEach(el => el.classList.add('visible'));
    });
}

// ── Skill Globe: removed (element no longer in HTML) ──

// ── Projects — Bento Grid (Multi-language) ────────────
const PROJ_CATEGORY_COLORS = ['', 'amber', '', '', '', ''];

function renderProjects(lang) {
    const pg = document.getElementById('projectsGrid');
    if (!pg) return;
    const list = (typeof projectsByLang !== 'undefined' && projectsByLang[lang]) ? projectsByLang[lang] : (typeof projectsByLang !== 'undefined' ? projectsByLang.vi : []);
    pg.innerHTML = '';
    list.forEach((p, idx) => {
        const catClass = PROJ_CATEGORY_COLORS[idx] === 'amber' ? 'amber' : '';
        pg.innerHTML += `<div class="proj-card" onmousemove="tilt(event,this)" onmouseleave="resetTilt(this)">
        <div class="proj-card-top">
          <div class="proj-icon-wrap">
            <div class="proj-icon">${p.icon}</div>
            <span class="proj-category ${catClass}">${p.stars}</span>
          </div>
          <a class="proj-link-btn" href="${p.url}" target="_blank">⎋ GitHub</a>
        </div>
        <div class="proj-title">${p.name}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-meta">
          <div class="proj-lang"><div class="lang-dot"></div>${p.lang}</div>
          <div class="proj-badge">${p.stars}</div>
        </div>
      </div>`;
    });
}
renderProjects(currentLang);

// Tilt effect
function tilt(e, el) {
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -16;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
}
function resetTilt(el) { el.style.transform = ''; }

// ── Scroll observer ───────────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        }
    });
}, { threshold: .12 });

document.querySelectorAll('.reveal, .story-block').forEach(el => observer.observe(el));

// Init skills after observer is declared
renderSkills('all');
document.querySelectorAll('.skill-cat').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.skill-cat').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSkills(btn.dataset.cat);
    });
});

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
    if (typeof window.update3DModuleUI === 'function') {
        window.update3DModuleUI();
    }
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
