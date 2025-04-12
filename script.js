
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

  // Fade-in animado
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

  // Corrigir carrossel: remover imagem anterior ANTES de adicionar nova
  const spotlight = document.querySelector('.collection-spotlight');
  if (spotlight) {
    const imageList = [
  'e30s.png',
  'supras.png',
  'r32s.png',
  'golf6gti.png',
  'GOLFGTDSv1.png',
];
    let current = 0;

    let img = spotlight.querySelector('.carousel-image');
    if (!img) return;

    img.classList.add('show');

    setInterval(() => {
      const next = (current + 1) % imageList.length;

      // criar nova imagem
      const newImg = new Image();
      newImg.src = imageList[next];
      newImg.className = 'carousel-image';
      spotlight.appendChild(newImg);

      // mostrar nova imagem
      setTimeout(() => {
        newImg.classList.add('show');
      }, 10);

      // esconder e remover a antiga depois da transição
      setTimeout(() => {
        img.classList.remove('show');
        setTimeout(() => {
          spotlight.removeChild(img);
          img = newImg;
          current = next;
        }, 300); // tempo da transição CSS
      }, 300); // tempo antes de remover a anterior
    }, 2500);
  }
});
