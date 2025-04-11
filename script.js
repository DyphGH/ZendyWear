function decodeTextEffect(element, finalText, delay = 50, onComplete = null) {
  const characters = '!@#$%^&*()_+=<>?/|~`"[]{};:';
  let displayText = '';
  let i = 0;

  const interval = setInterval(() => {
    if (i < finalText.length) {
      displayText = finalText
        .split('')
        .map((char, index) => {
          if (index < i) return finalText[index];
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');
      element.textContent = displayText;
      i++;
    } else {
      element.textContent = finalText;
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
      const h1Text = h1.textContent;
      const pText = p.textContent;
      h1.textContent = '';
      p.textContent = '';
      decodeTextEffect(h1, h1Text, 50, () => {
        setTimeout(() => decodeTextEffect(p, pText, 30), 400);
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
      decodeTextEffect(h1, h1Text, 50, () => {
        setTimeout(() => decodeTextEffect(p, pText, 30), 400);
      });
    }
  }
});
