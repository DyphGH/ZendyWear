document.addEventListener("mousemove", (e) => {
  const cursorLight = document.querySelector(".cursor-light");
  if (cursorLight) {
    cursorLight.style.top = `${e.pageY}px`;
    cursorLight.style.left = `${e.pageX}px`;
  }
});
