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
    "hero.lede": "Estudiante de Ingeniería de Software, quinto semestre. Construyo aplicaciones backend con Python (FastAPI) y Java (Spring Boot), con frontends en React y despliegue en Docker. Hoy desarrollo software real para clientes y para mi propio negocio.",
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
    "about.p3": "Antes de programar trabajé cerca de 20 años en contabilidad, administración y comercio exterior en empresas familiares en Colombia. Por eso construyo software pensando en cómo lo usa de verdad un negocio: inventarios, ventas, facturación y operación diaria.",
    "skills.eyebrow": "// 02 · habilidades",
    "skills.title": "Con qué construyo",
    "skills.g1": "Backend",
    "skills.g2": "Otros lenguajes & plataformas",
    "skills.g3": "IA & datos",
    "skills.g4": "DevOps & herramientas",
    "skills.g5": "Bases de datos",
    "skills.g6": "Frontend & móvil",
    "skills.g7": "Integraciones",
    "skills.ml": "Machine Learning (fundamentos)",
    "skills.jwt": "Autenticación JWT",
    "skills.pdf": "Generación de PDF",
    "certs.eyebrow": "// 03 · certificaciones",
    "certs.title": "Cartera de insignias",
    "certs.subtitle": "Certificaciones emitidas por Certiprof, verificables en Credly.",
    "projects.eyebrow": "// 04 · proyectos",
    "projects.title": "Proyectos",
    "projects.subtitle": "Software real para clientes y para mi negocio, más proyectos académicos. El código de los proyectos reales es privado porque maneja datos de clientes.",
    "projects.inProgress": "En desarrollo",
    "projects.client": "Proyecto para cliente",
    "projects.inUse": "En uso real",
    "projects.academic": "Académico",
    "projects.private": "🔒 Código privado",
    "projects.p4.title": "Sistema de Inventario y Ventas · Esmeralda Makeup",
    "projects.p4.desc": "Producto web instalable que licencio a pequeñas empresas: cada cliente lo tiene en su propio servidor, con su dominio y su base de datos. Primer cliente: Esmeralda Makeup, que compra en Estados Unidos y vende en Guatemala.",
    "projects.p4.f1": "Un solo código para todos los clientes; monedas, impuestos, logo y numeración se configuran desde la interfaz.",
    "projects.p4.f2": "Módulos adicionales que se activan con una licencia firmada digitalmente.",
    "projects.p4.f3": "Ventas en USD y GTQ, costo promedio y escaneo de códigos de barras con la cámara del celular.",
    "projects.p4.f4": "Pantallas de vendedoras pensadas primero para celular; despliegue con HTTPS automático.",
    "projects.p5.title": "Sistema Contable Local",
    "projects.p5.desc": "Sistema de contabilidad y facturación para freelancers y pequeños negocios en Estados Unidos. Funciona sin internet, en la red local, y se usa desde la computadora o el celular.",
    "projects.p5.f1": "Captura de recibos con OCR y revisión humana antes de guardar cada transacción.",
    "projects.p5.f2": "Facturas en PDF; al marcar una factura como pagada se crea el ingreso automáticamente.",
    "projects.p5.f3": "Corte de caja, reportes para impuestos (JSON y CSV) e importación de extractos bancarios.",
    "projects.p5.f4": "Refactor que unificó tres fuentes de datos en una sola arquitectura basada en transacciones.",
    "projects.p6.desc": "Plataforma que automatiza mi trabajo como intérprete. Empezó como un extractor de citas de los portales de las agencias y creció a un asistente de agenda y kilometraje.",
    "projects.p6.f1": "Extracción automática de citas de varias plataformas, con paginación y exportación a CSV, Google Sheets y webhooks.",
    "projects.p6.f2": "Agenda automática que prioriza las citas según el ingreso.",
    "projects.p6.f3": "Cálculo de millaje encadenado entre citas consecutivas.",
    "projects.p6.f4": "Notificaciones por correo con plantillas HTML y acceso remoto seguro por Tailscale.",
    "projects.layeredArch": "Arquitectura en capas",
    "projects.personal": "Proyecto personal",
    "projects.viewRepo": "Ver repositorio ↗",
    "projects.p1.desc": "Sistema de gestión hotelera construido en Java con Spring Boot, siguiendo arquitectura en capas: entidades, repositorios, servicios y controladores. Incluye manejo de habitaciones, huéspedes, reservas y servicios adicionales.",
    "projects.p2.desc": "Aplicación de gestión veterinaria desarrollada con Spring Boot y PostgreSQL. Administra información de veterinarios, pacientes y citas, aplicando restricciones y buenas prácticas de modelado con JPA.",
    "projects.p3.desc": "App de inventario de despensa y lista de mercado, organizada por pasillos de supermercado.",
    "projects.p3.f1": "Escaneo de códigos de barras con la cámara y datos de Open Food Facts.",
    "projects.p3.f2": "Lectura de recibos con OpenAI Vision, después de que Tesseract no funcionó con recibos térmicos.",
    "projects.p3.f3": "Historial de precios por tienda y alertas de productos por vencer.",
    "projects.p3.f4": "Migración completa de archivos Markdown a una capa SQL unificada.",
    "contact.eyebrow": "// 05 · contacto",
    "contact.title": "Hablemos",
    "contact.subtitle": "Abierta a prácticas, primeras oportunidades y proyectos donde pueda seguir creciendo como desarrolladora backend.",
    "footer.text": "Carolina Gil Rojas — construido con HTML, CSS y JS.",
    "meta.title": "Carolina Gil Rojas — Backend Developer en formación",
    "meta.desc": "Portafolio de Carolina Gil Rojas, desarrolladora backend con Python (FastAPI), Java (Spring Boot), React y Docker."
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.certs": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact me",
    "hero.eyebrow": "// hi, I'm",
    "hero.role": "Backend Developer in training",
    "hero.lede": "Software Engineering student, fifth semester. I build backend applications with Python (FastAPI) and Java (Spring Boot), with React frontends and Docker deployments. Today I ship real software for clients and for my own business.",
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
    "about.p3": "Before programming, I spent about 20 years in accounting, administration and import/export at family businesses in Colombia. That's why I build software around how a business actually runs: inventory, sales, invoicing and day-to-day operations.",
    "skills.eyebrow": "// 02 · skills",
    "skills.title": "What I build with",
    "skills.g1": "Backend",
    "skills.g2": "Other languages & platforms",
    "skills.g3": "AI & data",
    "skills.g4": "DevOps & tools",
    "skills.g5": "Databases",
    "skills.g6": "Frontend & mobile",
    "skills.g7": "Integrations",
    "skills.ml": "Machine Learning (fundamentals)",
    "skills.jwt": "JWT authentication",
    "skills.pdf": "PDF generation",
    "certs.eyebrow": "// 03 · certifications",
    "certs.title": "Badge portfolio",
    "certs.subtitle": "Certifications issued by Certiprof, verifiable on Credly.",
    "projects.eyebrow": "// 04 · projects",
    "projects.title": "Projects",
    "projects.subtitle": "Real software for clients and for my business, plus academic projects. The code for real projects is private because it handles client data.",
    "projects.inProgress": "In progress",
    "projects.client": "Client project",
    "projects.inUse": "In real use",
    "projects.academic": "Academic",
    "projects.private": "🔒 Private code",
    "projects.p4.title": "Inventory & Sales System · Esmeralda Makeup",
    "projects.p4.desc": "Installable web product I license to small businesses: each client runs it on their own server, with their own domain and database. First client: Esmeralda Makeup, which buys in the United States and sells in Guatemala.",
    "projects.p4.f1": "One codebase for every client; currencies, taxes, logo and numbering are configured from the UI.",
    "projects.p4.f2": "Add-on modules enabled through a digitally signed license.",
    "projects.p4.f3": "Sales in USD and GTQ, weighted average cost and barcode scanning with the phone camera.",
    "projects.p4.f4": "Mobile-first screens for sales staff; deployment with automatic HTTPS.",
    "projects.p5.title": "Local Accounting System",
    "projects.p5.desc": "Accounting and invoicing system for freelancers and small businesses in the United States. Works offline on the local network, from a computer or a phone.",
    "projects.p5.f1": "Receipt capture with OCR and human review before each transaction is saved.",
    "projects.p5.f2": "PDF invoices; marking an invoice as paid creates the income entry automatically.",
    "projects.p5.f3": "Cash reconciliation, tax reports (JSON and CSV) and bank statement imports.",
    "projects.p5.f4": "Refactor that unified three data sources into a single transaction-based architecture.",
    "projects.p6.desc": "Platform that automates my work as an interpreter. It started as an appointment extractor for agency portals and grew into a scheduling and mileage assistant.",
    "projects.p6.f1": "Automatic appointment extraction from several platforms, with pagination and export to CSV, Google Sheets and webhooks.",
    "projects.p6.f2": "Auto-scheduler that prioritizes appointments by income.",
    "projects.p6.f3": "Chained mileage calculation between consecutive appointments.",
    "projects.p6.f4": "Email notifications with HTML templates and secure remote access through Tailscale.",
    "projects.layeredArch": "Layered architecture",
    "projects.personal": "Personal project",
    "projects.viewRepo": "View repository ↗",
    "projects.p1.desc": "Hotel management system built in Java with Spring Boot, following a layered architecture: entities, repositories, services and controllers. Handles rooms, guests, reservations and additional services.",
    "projects.p2.desc": "Veterinary management application built with Spring Boot and PostgreSQL. Manages vets, patients and appointments, applying constraints and good JPA modeling practices.",
    "projects.p3.desc": "Pantry inventory and shopping list app, organized by supermarket aisles.",
    "projects.p3.f1": "Barcode scanning with the camera and product data from Open Food Facts.",
    "projects.p3.f2": "Receipt reading with OpenAI Vision, after Tesseract failed on thermal receipts.",
    "projects.p3.f3": "Price history per store and alerts for products about to expire.",
    "projects.p3.f4": "Full migration from Markdown files to a unified SQL layer.",
    "contact.eyebrow": "// 05 · contact",
    "contact.title": "Let's talk",
    "contact.subtitle": "Open to internships, first opportunities and projects where I can keep growing as a backend developer.",
    "footer.text": "Carolina Gil Rojas — built with HTML, CSS and JS.",
    "meta.title": "Carolina Gil Rojas — Backend Developer in training",
    "meta.desc": "Portfolio of Carolina Gil Rojas, backend developer working with Python (FastAPI), Java (Spring Boot), React and Docker."
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
    { prompt: "$ stack --list", output: "Python · FastAPI · Java · Spring Boot · React · Docker" },
    { prompt: "$ status", output: "Backend Developer in training" }
  ] : [
    { prompt: "$ whoami", output: "Carolina Gil Rojas" },
    { prompt: "$ stack --list", output: "Python · FastAPI · Java · Spring Boot · React · Docker" },
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
