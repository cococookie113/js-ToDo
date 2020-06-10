const menuWhite = document.querySelector(".js-menu__white");
const menuMain = document.querySelector(".js-menu");
const menuLeft = document.querySelector("#menu-left");

function showMenu() {
  menuMain.style.display = "flex";
}

function closeMenu() {
  menuMain.style.display = "none";
}

function init() {
  menuWhite.addEventListener("click", showMenu);
  menuLeft.addEventListener("click", closeMenu);
}

init();
