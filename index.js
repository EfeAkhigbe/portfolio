

let menu = document.getElementById("menu");
let closeIcon = document.getElementById("check");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
}

window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}