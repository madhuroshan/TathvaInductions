const logoTwo = document.querySelector(".topnav-two");
const menuButton = document.querySelector(".menu-button");
const logoOne = document.querySelector(".topnav");
const workGrid = document.querySelector(".work-grid");
const openAnswerText = document.querySelector(".show-text");
const answerText = document.querySelector(".answer");
const topnavMenu = document.querySelector(".topnav-links-two");
const topnavMenuClose = document.querySelector(".close-button");

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

openAnswerText.addEventListener("click", function () {
  if ((answerText.style.display = "block")) {
    answerText.style.display = "none";
  } else {
    answerText.style.display = "block";
  }
});
