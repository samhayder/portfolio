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
  // init Isotope
  let $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});
