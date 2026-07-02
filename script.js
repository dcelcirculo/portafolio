/* ===== Traducciones ===== */
const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.certs": "Certificaciones",
    "nav.projects": "Proyectos",
    "nav.contact": "Contáctame",
    "hero.eyebrow": "// hola, soy",
    "hero.role": "Backend Developer en formación",
    "hero.lede": "Estudiante de Ingeniería de Software, quinto semestre. Construyo aplicaciones backend con Java y Spring Boot, y complemento mi formación con Python, Flutter e Inteligencia Artificial en DevSenior Code.",
    "hero.btnProjects": "Ver proyectos",
    "hero.btnContact": "Contáctame",
    "about.eyebrow": "// 01 · sobre mí",
    "about.title": "De la teoría al backend en producción",
    "about.p1": 'Soy estudiante de Ingeniería de Software, actualmente en quinto semestre, y complemento mi formación universitaria en <strong>DevSenior Code</strong>, donde curso en paralelo:',
    "about.li1": "Java AI Backend Developer",
    "about.li2": "Python AI Backend Developer",
    "about.li3": "Máster en IA & Data Science",
    "about.li4": "Desarrollo móvil con Flutter",
    "about.p2": "Me enfoco en construir aplicaciones backend sólidas, con arquitectura en capas y buenas prácticas, y estoy ampliando ese conocimiento hacia inteligencia artificial y desarrollo móvil.",
    "skills.eyebrow": "// 02 · habilidades",
    "skills.title": "Con qué construyo",
    "skills.g1": "Backend",
    "skills.g2": "Otros lenguajes & plataformas",
    "skills.g3": "IA & datos",
    "skills.g4": "Herramientas",
    "skills.ml": "Machine Learning (fundamentos)",
    "certs.eyebrow": "// 03 · certificaciones",
    "certs.title": "Cartera de insignias",
    "certs.subtitle": "Certificaciones emitidas por Certiprof, verificables en Credly.",
    "projects.eyebrow": "// 04 · proyectos",
    "projects.title": "Proyectos en desarrollo",
    "projects.inProgress": "En desarrollo",
    "projects.layeredArch": "Arquitectura en capas",
    "projects.personal": "Proyecto personal",
    "projects.viewRepo": "Ver repositorio ↗",
    "projects.p1.desc": "Sistema de gestión hotelera construido en Java con Spring Boot, siguiendo arquitectura en capas: entidades, repositorios, servicios y controladores. Incluye manejo de habitaciones, huéspedes, reservas y servicios adicionales.",
    "projects.p2.desc": "Aplicación de gestión veterinaria desarrollada con Spring Boot y PostgreSQL. Administra información de veterinarios, pacientes y citas, aplicando restricciones y buenas prácticas de modelado con JPA.",
    "projects.p3.desc": "Proyecto personal de inventario de despensa. Cada vez que se registra el uso de un producto, el stock se descuenta automáticamente. Contempla, a futuro, reconocimiento de productos por foto para crear registros de forma automática.",
    "contact.eyebrow": "// 05 · contacto",
    "contact.title": "Hablemos",
    "contact.subtitle": "Abierta a prácticas, primeras oportunidades y proyectos donde pueda seguir creciendo como desarrolladora backend.",
    "footer.text": "Carolina Gil Rojas — construido con HTML, CSS y JS.",
    "meta.title": "Carolina Gil Rojas — Backend Developer en formación",
    "meta.desc": "Portafolio de Carolina Gil Rojas, estudiante de Ingeniería de Software especializada en desarrollo backend con Java, Spring Boot, Python y Flutter."
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.certs": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact me",
    "hero.eyebrow": "// hi, I'm",
    "hero.role": "Backend Developer in training",
    "hero.lede": "Software Engineering student, fifth semester. I build backend applications with Java and Spring Boot, and I'm expanding my skills in Python, Flutter and Artificial Intelligence at DevSenior Code.",
    "hero.btnProjects": "View projects",
    "hero.btnContact": "Contact me",
    "about.eyebrow": "// 01 · about",
    "about.title": "From theory to backend in production",
    "about.p1": 'I\'m a Software Engineering student, currently in my fifth semester, and I complement my university studies at <strong>DevSenior Code</strong>, where I\'m taking:',
    "about.li1": "Java AI Backend Developer",
    "about.li2": "Python AI Backend Developer",
    "about.li3": "Master's in AI & Data Science",
    "about.li4": "Mobile development with Flutter",
    "about.p2": "I focus on building solid backend applications with layered architecture and good practices, and I'm expanding that knowledge toward artificial intelligence and mobile development.",
    "skills.eyebrow": "// 02 · skills",
    "skills.title": "What I build with",
    "skills.g1": "Backend",
    "skills.g2": "Other languages & platforms",
    "skills.g3": "AI & data",
    "skills.g4": "Tools",
    "skills.ml": "Machine Learning (fundamentals)",
    "certs.eyebrow": "// 03 · certifications",
    "certs.title": "Badge portfolio",
    "certs.subtitle": "Certifications issued by Certiprof, verifiable on Credly.",
    "projects.eyebrow": "// 04 · projects",
    "projects.title": "Projects in progress",
    "projects.inProgress": "In progress",
    "projects.layeredArch": "Layered architecture",
    "projects.personal": "Personal project",
    "projects.viewRepo": "View repository ↗",
    "projects.p1.desc": "Hotel management system built in Java with Spring Boot, following a layered architecture: entities, repositories, services and controllers. Handles rooms, guests, reservations and additional services.",
    "projects.p2.desc": "Veterinary management application built with Spring Boot and PostgreSQL. Manages vets, patients and appointments, applying constraints and good JPA modeling practices.",
    "projects.p3.desc": "Personal pantry inventory project. Every time a product's use is logged, stock is decremented automatically. Future plans include recognizing products from a photo to create entries automatically.",
    "contact.eyebrow": "// 05 · contact",
    "contact.title": "Let's talk",
    "contact.subtitle": "Open to internships, first opportunities and projects where I can keep growing as a backend developer.",
    "footer.text": "Carolina Gil Rojas — built with HTML, CSS and JS.",
    "meta.title": "Carolina Gil Rojas — Backend Developer in training",
    "meta.desc": "Portfolio of Carolina Gil Rojas, Software Engineering student specialized in backend development with Java, Spring Boot, Python and Flutter."
  }
};

/* ===== Datos de certificaciones ===== */
const badges = [
  {
    title: "Especialista en fundamentos de IA",
    titleEn: "AI Fundamentals Specialist",
    issuer: "Certiprof",
    exp: "Vence 1 jul 2029",
    expEn: "Expires Jul 1, 2029",
    verify: "https://www.credly.com/badges/03bd6e26-4c6e-49da-a0ce-66813986c289/public_url"
  },
  {
    title: "Python Junior Developer",
    titleEn: "Python Junior Developer",
    issuer: "Certiprof",
    exp: "Vence 17 jun 2029",
    expEn: "Expires Jun 17, 2029",
    verify: "https://www.credly.com/badges/825ddf95-21c2-4a5f-bdfb-b3937119dd67/public_url"
  },
  {
    title: "Java Backend Developer",
    titleEn: "Java Backend Developer",
    issuer: "Certiprof",
    exp: "Vence 20 mar 2029",
    expEn: "Expires Mar 20, 2029",
    verify: "https://www.credly.com/badges/3f3d11fd-27bd-4c50-a9c3-533f1a947d6f/public_url"
  },
  {
    title: "Flutter Junior Developer",
    titleEn: "Flutter Junior Developer",
    issuer: "Certiprof",
    exp: "Vence 10 mar 2029",
    expEn: "Expires Mar 10, 2029",
    verify: "https://www.credly.com/badges/20aace96-1fd3-4f92-8829-dc312c05a34a/public_url"
  },
  {
    title: "Java Junior Developer",
    titleEn: "Java Junior Developer",
    issuer: "Certiprof",
    exp: "Vence 21 oct 2028",
    expEn: "Expires Oct 21, 2028",
    verify: "https://www.credly.com/badges/5c1dec64-37bc-4ea9-9399-3582ce59d169/public_url"
  }
];

const badgeIcon = `<svg class="badge-card__icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 2 44 10V22C44 33.6 36.3 42.4 24 46 11.7 42.4 4 33.6 4 22V10L24 2Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M16 24l5.5 5.5L33 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function renderBadges(lang){
  const grid = document.getElementById("badges-grid");
  if(!grid) return;
  const verifyLabel = lang === "en" ? "Verify badge ↗" : "Verificar insignia ↗";
  grid.innerHTML = badges.map(b => `
    <div class="badge-card reveal is-visible">
      ${badgeIcon}
      <p class="badge-card__title">${lang === "en" ? b.titleEn : b.title}</p>
      <p class="badge-card__issuer">${b.issuer}</p>
      <p class="badge-card__exp">${lang === "en" ? b.expEn : b.exp}</p>
      ${b.verify ? `<a class="badge-card__verify" href="${b.verify}" target="_blank" rel="noopener">${verifyLabel}</a>` : ""}
    </div>
  `).join("");
}

/* ===== Animación de terminal ===== */
function getTerminalLines(lang){
  return lang === "en" ? [
    { prompt: "$ whoami", output: "Carolina Gil Rojas" },
    { prompt: "$ stack --list", output: "Java · Spring Boot · Python · Flutter" },
    { prompt: "$ status", output: "Backend Developer in training" }
  ] : [
    { prompt: "$ whoami", output: "Carolina Gil Rojas" },
    { prompt: "$ stack --list", output: "Java · Spring Boot · Python · Flutter" },
    { prompt: "$ status", output: "Backend Developer en formación" }
  ];
}

function typeTerminal(lang){
  const el = document.getElementById("terminal-body");
  if(!el) return;
  const terminalLines = getTerminalLines(lang);
  let lineIndex = 0, charIndex = 0, phase = "prompt", buffer = "";

  function step(){
    const line = terminalLines[lineIndex];
    const target = phase === "prompt" ? line.prompt : line.output;

    if(charIndex <= target.length){
      let html = buffer;
      const partial = target.slice(0, charIndex);
      if(phase === "prompt"){
        html += `<span class="prompt">${partial}</span><span class="cursor"></span>`;
      } else {
        html += `<span class="prompt">${line.prompt}</span>\n${partial}<span class="cursor"></span>`;
      }
      el.innerHTML = html;
      charIndex++;
      setTimeout(step, phase === "prompt" ? 45 : 22);
      return;
    }

    if(phase === "prompt"){
      buffer += `<span class="prompt">${line.prompt}</span>\n`;
      phase = "output";
      charIndex = 0;
      setTimeout(step, 250);
    } else {
      buffer += `${line.output}\n\n`;
      lineIndex++;
      phase = "prompt";
      charIndex = 0;
      if(lineIndex < terminalLines.length){
        setTimeout(step, 350);
      } else {
        el.innerHTML = buffer + `<span class="cursor"></span>`;
      }
    }
  }
  step();
}

/* ===== Reveal on scroll ===== */
function setupReveal(){
  const targets = document.querySelectorAll(".section, .project, .contact__card");
  targets.forEach(t => t.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => observer.observe(t));
}

/* ===== Menú móvil ===== */
function setupMenu(){
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav__links");
  if(!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }));
}

/* ===== Idioma ===== */
function applyLanguage(lang){
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  const titleEl = document.getElementById("page-title");
  const descEl = document.getElementById("page-desc");
  if(titleEl) titleEl.textContent = dict["meta.title"];
  if(descEl) descEl.setAttribute("content", dict["meta.desc"]);

  const langLabel = document.getElementById("lang-label");
  if(langLabel) langLabel.textContent = lang === "en" ? "ES" : "EN";

  renderBadges(lang);
  typeTerminal(lang);

  localStorage.setItem("portfolio-lang", lang);
}

function setupLangToggle(){
  const btn = document.getElementById("lang-toggle");
  if(!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    applyLanguage(current === "en" ? "es" : "en");
  });
}

/* ===== Tema ===== */
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}

function setupThemeToggle(){
  const btn = document.getElementById("theme-toggle");
  if(!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("portfolio-theme")
    || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const savedLang = localStorage.getItem("portfolio-lang")
    || (navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es");

  applyTheme(savedTheme);
  setupReveal();
  setupMenu();
  setupThemeToggle();
  setupLangToggle();
  applyLanguage(savedLang);
});
