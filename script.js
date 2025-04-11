document.addEventListener('DOMContentLoaded', () => {
  // Fade-in
  document.body.classList.add('show');
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('show'));

  // Scroll suave
  const button = document.querySelector('.shop-button');
  const target = document.querySelector('#collection');
  if (button && target) {
    button.addEventListener('click', e => {
      e.preventDefault();
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    });
  }

  // Typewriter + glitch (título)
  const title = document.querySelector('.typewriter');
  if (title) {
    const fullText = title.textContent;
    title.textContent = '';
    let index = 0;
    const glitchChars = ['$', '#', '%', '&', '*', '!', '?', '/', '+', '=', '~'];

    const type = () => {
      if (index <= fullText.length) {
        const current = fullText.slice(0, index);
        const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        title.innerHTML = current + `<span class="glitch-char">${randomChar}</span>`;
        index++;
        setTimeout(type, 60);
      } else {
        title.textContent = fullText;
        animateSubtitle();
      }
    };

    type();
  }

  // Typewriter + glitch (subtítulo)
  function animateSubtitle() {
    const subtitle = document.querySelector('.typewriter-sub');
    if (!subtitle) return;
    const fullText = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;

    const glitchChars = ['$', '#', '%', '&', '*', '?'];
    const type = () => {
      if (index <= fullText.length) {
        const current = fullText.slice(0, index);
        const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        subtitle.innerHTML = current + `<span class="glitch-char">${glitchChar}</span>`;
        index++;
        setTimeout(type, 50);
      } else {
        subtitle.textContent = fullText;
      }
    };

    type();
  }
});
