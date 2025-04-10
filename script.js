document.addEventListener('DOMContentLoaded', () => {
  // Fade-in classes
  document.body.classList.add('show');
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('show'));

  // Scroll to collection
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

  // Typewriter effect with glitch
  const typewriter = (element, text, delay = 50, callback) => {
    const glitchChars = ['$', '#', '%', '&', '*', '!', '?', '/', '+', '=', '~'];
    let index = 0;
    const type = () => {
      if (index <= text.length) {
        const current = text.slice(0, index);
        const glitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        element.innerHTML = current + `<span class="glitch-char">${glitch}</span>`;
        index++;
        setTimeout(type, delay);
      } else {
        element.textContent = text;
        if (callback) callback();
      }
    };
    type();
  };

  const title = document.querySelector('.typewriter');
  const subtitle = document.querySelector('.typewriter-sub');

  if (title && subtitle) {
    const titleText = title.textContent;
    const subtitleText = subtitle.textContent;
    title.textContent = '';
    subtitle.textContent = '';
    typewriter(title, titleText, 50, () => {
      typewriter(subtitle, subtitleText, 40);
    });
  }

  // Animate images in collection grid
  const images = document.querySelectorAll('.collection-grid img');
  images.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add('visible');
    }, 400 + i * 300);
  });
});
