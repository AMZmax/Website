// --- Theme (dark/light) ---
function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('amzmax_theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'light' ? '☀️' : '🌙';
}

function initTheme() {
  const saved = localStorage.getItem('amzmax_theme');
  if (saved === 'light' || saved === 'dark') return setTheme(saved);

  // Default: dark
  setTheme('dark');
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const themeBtn = document.getElementById('themeBtn');
  themeBtn?.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
});

// --- Mobile menu ---
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

btn?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('show');
  btn.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
});

menu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('show');
    btn?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-hidden', 'true');
  });
});

// Footer year
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = String(new Date().getFullYear());
});
