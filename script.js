function glitchCharEffect(el, finalText, delay = 20, onComplete = null) {
  const chars = '#$%&@*';
  el.textContent = '';
  const spans = [];

  finalText.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = '';
    el.appendChild(span);
    spans.push({ span, final: char });
  });

  let i = 0;

  function revealNext() {
    if (i >= spans.length) {
      if (onComplete) onComplete();
      return;
    }

    const { span, final } = spans[i];
    let count = 0;
    const maxIterations = 2;

    const scramble = setInterval(() => {
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      count++;
      if (count >= maxIterations) {
        clearInterval(scramble);
        span.textContent = final;
        i++;
        revealNext();
      }
    }, 12); // ultra rápido
  }

  revealNext();
}

window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-overlay');
  if (hero) {
    const h1 = hero.querySelector('h1');
    const p = hero.querySelector('p');
    if (h1 && p) {
      const h1Text = h1.textContent;
      const pText = p.textContent;
      h1.textContent = '';
      p.textContent = '';
      glitchCharEffect(h1, h1Text, 20, () => {
        setTimeout(() => glitchCharEffect(p, pText, 15), 100);
      });
    }
  }

  const about = document.querySelector('.about-overlay');
  if (about) {
    const h1 = about.querySelector('h1');
    const p = about.querySelector('p');
    if (h1 && p) {
      const h1Text = h1.textContent;
      const pText = p.textContent;
      h1.textContent = '';
      p.textContent = '';
      glitchCharEffect(h1, h1Text, 20, () => {
        setTimeout(() => glitchCharEffect(p, pText, 15), 100);
      });
    }
  }
});
