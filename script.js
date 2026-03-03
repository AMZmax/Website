// Mobile menu
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

// Form: prevent submit if not configured
document.querySelectorAll('form[data-proposal-form="true"]').forEach(form => {
  form.addEventListener('submit', (e) => {
    const action = form.getAttribute('action') || '';
    const note = form.querySelector('[data-form-note]');
    if (action.includes('yourFormID')) {
      e.preventDefault();
      if (note) {
        note.textContent = "Form not connected yet. Replace the Formspree URL in the form action, or contact via WhatsApp/email.";
      }
    }
  });
});
