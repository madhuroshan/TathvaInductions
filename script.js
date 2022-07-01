const logoTwo = document.querySelector(".topnav-two");
const menuButton = document.querySelector(".menu-button");
const logoOne = document.querySelector(".topnav");
const workGrid = document.querySelector(".work-grid");
let screenWidth = window.matchMedia("(max-width:500px)");
const topnavMenu = document.querySelector(".topnav-links-two");
const topnavMenuClose = document.querySelector(".close-button");

screenWidth.addListener(function (screenWidth) {
  if (screenWidth.matches) {
    logoTwo.style.display = "grid";
    menuButton.style.display = "block";
    logoOne.style.display = "none";
  } else {
    logoTwo.style.display = "none";
    menuButton.style.display = "none";
    logoOne.style.display = "grid";
  }
});

menuButton.addEventListener("click", function () {
  if ((topnavMenu.style.display = "none")) {
    topnavMenu.style.display = "flex";
    topnavMenuClose.style.display = "block";
    menuButton.style.display = "none";
  } else {
    topnavMenu.style.display = "none";
  }
});

topnavMenuClose.addEventListener("click", function () {
  if ((topnavMenuClose.style.display = "block")) {
    topnavMenu.style.display = "none";
    topnavMenuClose.style.display = "none";
    menuButton.style.display = "block";
  } else {
    topnavMenu.style.display = "flex";
  }
});
