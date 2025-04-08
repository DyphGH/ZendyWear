document.addEventListener("mousemove", (e) => {
  const cursorLight = document.querySelector(".cursor-light");
  if (cursorLight) {
    cursorLight.style.top = `${e.clientY + scrollY}px`;
    cursorLight.style.left = `${e.pageX}px`;
  }
});
