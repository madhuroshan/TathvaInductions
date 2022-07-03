const logoTwo = document.querySelector(".topnav-two");
const menuButton = document.querySelector(".menu-button");
const logoOne = document.querySelector(".topnav");
const workGrid = document.querySelector(".work-grid");
const openFirstAnswerText = document.querySelector(".first-ques");
const firstAnswerText = document.querySelector(".first-ans");
const openSecondAnswerText = document.querySelector(".second-ques");
const secondAnswerText = document.querySelector(".second-ans");
const topnavMenu = document.querySelector(".topnav-links-two");
const topnavMenuClose = document.querySelector(".close-button");

const textButtonRotate = [
  { transform: "rotate(0)" },
  { transform: "rotate(180deg)" },
];

const textButtonRotateOptions = {
  duration: 200,
  iterations: 1,
};

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

openFirstAnswerText.addEventListener("click", function () {
  if (firstAnswerText.style.display == "block") {
    firstAnswerText.style.display = "none";
  } else {
    firstAnswerText.style.display = "block";
  }
});

openSecondAnswerText.addEventListener("click", function () {
  if (secondAnswerText.style.display == "block") {
    secondAnswerText.style.display = "none";
  } else {
    secondAnswerText.style.display = "block";
  }
});
