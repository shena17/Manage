const navbtn = document.querySelector(".nav-bar-toogle");
const menu = document.querySelector(".links");

navbtn.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");

  if (visibility == "false") {
    menu.setAttribute("data-visible", true);
    navbtn.setAttribute("aria-expanded", true);
  } else if (visibility == "true") {
    menu.setAttribute("data-visible", false);
    navbtn.setAttribute("aria-expanded", false);
  }
});
