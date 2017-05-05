$(function () {
  
  "use strict";
  
  $(document).ready(function () {
    $("#showhide").click(function () {
      console.log("toggling");
      $(".header__nav").toggle(0);
      console.log("toggled");
    });
  });
  
});