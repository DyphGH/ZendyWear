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
