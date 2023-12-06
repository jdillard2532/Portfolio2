const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger_close");
const navMenu = document.querySelector(".nav_menu");
const button = document.querySelector(".about_me_btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerClose.classList.toggle("active");
  navMenu.classList.toggle("active");
});
hamburgerClose.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburgerClose.classList.toggle("active");
  navMenu.classList.toggle("active");
});

button.addEventListener("mouseenter", () => {
  button.classList.add("hover");
});

button.addEventListener("mouseleave", () => {
  button.classList.remove("hover");
});
