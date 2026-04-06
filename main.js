const STORAGE_KEYS = {
  lang: "portfolio.lang",
  theme: "portfolio.theme",
};

const I18N = {
  ar: {
    "a.skip": "تخطي إلى المحتوى",
    "a.menu": "القائمة",
    "brand.name": "حسن سليم",
    "actions.theme": "المظهر",
    "actions.lang": "اللغة",
    "nav.home": "الرئيسية",
    "nav.about": "نبذة",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.blog": "المدونة",
    "nav.contact": "تواصل",
    "hero.badge": "مصمم جرافيك",
    "hero.hello": "مرحبًا، أنا",
    "hero.name": "حسن سليم",
    "hero.subtitle":
      "أهلاً بك في مساحتي الإبداعية. هنا أشاركك شغفي بالتصميم وخلاصة خبرتي في تحويل الأفكار إلى هويات بصرية جذابة. تصفح معرض أعمالي، ودعنا نتعاون معاً لنجاح مشروعك القادم.",
    "hero.ctaProjects": "شاهد أعمالي",
    "hero.ctaContact": "تواصل معي",
    "stats.yearsK": "سنوات خبرة",
    "stats.yearsV": "+10",
    "stats.focusK": "التخصص",
    "stats.focusV": "هوية + شعارات",
    "stats.locationK": "الموقع",
    "stats.locationV": "الإسكندرية — مصر",
    "about.title": "نبذة عني",
    "about.desc": "شغف بالتفاصيل، ورؤية بصرية تخدم أهدافك التجارية.",
    "about.cardTitle": "من أنا؟",
    "about.p1":
      "شغوف بصناعة الهويات البصرية المتميزة منذ عام 2014. أمتلك خبرة واسعة في تصميم الشعارات، المطبوعات، والحملات الإعلانية، بالإضافة إلى مهارتي في رسم الشخصيات (Illustration). أسعى دائماً لمواكبة التطور، وأعمل حالياً على دمج خبرتي في التصميم مع تعلم برمجة واجهات المواقع لتقديم حلول متكاملة.",
    "about.pill0": "كل المشاريع",
    "about.pill1": "هوية بصرية",
    "about.pill2": "تصميم شعار",
    "about.pill3": "مطبوعات",
    "about.pill4": "سوشيال ميديا",
    "about.cta": "اطلب تصميم / تواصل",
    "download.btn": "تحميل السيرة الذاتية",
    "section-head": "معرض الأعمال",
    "section-desc": "تصفح أحدث مشاريعي في مختلف مجالات التصميم.",
    "skills.title": "المهارات",
    "skills.design": "التصميم",
    "skills.ps": "Photoshop",
    "skills.ai": "Illustrator",
    "skills.frontend": "Front-end",
    "skills.html": "HTML + CSS + JavaScript",
    "skills.progressHint": "(قيد التطوير)",
    "skills.office": "Microsoft Office",
    "skills.excel": "Excel",
    "skills.word": "Word",
    "skills.pp": "PowerPoint",
    "services.title": "الخدمات",
    "services.desc":
      "خدمات تصميم احترافية تركز على الجودة والسرعة وتحقيق أهدافك التسويقية.",
    "services.s1.title": "تصميم شعار وهوية",
    "services.s1.text":
      "تصميم وتنفيذ كل أنواع الشعارات والهوية التجارية باحترافية وإتقان.",
    "services.s2.title": "مطبوعات وإعلانات",
    "services.s2.text":
      "تصميم جميع أنواع المطبوعات مثل البنرات والمجلات والإعلانات الورقية.",
    "services.s3.title": "سوشيال ميديا",
    "services.s3.text":
      "تصميم منشورات جذابة تهدف لتحقيق نتائج تسويقية قوية ومستمرة.",
    "services.a.cta": "عرض المزيد",
    "projects.title": "أحدث المشاريع",
    "projects.desc": "نماذج مختارة من أعمال الهوية والشعارات والمطبوعات.",
    "projects.p1": "هوية تجارية — تقنية",
    "projects.p2": "تسويق عقاري — Branding",
    "projects.p3Title": "Hedaya Stationery",
    "projects.p3": "تصميم شعار تجاري لأكاديمية رياضية",
    "projects.p4Title": "Bright Empire",
    "projects.p4": "مجلة إعلانية مطبوعة - مطبوعات ورقية",
    "projects.p5Title": "She Women Brand",
    "projects.p5": "تصميم شعار لبراند هيئة She للملابس النسائية",
    "projects.p6Title": "forsa Logo Design",
    "projects.p6": "تصميم شعار لشركة فرصة للتقسيط - تصميم شعار",
    "blog.title": "المدونة",
    "blog.desc": "مساحة لمشاركة أفكار ونصائح تهم المصمم والعميل ",
    "blog.b1.title": "كيف تختار ألوان الهوية؟",
    "blog.b1.text":
      "مبادئ بسيطة تساعدك على اختيار لوحة ألوان متوازنة تعبر عن علامتك.",
    "blog.b2.title": "5 أخطاء في تصميم الشعار",
    "blog.b2.text": "أكثر الأخطاء شيوعًا وكيف تتجنبها للوصول لشعار قوي وواضح.",
    "blog.comingSoon": "قريبًا",
    "contact.title": "تواصل",
    "contact.desc": "أرسل رسالة سريعة أو اطلب تصميمًا، وسأعود لك في أقرب وقت.",
    "contact.direct": "بيانات التواصل",
    "contact.cityK": "الموقع",
    "contact.cityV": "الإسكندرية — مصر",
    "contact.callK": "اتصال",
    "contact.callV": "+20 109 857 7457",
    "contact.emailK": "بريد إلكتروني",
    "contact.socialK": "حساباتي",
    "contact.emailV": "7asandesign@gmail.com",
    "contact.formTitle": "أرسل رسالة",
    "contact.name": "الاسم",
    "contact.subject": "الموضوع",
    "contact.message": "الرسالة",
    "contact.send": "إرسال",
    "contact.formNote": "سيتم فتح بريدك الافتراضي لإرسال الرسالة (بدون خادم).",
    "footer.copy": "© كل الحقوق محفوظة 2026",
    "footer.top": "للأعلى",
  },
  en: {
    "a.skip": "Skip to content",
    "a.menu": "Menu",
    "brand.name": "Hassan Selim",
    "actions.theme": "Theme",
    "actions.lang": "Language",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contacts",
    "hero.badge": "Graphic Designer",
    "hero.hello": "Hi, I'm",
    "hero.name": "Hassan Selim",
    "hero.subtitle":
      "Welcome to my creative space. I translate ideas into captivating visual identities. Take a look at my portfolio, and let's collaborate on your next big project.",
    "hero.ctaProjects": "View work",
    "hero.ctaContact": "Contact me",
    "stats.yearsK": "Experience",
    "stats.yearsV": "10+ years",
    "stats.focusK": "Focus",
    "stats.focusV": "Branding + Logos",
    "stats.locationK": "Location",
    "stats.locationV": "Alexandria — Egypt",
    "about.title": "About",
    "about.desc":
      "Driven by details. A visual vision tailored to your business goals.",
    "about.cardTitle": "Who am I?",
    "about.p1":
      "I've been passionate about crafting standout visual identities since 2014. With extensive experience in logo design, print materials, advertising, and character illustration, I bring ideas to life. Driven by a desire to keep evolving, I'm currently merging my design background with front-end development to deliver fully integrated web solutions.",
    "about.pill0": "All Projects",
    "about.pill1": "Branding",
    "about.pill2": "Logo Design",
    "about.pill3": "Print",
    "about.pill4": "Social Media",
    "about.cta": "Request a design / Contact",
    "download.btn": "Download CV",
    "section-head": "Portfolio",
    "section-desc": "Browse my latest projects across various design fields.",
    "skills.title": "Skills",
    "skills.design": "Design",
    "skills.ps": "Photoshop",
    "skills.ai": "Illustrator",
    "skills.frontend": "Front-end",
    "skills.html": "HTML + CSS + JavaScript",
    "skills.progressHint": "(in progress)",
    "skills.office": "Microsoft Office",
    "skills.excel": "Excel",
    "skills.word": "Word",
    "skills.pp": "PowerPoint",
    "services.title": "Services",
    "services.desc":
      "Professional design services focused on quality, speed, and real marketing impact.",
    "services.s1.title": "Logo & Brand Identity",
    "services.s1.text":
      "Professional logo and brand identity design with strong execution.",
    "services.s2.title": "Print & Advertising",
    "services.s2.text":
      "Banners, magazines, flyers, and all kinds of advertising publications.",
    "services.s3.title": "Social Media",
    "services.s3.text":
      "Scroll-stopping social posts designed for consistent results.",
    "services.a.cta": "show more",
    "projects.title": "Latest Projects",
    "projects.desc": "Selected samples of branding, logos, and print work.",
    "projects.p1": "EVERXT technology Business identity",
    "projects.p2": "Real estate marketing — Branding",
    "projects.p3Title": "Hedaya Stationery",
    "projects.p3": "Sports Academy Business identity",
    "projects.p4Title": "Advertising Magazine",
    "projects.p4": "Advertising Magazine",
    "projects.p5Title": "She Women Brand ",
    "projects.p5": "She Women Brand - Logo Design",
    "projects.p6Title": "Forsa Logo Design",
    "projects.p6": "Forsa Logo Design",
    "blog.title": "Blog",
    "blog.desc":
      "A space to share ideas and tips that are important to both the designer and the client.",
    "blog.b1.title": "How to choose brand colors?",
    "blog.b1.text":
      "Simple principles to build a balanced palette that matches your brand.",
    "blog.b2.title": "5 logo design mistakes",
    "blog.b2.text":
      "Common pitfalls and how to avoid them for a clear, strong logo.",
    "blog.comingSoon": "Coming soon",
    "contact.title": "Contacts",
    "contact.desc":
      "Send a quick message or request a design. I’ll get back to you soon.",
    "contact.direct": "Direct contact",
    "contact.cityK": "Location",
    "contact.cityV": "Alexandria — Egypt",
    "contact.callK": "Call",
    "contact.callV": "+20 109 857 7457",
    "contact.emailK": "Email",
    "contact.socialK": "Accounts",
    "contact.emailV": "7asandesign@gmail.com",
    "contact.formTitle": "Send a message",
    "contact.name": "Name",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.formNote": "Your default mail app will open (no backend).",
    "footer.copy": "© All rights reserved 2026",
    "footer.top": "Back to top",
  },
};

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function getInitialTheme() {
  const saved = safeGet(STORAGE_KEYS.theme);
  if (saved === "light" || saved === "dark") return saved;
  return getSystemTheme();
}

function applyLang(lang) {
  const isEn = lang === "en";
  document.documentElement.lang = isEn ? "en" : "ar";
  document.documentElement.dir = isEn ? "ltr" : "rtl";
  const dict = I18N[lang] || I18N.ar;

  for (const el of document.querySelectorAll("[data-i18n]")) {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val === "string") el.textContent = val;
  }
}

function getInitialLang() {
  const saved = safeGet(STORAGE_KEYS.lang);
  if (saved === "ar" || saved === "en") return saved;
  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("ar") ? "ar" : "en";
}

const NAV_SECTION_IDS = [
  "home",
  "about",
  "services",
  "projects",
  "blog",
  "contact",
];
const SCROLL_BACK_TOP_AT = 300;
const HEADER_HIDE_SCROLL_MIN = 52;

function setActiveNav(id) {
  if (!NAV_SECTION_IDS.includes(id)) return;
  for (const a of document.querySelectorAll('.nav-link[href^="#"]')) {
    const href = a.getAttribute("href");
    if (!href || href === "#") continue;
    const sid = href.slice(1);
    const active = sid === id;
    a.classList.toggle("nav-link--active", active);
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  }
}

function setupScrollEffects() {
  let pauseUntil = 0;
  let lastScrollY = window.scrollY || document.documentElement.scrollTop;
  let ticking = false;

  const pause = (ms = 820) => {
    pauseUntil = performance.now() + ms;
  };

  function closeMobileNav() {
    const list = document.querySelector("[data-nav-list]");
    const toggle = document.querySelector("[data-nav-toggle]");
    if (list?.dataset.open === "true") {
      list.dataset.open = "false";
      toggle?.setAttribute("aria-expanded", "false");
    }
  }

  function computeActiveSection(scrollY) {
    if (performance.now() < pauseUntil) return;
    const headerEl = document.querySelector(".header");
    const headerHidden = headerEl?.classList.contains("header--hidden");
    const headerH = headerEl?.offsetHeight ?? 74;
    const y = headerHidden ? 24 : headerH + 8;
    let current = "home";
    for (const sid of NAV_SECTION_IDS) {
      const el = document.getElementById(sid);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= y) current = sid;
    }
    setActiveNav(current);
  }

  function updateChrome() {
    const y = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector(".header");
    const toTop = document.querySelector(".toTop");

    if (toTop) {
      const showTop = y >= SCROLL_BACK_TOP_AT;
      toTop.classList.toggle("toTop--visible", showTop);
      toTop.setAttribute("aria-hidden", showTop ? "false" : "true");
      if (showTop) toTop.removeAttribute("tabindex");
      else toTop.setAttribute("tabindex", "-1");
    }

    if (header) {
      if (y < HEADER_HIDE_SCROLL_MIN) {
        header.classList.remove("header--hidden");
        document.documentElement.removeAttribute("data-header-hidden");
      } else if (y > lastScrollY) {
        header.classList.add("header--hidden");
        document.documentElement.setAttribute("data-header-hidden", "true");
        closeMobileNav();
      } else if (y < lastScrollY) {
        header.classList.remove("header--hidden");
        document.documentElement.removeAttribute("data-header-hidden");
      }
    }

    computeActiveSection(y);
    lastScrollY = y;
  }

  function onScrollOrResize() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateChrome();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });

  for (const a of document.querySelectorAll('a[href^="#"]')) {
    const href = a.getAttribute("href");
    if (!href || href === "#") continue;
    const id = href.slice(1);
    if (!NAV_SECTION_IDS.includes(id)) continue;
    a.addEventListener("click", () => {
      setActiveNav(id);
      pause();
    });
  }

  const hash = location.hash.replace(/^#/, "");
  if (hash && NAV_SECTION_IDS.includes(hash)) {
    setActiveNav(hash);
    pause();
  }

  updateChrome();
}

function syncHeaderOffset() {
  const header = document.querySelector(".header");
  if (!header) return;
  const apply = () => {
    document.documentElement.style.setProperty(
      "--header-offset",
      `${header.offsetHeight}px`,
    );
  };
  apply();
  window.addEventListener("resize", apply, { passive: true });
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(apply).observe(header);
  }
}

function setupScrollReveal() {
  const headerH = document.querySelector(".header")?.offsetHeight ?? 74;
  const rootMargin = `-${Math.round(headerH + 6)}px 0px 0px 0px`;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }
    },
    { rootMargin, threshold: 0 },
  );

  for (const el of document.querySelectorAll(".scroll-reveal"))
    observer.observe(el);
}

function setupNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const list = document.querySelector("[data-nav-list]");
  if (!toggle || !list) return;

  const close = () => {
    list.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const next = list.dataset.open !== "true";
    list.dataset.open = next ? "true" : "false";
    toggle.setAttribute("aria-expanded", next ? "true" : "false");
  });

  for (const a of list.querySelectorAll("a")) {
    a.addEventListener("click", close);
  }

  document.addEventListener("click", (e) => {
    if (!list.contains(e.target) && !toggle.contains(e.target)) close();
  });
}

function setupThemeToggle() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || getSystemTheme();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    safeSet(STORAGE_KEYS.theme, next);
  });

  const media = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: light)")
    : null;
  if (media) {
    media.addEventListener("change", () => {
      const saved = safeGet(STORAGE_KEYS.theme);
      if (saved === "light" || saved === "dark") return;
      applyTheme(getSystemTheme());
    });
  }
}

function setupLangToggle() {
  const btn = document.querySelector("[data-lang-toggle]");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "ar";
    const next = current === "ar" ? "en" : "ar";
    applyLang(next);
    safeSet(STORAGE_KEYS.lang, next);
  });
}

function setupBackToTop() {
  const btn = document.querySelector(".toTop");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduce ? "auto" : "smooth",
    });
    if (history.replaceState) {
      const { pathname, search } = window.location;
      history.replaceState(null, "", pathname + search);
    }
  });
}

/* function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !subject || !message) {
      const lang = document.documentElement.lang === "en" ? "en" : "ar";
      alert(
        lang === "en" ? "Please fill all fields." : "من فضلك املأ جميع الحقول.",
      );
      return;
    }

    const to =
      document
        .querySelector('a[href^="mailto:"]')
        ?.getAttribute("href")
        ?.replace(/^mailto:/, "") || "";
    const body = `Name: ${name}\n\n${message}`;
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
} */

function init() {
  applyTheme(getInitialTheme());
  applyLang(getInitialLang());

  syncHeaderOffset();
  setupNav();
  setupScrollEffects();
  setupBackToTop();
  setupScrollReveal();
  setupThemeToggle();
  setupLangToggle();
  /* setupContactForm(); */
}

init();

/* silderrrrrrrr */
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".blog-slider-wrapper");
  const track = document.getElementById("blog-container");
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");

  if (!track || !wrapper) return;

  // 1. جلب المقالات الأصلية
  const originalPosts = Array.from(track.querySelectorAll(".blog-item"));
  if (originalPosts.length === 0) return;
  originalPosts.forEach((post) => post.classList.remove("hidden-post"));

  // 2. خلط المقالات عشوائياً
  const shuffledPosts = originalPosts.sort(() => 0.5 - Math.random());
  track.innerHTML = "";
  shuffledPosts.forEach((post) => track.appendChild(post));

  // 3. الكوبري اللانهائي: استنساخ المقالات مرتين
  for (let i = 0; i < 2; i++) {
    shuffledPosts.forEach((post) => {
      track.appendChild(post.cloneNode(true));
    });
  }

  // 4. دالة حساب عرض مجموعة المقالات الأصلية بالبيكسل
  const getSingleSetWidth = () => {
    let width = 0;
    const currentItems = track.querySelectorAll(".blog-item");
    for (let i = 0; i < originalPosts.length; i++) {
      width += currentItems[i].offsetWidth + 24; // 24 مسافة الفراغ
    }
    return width;
  };

  let singleSetWidth = getSingleSetWidth();
  window.addEventListener(
    "resize",
    () => (singleSetWidth = getSingleSetWidth()),
  );

  // 5. تشغيل الأسهم
  const getScrollAmount = () => {
    const postElement = track.querySelector(".blog-item");
    return postElement ? postElement.offsetWidth + 24 : 0;
  };

  nextBtn.addEventListener("click", () =>
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" }),
  );
  prevBtn.addEventListener("click", () =>
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" }),
  );

  // 6. 🌟 التعديل السحري المتوافق مع أيفون وسفاري 🌟
  let isHovered = false;
  let scrollAccumulator = 0;
  let scrollSpeed = 0.5;

  function autoScrollContinuously() {
    if (!isHovered) {
      scrollAccumulator += scrollSpeed;

      if (scrollAccumulator >= 1) {
        // فضلنا نستخدم scrollBy عشان بتعالج الـ RTL صح في كل المتصفحات
        track.scrollBy({ left: -1 });
        scrollAccumulator -= 1;
      }

      // التعديل الأهم: منعنا الـ getBoundingClientRect نهائياً عشان الآيفون ميهنجش!
      // وبنعتمد على قراءة الـ scrollLeft لأنها سريعة ومش بتعمل Reflow للصفحة
      if (Math.abs(track.scrollLeft) >= singleSetWidth) {
        // نرجع الشريط لورا
        track.scrollBy({ left: singleSetWidth });
      }
    }
    requestAnimationFrame(autoScrollContinuously);
  }

  autoScrollContinuously();

  // التعديل الأخير: إضافة { passive: true } لدعم اللمس في iOS بدون تعليق
  wrapper.addEventListener("mouseenter", () => (isHovered = true));
  wrapper.addEventListener("mouseleave", () => (isHovered = false));
  wrapper.addEventListener("touchstart", () => (isHovered = true), {
    passive: true,
  });
  wrapper.addEventListener("touchend", () => (isHovered = false), {
    passive: true,
  });
});

/* contaaaact mail */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("form-result");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // منع المتصفح من عمل Refresh

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();

    // تحديد لغة الموقع الحالية للرسائل
    const isEnglish = document.documentElement.lang === "en";

    // 1. التحقق من الحقول الفارغة (نفس اللوجيك بتاعك القديم)
    if (!name || !subject || !message) {
      result.innerHTML = isEnglish
        ? "Please fill all fields."
        : "من فضلك املأ جميع الحقول.";
      result.style.color = "#ff4d4d"; // أحمر
      return;
    }

    // تجميع البيانات للإرسال
    const object = Object.fromEntries(fd);
    const json = JSON.stringify(object);

    // 2. إظهار رسالة جاري الإرسال
    result.innerHTML = isEnglish ? "Sending... ⏳" : "جاري الإرسال... ⏳";
    result.style.color = "var(--muted, #a0a4b8)";

    // 3. إرسال البيانات لـ Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          // حالة النجاح
          result.innerHTML = isEnglish
            ? "Message sent successfully! ✅"
            : "تم إرسال رسالتك بنجاح! هرد عليك في أقرب وقت. ✅";
          result.style.color = "#4caf50"; // أخضر
          form.reset(); // تفريغ الفورم
        } else {
          // خطأ من السيرفر
          console.log(response);
          result.innerHTML = isEnglish
            ? "Something went wrong, please try again."
            : "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.";
          result.style.color = "#ff4d4d";
        }
      })
      .catch((error) => {
        // خطأ في الإنترنت
        console.log(error);
        result.innerHTML = isEnglish
          ? "Connection error, check your internet."
          : "حدث خطأ في الاتصال، يرجى التأكد من الإنترنت.";
        result.style.color = "#ff4d4d";
      })
      .then(function () {
        // إخفاء الرسالة بعد 5 ثواني
        setTimeout(() => {
          result.innerHTML = "";
        }, 5000);
      });
  });
});

/* .................................. */
// بنقول للكود: استنى لحد ما هيكل الصفحة (HTML) يحمل بالكامل وبعدين اشتغل
document.addEventListener("DOMContentLoaded", () => {
  /* ========================================================
     1. حركة الظهور عند التمرير (Scroll Reveal)
  ======================================================== */
  const revealElements = document.querySelectorAll(".reveal-item");

  // المراقب اللي بيشوف الكارت ظهر في الشاشة ولا لسه
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // لو الكارت ظهر بنسبة 10%
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // نوقف المراقبة عشان الحركة ماتتكررش وتزعج العميل
        }
      });
    },
    { threshold: 0.1 },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ========================================================
     2. نظام الفلترة الذكي (Filtering System)
  ======================================================== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // تغيير لون الزرار النشط
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      // إخفاء وإظهار الكروت بنعومة
      portfolioCards.forEach((card) => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          // نظهر الكارت
          card.classList.remove("hide");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1) translateY(0)";
          }, 50);
        } else {
          // نخفي الكارت بتأثير تصغير
          card.style.opacity = "0";
          card.style.transform = "scale(0.8) translateY(20px)";
          setTimeout(() => {
            card.classList.add("hide");
          }, 400);
        }
      });
    });
  });

  /* ========================================================
     3. شاشة العرض ومؤشر التحميل (Modal & Spinner)
  ======================================================== */
  const modal = document.getElementById("projectModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCat = document.getElementById("modalCategory");
  const modalLoader = document.getElementById("modalLoader");
  const closeModalBtn = document.getElementById("closeModal");
  const modalBackdrop = document.getElementById("modalBackdrop");

  if (modal) {
    // لما العميل يدوس على أي كارت
    portfolioCards.forEach((card) => {
      card.addEventListener("click", () => {
        // نسحب البيانات من الكارت
        const imgSrc = card.getAttribute("data-mockup");
        const title = card.querySelector(".card-info h3").innerText;
        const category = card.querySelector(".card-info span").innerText;

        // نحط الداتا النصية فورا في الشاشة الكبيرة
        modalTitle.innerText = title;
        modalCat.innerText = category;

        // نشغل اللودينج ونخفي الصورة لحد ما تحمل
        modalLoader.style.display = "block";
        modalImg.classList.remove("loaded");
        modalImg.src = imgSrc;

        // الحدث ده بيشتغل أوتوماتيك أول ما الصورة تخلص تحميل 100%
        modalImg.onload = () => {
          modalLoader.style.display = "none"; // نخفي اللودينج
          modalImg.classList.add("loaded"); // نظهر الصورة بنعومة
        };

        // نفتح الشاشة ونمنع الموقع من السكرول
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

    // دالة قفل الشاشة
    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";

      setTimeout(() => {
        modalImg.src = "";
      }, 400);
    };

    closeModalBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });
  }

  setTimeout(() => {
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) allBtn.click();
  }, 100);
});
