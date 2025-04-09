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

  // Glitch typewriter for title and subtitle
  const typewriterEffect = (element, text, delay = 50, onComplete) => {
    let index = 0;
    const glitchChars = ['$', '#', '%', '&', '*', '!', '?', '/', '+', '=', '~'];
    const type = () => {
      if (index <= text.length) {
        const current = text.slice(0, index);
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        element.innerHTML = current + `<span class="glitch-char">${randomChar}</span>`;
        index++;
        setTimeout(type, delay);
      } else {
        element.textContent = text;
        if (onComplete) onComplete();
      }
    };
    type();
  };

  const title = document.querySelector('.typewriter');
  const subtitle = document.querySelector('.subtitle-typewriter');

  if (title && subtitle) {
    const titleText = title.textContent;
    const subtitleText = subtitle.textContent;

    title.textContent = '';
    subtitle.textContent = '';

    typewriterEffect(title, titleText, 60, () => {
      setTimeout(() => {
        typewriterEffect(subtitle, subtitleText, 30);
      }, 300);
    });
  }
});
