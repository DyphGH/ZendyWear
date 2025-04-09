// Adiciona a classe .scrolled quando der scroll
window.addEventListener("scroll", () => {
  const body = document.body;
  if (window.scrollY > 10) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});
