const menuWhite = document.querySelector(".js-menu__white");
const menuMain = document.querySelector(".js-menu");
const menuLeft = document.querySelector("#menu-left");
const pageItem = document.querySelectorAll(".menu__page-item");
const aboutPage = document.getElementById("menu__about-page");
const soundPage = document.getElementById("menu__sound-page");
const imagePage = document.getElementById("menu__image-page");

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
  showPage(aboutPage);
}

init();
