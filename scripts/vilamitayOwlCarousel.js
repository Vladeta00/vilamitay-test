// below is the carousel for accomodations
const nextIcon = '<img src="./imgs/icons/gallery-right.svg" alt="direito">';
const previousIcon = '<img src="./imgs/icons/gallery-left.svg" alt="escerda">';

$(document).ready(function () {
  $(".owl-accom").owlCarousel({
    margin: 10,
    dots: false,
    navText: [previousIcon, nextIcon],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      700: {
        items: 2,
        nav: false,
      },
      // breakpoint from 768 up
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});

// Bellow is carousel for common area
$(document).ready(function () {
  $(".owl-commonarea").owlCarousel({
    // loop: true,
    margin: 10,
    dots: false,
    navText: [previousIcon, nextIcon],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      700: {
        items: 2,
        nav: false,
      },
      // breakpoint from 768 up
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});

// below is owl carousel for reviews
$(document).ready(function () {
  $(".owl-reviews").owlCarousel({
    // loop: true,
    margin: 30,
    dots: false,
    navText: [previousIcon, nextIcon],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      700: {
        items: 2,
      },
      // breakpoint
      1000: {
        nav: false,
      },
      // breakpoint from 768 up
      1200: {
        items: 3,
        nav: true,
      },
    },
  });
});
