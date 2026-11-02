// main.js - runs on every page

// ---------- fade in the boxes when the page loads ----------
function setUpFadeIn() {
  let boxes = document.querySelectorAll(".container div, .hero");

  // start every box hidden (the CSS .fade-in class)
  boxes.forEach(function (box) {
    box.classList.add("fade-in");
  });

  // when the page has loaded, show them (the CSS .visible class)
  window.addEventListener("load", function () {
    boxes.forEach(function (box) {
      box.classList.add("visible");
    });
  });
}

// ---------- accordion: click a button to open or close the text under it ----------
function toggleAccordion(button) {
  button.classList.toggle("active");
  button.nextElementSibling.classList.toggle("open");
}

function setUpAccordion() {
  let buttons = document.querySelectorAll(".accordion-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleAccordion(button);
    });
  });
}

// ---------- menu button on mobile ----------
function setUpMenuButton() {
  let menuButton = document.querySelector(".menu-toggle");
  let menu = document.querySelector("nav");

  if (menuButton === null || menu === null) {
    return;
  }

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
}

setUpFadeIn();
setUpAccordion();
setUpMenuButton();
