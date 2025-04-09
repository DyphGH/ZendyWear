document.addEventListener('DOMContentLoaded', () => {
  // Fade-in da página e elementos
  document.body.classList.add('show');
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });

  // Scroll suave para a coleção
  const button = document.querySelector('.shop-button');
  const target = document.querySelector('#collection');

  if (button && target) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  }

  // Typewriter glitch effect
  const title = document.querySelector('.hero-overlay h1');
  if (title) {
    const fullText = title.textContent;
    title.textContent = '';
    title.classList.add('glitch-type');

    let index = 0;
    const glitchChars = ['$', '#', '%', '&', '*', '!', '?', '/', '+', '=', '~'];
    const speed = 45;

    const type = () => {
      if (index <= fullText.length) {
        const current = fullText.slice(0, index);
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        title.innerHTML = current + `<span class="glitch-char">${randomChar}</span>`;
        index++;
        setTimeout(type, speed);
      } else {
        title.textContent = fullText; // Final clean text
      }
    };

    type();
  }
});
