const navToggle = document.querySelector('.nav-toggle');
const body = document.body;
const revealItems = document.querySelectorAll('.reveal');

navToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const filters = document.querySelectorAll('.filter');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
  });
});

const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector('button');
  const input = newsletterForm.querySelector('input');

  if (!input || !button) return;

  button.textContent = 'Enviado';
  input.value = '';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = 'Enviar';
    button.disabled = false;
  }, 1800);
});
