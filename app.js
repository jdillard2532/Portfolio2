const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger_close");
const navMenu = document.querySelector(".nav_menu");
const input = document.querySelectorAll(".contact_info");

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

input.forEach((i) => {
  i.value = "";
});
