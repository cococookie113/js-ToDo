const menuWhite = document.querySelector(".js-menu__white");
const menuMain = document.querySelector(".js-menu");
const menuLeft = document.querySelector("#menu-left");
const pageItem = document.querySelectorAll(".menu__page-item");
const aboutPage = document.getElementById("menu__about-page");
const soundPage = document.getElementById("menu__sound-page");
const imagePage = document.getElementById("menu__image-page");
const aboutSelect = document.querySelector("#menu__list-about");
const soundSelect = document.querySelector("#menu__list-sound");
const imageSelect = document.querySelector("#menu__list-image");

function showPage(pageName) {
  pageItem.forEach(function (page) {
    page.style.display = "none";
  });
  pageName.style.display = "block";
}

function showMenu() {
  menuMain.style.display = "flex";
}

function closeMenu() {
  menuMain.style.display = "none";
}

function init() {
  menuWhite.addEventListener("click", showMenu);
  menuLeft.addEventListener("click", closeMenu);
  aboutSelect.addEventListener("click", function () {
    showPage(aboutPage);
  });
  soundSelect.addEventListener("click", function () {
    showPage(soundPage);
  });
  imageSelect.addEventListener("click", function () {
    showPage(imagePage);
  });
  showPage(aboutPage);
}

init();
