// Scroll-reveal for sections
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Theme toggle (Original / Navy / Emerald)
const themeButtons = document.querySelectorAll('[data-theme-btn]');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'original';

function applyTheme(theme){
  if (theme === 'original') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
  themeButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.themeBtn === theme));
}

applyTheme(savedTheme);

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.themeBtn;
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  });
});

// ===== Language Toggle (EN / AR) =====
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "[ Front-End Web Developer ]",
    "hero.name": "Mohammed<br>Al-Jazzar",
    "hero.lede": "<strong> Where Art Meets Logic.</strong> <br>I design and build websites that combine clean design with solid performance — fully responsive, every device.",
    "hero.viewProjects": "View Projects",
    "hero.downloadCv": "Download CV",
    "about.eyebrow": "[ 01 / About ]",
    "about.heading": "Building interfaces for the web",
    "about.p1": "I started exploring design back in 2016 through self-study, and today I build professional web interfaces with HTML5, CSS3, and JavaScript — skills I developed hands-on through the Web Development Challenger Track <strong>(ITIDA & Udacity)</strong>, UI/UX & Front-End training with <strong>ITI</strong>, and most recently the Web Designer program with <strong>NTI</strong>.",
    "about.p2": "I build clean, responsive interfaces and care about the small details that actually shape the user experience. Every project I've worked on — an e-commerce page, a real estate listing site, a landscaping business website — follows the same approach: a real idea, turned into a working interface.",
    "about.p3": "I treat every project like it's my own — which is exactly why I care about clean work, on-time delivery, and earning your trust.",
    "about.stat1": "Tools for Designing Websites Like a Pro",
    "about.stat2": "Front-End Practice Projects",
    "about.stat3": "Certifications Earned",
    "skills.eyebrow": "[ 02 / Skills ]",
    "skills.heading": "What I work with",
    "skills.frontend": "Front-End Development",
    "skills.general": "General Skills",
    "projects.eyebrow": "[ 03 / Projects ]",
    "projects.heading": "Practice projects, built like real briefs",
    "projects.intro": "Hands-on front-end projects completed during training, each built around a practice brief simulating a real business need.",
    "projects.viewCode": "View Code on GitHub →",
    "projects.p1.code": "[ PROJ / 01 ]",
    "projects.p1.title": "E-Commerce Product Page",
    "projects.p1.brief": "Brief: build a responsive product showcase with filters and categories.",
    "projects.p1.summary": "Built a dynamic product grid with interactive cards and hover effects, dynamic filtering via JavaScript, and full responsive testing across devices.",
    "projects.p2.code": "[ PROJ / 02 ]",
    "projects.p2.title": "Real Estate Listing Page",
    "projects.p2.brief": "Brief: create a property showcase with a gallery and detailed listings.",
    "projects.p2.summary": "Developed a clean interface with property cards and an image gallery, using Flexbox and CSS Grid for a fully adaptive layout across mobile and desktop.",
    "projects.p3.code": "[ PROJ / 03 ]",
    "projects.p3.title": "Landscaping & Gardening Services Website",
    "projects.p3.brief": "Brief: build a modern, green-themed website for a landscaping business.",
    "projects.p3.summary": "Designed a nature-inspired landing page with a hero banner, credibility stats section, and clear calls-to-action — fully responsive across breakpoints.",
    "certs.eyebrow": "[ 04 / Certifications ]",
    "certs.heading": "Training & credentials",
    "certs.c1.title": "Web Designer",
    "certs.c1.issuer": "National Telecommunication Institute (NTI)",
    "certs.c2.title": "Web Development Challenger Track",
    "certs.c3.title": "UI/UX & Front-End Development",
    "certs.c3.issuer": "Information Technology Institute (ITI)",
    "certs.c4.title": "Cloud & Virtualization Concepts",
    "certs.c5.title": "Network Virtualization Concepts",
    "certs.c6.title": "Software Defined Storage Concepts",
    "certs.vmware": "VMware IT Academy",
    "exp.eyebrow": "[ 05 / Experience ]",
    "exp.heading": "Where I've worked",
    "exp.intro": "Full role details are available in my CV — here's the condensed version.",
    "exp.e1.role": "I design and develop dynamic, responsive front-end pages",
    "exp.e1.desc": "that adapt seamlessly to all devices.<br>My portfolio includes a wide range of projects such as product showcases, real estate listings,<br>account registration forms, interactive dashboards, and blog layouts.",
    "exp.e2.role": "Each project reflects my focus on responsive design",
    "exp.e2.desc": "UI/UX excellence, and performance optimization — ensuring that every page is not only functional<br>but also engaging and user-friendly.",
    "exp.badge": "web design",
    "contact.heading": "Let's build something.",
    "contact.downloadCv": "Download CV (PDF)",
    "footer.name": "© 2026 Mohammed Al-Jazzar",
    "footer.location": "Sheikh Zayed City, Egypt"
  },
  ar: {
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.certifications": "الشهادات",
    "nav.experience": "الخبرة",
    "nav.contact": "تواصل",
    "hero.eyebrow": "[ مطوّر واجهات أمامية ]",
    "hero.name": "محمد<br>الجزار",
    "hero.lede": "<strong>حيث يلتقي الفن بالمنطق.</strong> <br>أصمم وأبني مواقع تجمع بين تصميم نظيف وأداء قوي — متجاوبة بالكامل مع جميع الاجهزة.",
    "hero.viewProjects": "عرض المشاريع",
    "hero.downloadCv": "تحميل السيرة الذاتية",
    "about.eyebrow": "[ ٠١ / نبذة ]",
    "about.heading": "بناء واجهات للويب",
    "about.p1": " بدأت رحلتي مع التصميم من 2016 بشكل ذاتي، ودلوقتي بابني واجهات ويب احترافية بـ HTML5 وCSS3 وJavaScript — اتعلمتهم عملي من خلال Web Development Challenger Track <strong> (ITIDA & Udacity)</strong>، تدريب UI/UX وFront-End مع <strong>ITI</strong>، وأحدث خطوة كانت برنامج Web Designer مع <strong>NTI</strong>.",
    "about.p2": " بابني واجهات نظيفة ومتجاوبة، ومهتم بالتفاصيل الصغيرة اللي بتفرق فعلًا في تجربة المستخدم. كل مشروع من مشاريعي — من متجر إلكتروني، لموقع عقارات، لموقع خدمات تنسيق حدائق — اتبنى بنفس المنطق: فكرة حقيقية، بتتحول لواجهة شغالة فعليًا.",
    "about.p3": " بتعامل مع كل مشروع وكأنه بتاعي، وده اللي بيخليني حريص على شغل نضيف، مظبوط في ميعاده، وبيستاهل ثقتك.",
    "about.stat1": "أدوات لتصميم المواقع باحترافية",
    "about.stat2": "مشاريع عملية في الواجهات الأمامية",
    "about.stat3": "شهادة تدريبية",
    "skills.eyebrow": "[ ٠٢ / المهارات ]",
    "skills.heading": "الأدوات والتقنيات التي أعمل بها",
    "skills.frontend": "تطوير الواجهات الأمامية",
    "skills.general": "مهارات عامة",
    "projects.eyebrow": "[ ٠٣ / المشاريع ]",
    "projects.heading": "مشاريع عملية، مبنية كأنها تكليفات حقيقية",
    "projects.intro": "مشاريع عملية في تطوير الواجهات الأمامية أنجزتها أثناء التدريب، كل مشروع مبني حول تكليف تدريبي يحاكي احتياج عمل حقيقي.",
    "projects.viewCode": "عرض الكود على GitHub ←",
    "projects.p1.code": "[ مشروع / ٠١ ]",
    "projects.p1.title": "صفحة منتج لمتجر إلكتروني",
    "projects.p1.brief": "التكليف: بناء صفحة عرض منتجات متجاوبة مع فلاتر وتصنيفات.",
    "projects.p1.summary": "بنيت شبكة منتجات ديناميكية ببطاقات تفاعلية وتأثيرات عند التمرير، وفلترة ديناميكية باستخدام JavaScript، مع اختبار كامل للتجاوب عبر الأجهزة.",
    "projects.p2.code": "[ مشروع / ٠٢ ]",
    "projects.p2.title": "صفحة عرض عقارات",
    "projects.p2.brief": "التكليف: إنشاء صفحة عرض عقارات مع معرض صور وتفاصيل كاملة.",
    "projects.p2.summary": "طورت واجهة نظيفة ببطاقات عقارات ومعرض صور، باستخدام Flexbox وCSS Grid لتصميم متكيف بالكامل بين الموبايل وسطح المكتب.",
    "projects.p3.code": "[ مشروع / ٠٣ ]",
    "projects.p3.title": "موقع لخدمات تنسيق الحدائق",
    "projects.p3.brief": "التكليف: بناء موقع عصري بألوان خضراء لشركة تنسيق حدائق.",
    "projects.p3.summary": "صممت صفحة بداش بورد مستوحاة من الطبيعة مع بانر رئيسي، وقسم إحصائيات لبناء الثقة، وأزرار دعوة لاتخاذ إجراء واضحة — متجاوبة بالكامل على كل المقاسات.",
    "certs.eyebrow": "[ ٠٤ / الشهادات ]",
    "certs.heading": "التدريبات والشهادات",
    "certs.c1.title": "مصمم مواقع",
    "certs.c1.issuer": "المعهد القومي للاتصالات (NTI)",
    "certs.c2.title": "مسار تحدي تطوير الويب",
    "certs.c3.title": "تصميم واجهات المستخدم وتطوير الواجهات الأمامية",
    "certs.c3.issuer": "معهد تكنولوجيا المعلومات (ITI)",
    "certs.c4.title": "مفاهيم الحوسبة السحابية والافتراضية",
    "certs.c5.title": "مفاهيم افتراضية الشبكات",
    "certs.c6.title": "مفاهيم التخزين المعرّف بالبرمجيات",
    "certs.vmware": "أكاديمية VMware",
    "exp.eyebrow": "[ ٠٥ / الخبرة ]",
    "exp.heading": "أماكن عملي",
    "exp.intro": "تفاصيل الخبرات كاملة موجودة في سيرتي الذاتية — دي نسخة مختصرة.",
    "exp.e1.role": "أصمم وأطوّر صفحات واجهة أمامية ديناميكية ومتجاوبة",
    "exp.e1.desc": "تتكيف بسلاسة مع كل الأجهزة.<br>مشاريعي تغطي مجالات متنوعة زي صفحات عرض المنتجات، وقوائم العقارات،<br>ونماذج تسجيل الحسابات، ولوحات التحكم التفاعلية، وتصاميم المدونات.",
    "exp.e2.role": "كل مشروع بيعكس تركيزي على التصميم المتجاوب",
    "exp.e2.desc": "والتميز في UI/UX، وتحسين الأداء — عشان كل صفحة تكون شغالة كويس ومريحة وسهلة الاستخدام.",
    "exp.badge": "تصميم مواقع",
    "contact.heading": "يلا نبني حاجة مع بعض.",
    "contact.downloadCv": "تحميل السيرة الذاتية (PDF)",
    "footer.name": "© 2026 محمد الجزار",
    "footer.location": "مدينة الشيخ زايد، مصر"
  }
};

const langButtons = document.querySelectorAll('[data-lang-btn]');
const htmlEl = document.documentElement;
const i18nEls = document.querySelectorAll('[data-i18n]');
const savedLang = localStorage.getItem('lang') || 'en';

function applyLang(lang){
  htmlEl.setAttribute('lang', lang);
  htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  i18nEls.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  langButtons.forEach((b) => b.classList.toggle('is-active', b.dataset.langBtn === lang));
}

applyLang(savedLang);

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.langBtn;
    applyLang(lang);
    localStorage.setItem('lang', lang);
  });
});
