$(function () {
  
  "use strict";
  
  var shrinkHeader = 120;
  
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $('.header').addClass('header--shrink');
    } else {
      $('.header').removeClass('header--shrink');
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  
});