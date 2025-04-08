document.addEventListener("mousemove", (e) => {
  const cursorLight = document.querySelector(".cursor-light");
  if (cursorLight) {
    cursorLight.style.top = `${e.clientY}px`;
    cursorLight.style.left = `${e.clientX}px`;
  }
});
