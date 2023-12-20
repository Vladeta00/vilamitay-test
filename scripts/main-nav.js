// Making Hamburger Icon change on click
const hamburgerMenu = document.getElementById("hamburger");
const hamburgerImg = document.getElementById("hamburger-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

let hamburger1st = true;

hamburgerMenu.addEventListener("click", function () {
  if (hamburger1st) {
    hamburgerImg.src = "./imgs/nav/x-close-delete.svg";
    dropdownMenu.classList.toggle("open");
  } else {
    hamburgerImg.src = "./imgs/nav/menu.svg";
    dropdownMenu.classList.toggle("open");
  }
  hamburger1st = !hamburger1st;
});
