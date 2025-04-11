// Faz fade-in suave nos elementos com a classe .fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });
});
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('show');
});
// Fade in da página inteira
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('show');

  // Ativa fade-in em elementos específicos
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });
});

function animateGlitchText(element, delay = 50, onComplete = null) {
  const text = element.textContent;
  element.textContent = '';
  let i = 0;

  const interval = setInterval(() => {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.classList.add('glitch-char');
    element.appendChild(span);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, delay);
}

window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  if (hero) {
    const h1 = hero.querySelector('h1');
    const p = hero.querySelector('p');
    if (h1 && p) {
      animateGlitchText(h1, 80, () => {
        setTimeout(() => animateGlitchText(p, 30), 300);
      });
    }
  }

  const about = document.querySelector('.about-overlay');
  if (about) {
    const h1 = about.querySelector('h1');
    const p = about.querySelector('p');
    if (h1 && p) {
      animateGlitchText(h1, 80, () => {
        setTimeout(() => animateGlitchText(p, 30), 300);
      });
    }
  }
});
