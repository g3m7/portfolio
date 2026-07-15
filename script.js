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
