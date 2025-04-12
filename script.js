
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
    }, 12);
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

  // Fade-in animado com Intersection Observer
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeInElements.forEach(el => observer.observe(el));
});


// Carrossel automático para coleção com fade + zoom
window.addEventListener('DOMContentLoaded', () => {
  const spotlight = document.querySelector('.collection-spotlight');
  if (!spotlight) return;

  const imageList = ['e30s.png', 'supras.png', 'r32s.png'];
  let current = 0;

  const img = spotlight.querySelector('.carousel-image');
  if (!img) return;

  function showNextImage() {
    img.classList.remove('show');
    setTimeout(() => {
      current = (current + 1) % imageList.length;
      img.src = imageList[current];
      img.classList.add('show');
    }, 400); // tempo entre fade out e fade in
  }

  img.classList.add('show');
  setInterval(showNextImage, 4000); // muda de imagem a cada 4 segundos
});
