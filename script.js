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
      e.preventDefault();
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  }

  // Typewriter + glitch effect para múltiplos elementos
  const typewriterElements = document.querySelectorAll('.typewriter');
  const glitchChars = ['$', '#', '%', '&', '*', '!', '?', '/', '+', '=', '~'];

  typewriterElements.forEach((el, i) => {
    const fullText = el.textContent;
    el.textContent = '';
    let index = 0;

    const type = () => {
      if (index <= fullText.length) {
        const current = fullText.slice(0, index);
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        el.innerHTML = current + `<span class="glitch-char">${randomChar}</span>`;
        index++;
        setTimeout(type, 40 + i * 10);
      } else {
        el.textContent = fullText;
      }
    };

    setTimeout(type, i * 1000); // Delay entre elementos
  });
});
