document.addEventListener('DOMContentLoaded', () => {
  // Fade-in
  document.body.classList.add('show');
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });

  // Scroll suave
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

  // Typewriter com glitch (Título e Subtítulo em sequência)
  const typeText = (element, text, delay = 50, callback) => {
    let index = 0;
    const glitchChars = ['$', '#', '%', '&', '*', '!', '?', '/', '+', '=', '~'];
    const type = () => {
      if (index <= text.length) {
        const current = text.slice(0, index);
        const glitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        element.innerHTML = current + `<span class="glitch-char">${glitch}</span><span class="cursor">|</span>`;
        index++;
        setTimeout(type, delay);
      } else {
        element.textContent = text;
        if (callback) callback();
      }
    };
    type();
  };

  const titleEl = document.querySelector('.typewriter');
  const subtitleEl = document.querySelector('.subtitle-typewriter');

  if (titleEl && subtitleEl) {
    const titleText = titleEl.textContent;
    const subtitleText = subtitleEl.textContent;
    titleEl.textContent = '';
    subtitleEl.textContent = '';
    typeText(titleEl, titleText, 70, () => {
      setTimeout(() => {
        typeText(subtitleEl, subtitleText, 35);
      }, 200);
    });
  }
});
