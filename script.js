// Faz fade-in suave nos elementos com a classe .fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });
});
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('show');
});
