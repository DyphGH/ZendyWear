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
  // glitch na página principal
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

  // glitch da seção collection — só ativa ao aparecer no ecrã
  const collectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const collection = entry.target;
        const h2 = collection.querySelector('h2');
        const p = collection.querySelector('p');

        if (h2 && p && !h2.dataset.glitched) {
          const h2Text = h2.textContent;
          const pText = p.textContent;
          h2.textContent = '';
          p.textContent = '';
          h2.dataset.glitched = true;

          glitchCharEffect(h2, h2Text, 20, () => {
            setTimeout(() => glitchCharEffect(p, pText, 15), 100);
          });
        }
      }
    });
  }, { threshold: 0.5 });

  const collectionSection = document.querySelector('.collection-content');
  if (collectionSection) {
    collectionObserver.observe(collectionSection);
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

  // Carrossel + scroll para loja ao clicar
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

      const newImg = new Image();
      newImg.src = imageList[next];
      newImg.className = 'carousel-image';
      spotlight.appendChild(newImg);

      setTimeout(() => {
        newImg.classList.add('show');
      }, 10);

      setTimeout(() => {
        img.classList.remove('show');
        setTimeout(() => {
          spotlight.removeChild(img);
          img = newImg;
          current = next;
        }, 300);
      }, 300);
    }, 2500);

    // scroll suave para a loja
    spotlight.addEventListener('click', () => {
      const shopSection = document.querySelector('#collection-shop');
      if (shopSection) {
        shopSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
