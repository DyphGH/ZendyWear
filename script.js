document.addEventListener('DOMContentLoaded', () => {
  // Fade-in
  document.body.classList.add('show');
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });

  // Scroll suave com JS
  const button = document.querySelector('.shop-button');
  const target = document.querySelector('#collection');

  if (button && target) {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Impede scroll instantâneo
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50); // Pequeno delay evita conflito com HTML default
    });
  }
});
