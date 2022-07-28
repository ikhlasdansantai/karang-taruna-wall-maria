const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const navLinkMobile = document.getElementsByClassName("nav-links-mobile")[0];

hamburgerMenu.addEventListener("click", () => {
  navLinkMobile.classList.toggle("nav-show");
  if (navLinkMobile.classList.contains("nav-show") === true) {
    disableScrolling();
    hamburgerMenu.classList.add("hamburger-menu-click");
  } else {
    enableScrolling();
    hamburgerMenu.classList.remove("hamburger-menu-click");
  }
});

let scrollX = window.scrollX;
let scrollY = window.scrollY;

function disableScrolling() {
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}
function enableScrolling() {
  window.onscroll = function () {};
}
