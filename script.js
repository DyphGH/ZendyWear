const cursorLight = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
  cursorLight.style.top = `${e.clientY}px`;
  cursorLight.style.left = `${e.clientX}px`;
});
