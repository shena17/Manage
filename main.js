// NAVIGATION BAR
const navbar = document.getElementById("nav-bar");
const menu = document.getElementById("nav");

const hideNav = document.querySelector(".nav-bar-toogle");
const hideMenu = document.querySelector(".links");

window.onscroll = function () {
  if (window.pageYOffset > menu.offsetTop) {
    navbar.classList.add("sticky");
    hideNav.setAttribute("aria-expanded", false);
    hideMenu.setAttribute("data-visible", false);
  } else {
    navbar.classList.remove("sticky");
  }
};

// INPUT FIELD

var error = document.getElementById("error");

function validate() {
  var input = document.getElementById("input").value;
  var textBox = document.querySelector("input");

  if (input.length == 0) {
    error.innerText = "Email required!";
    textBox.style.color = "var(--clr-pri-red)";
    textBox.style.border = "2px solid var(--clr-pri-red)";
    return false;
  }
  if (!input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    error.innerText = "Invalid email address";
    textBox.style.color = "var(--clr-pri-red)";
    textBox.style.border = "2px solid var(--clr-pri-red)";
    return false;
  }
  error.innerText = "";
  textBox.style.color = "var(--clr-pri-darkblue)";
  textBox.style.border = "0px";
  return true;
}
