const logoTwo = document.querySelector(".topnav-two");
const menuButton = document.querySelector(".menu-button");
const logoOne = document.querySelector(".topnav");
const workGrid = document.querySelector(".work-grid");
let screenWidth = window.matchMedia("(max-width:500px)");

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
