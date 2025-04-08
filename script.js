document.addEventListener("mousemove", (e) => {
  const cursorLight = document.querySelector(".cursor-light");
  if (cursorLight) {
    cursorLight.style.top = `${e.clientY + scrollY}px`;
    cursorLight.style.left = `${e.pageX}px`;
  }
});
const tooltip = document.getElementById("global-tooltip");

document.querySelector(".search-icon-wrapper").addEventListener("mouseenter", () => {
  tooltip.innerText = "Search";
  tooltip.style.opacity = "1";
});
document.querySelector(".user-icon-wrapper").addEventListener("mouseenter", () => {
  tooltip.innerText = "Login / Register";
  tooltip.style.opacity = "1";
});
document.querySelector(".cart-icon-wrapper").addEventListener("mouseenter", () => {
  tooltip.innerText = "Cart";
  tooltip.style.opacity = "1";
});

document.querySelectorAll(".search-icon-wrapper, .user-icon-wrapper, .cart-icon-wrapper").forEach(el => {
  el.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});
