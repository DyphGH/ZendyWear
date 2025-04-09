document.addEventListener('DOMContentLoaded', () => {
  // Fade-in
  document.body.classList.add('show');
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });

  // JS scroll (intercepta o click e faz smooth scroll)
  const button = document.querySelector('.shop-button');
  const target = document.querySelector('#collection');

  if (button && target) {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // impede o comportamento padrão do link
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
