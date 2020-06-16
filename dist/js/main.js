'use strict';
$(document).ready(function () {
  /* Navbar toggler style */
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change');
  });

  /* Navbar position fixed-top */
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 100) {
      $('.navbar').addClass('fixed-top');
      $('.navbar').addClass('navbar-background');
    } else {
      $('.navbar').removeClass('fixed-top');
      $('.navbar').removeClass('navbar-background');
    }
  });
});
