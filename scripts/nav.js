// Script for Navigation

const header = document.querySelector(".main-nav-box");

// The Header NavBar changes background color and logo size once you scroll
window.onscroll = () => {
  if (window.scrollY > 1) {
    header.classList.add("main-nav-box__scrolling");
  } else {
    header.classList.remove("main-nav-box__scrolling");
  }
};
