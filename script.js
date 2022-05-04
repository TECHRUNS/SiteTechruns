/*const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.remove("fa-times");
  navbar.classList.toggle("active");
};*/

/* nav close */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* remove menu mobile */

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* show scroll */

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/* scroll selection active link */
const sections = document.querySelectorAll("section[id]");
function scrolActive() {
  const scroll = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav_menu a[href*=` + sectionId + `]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav_menu a[href*=` + sectionId + `]`)
        .classList.remove("active-link");
    }
  });
}
/*window.addEventListener("scroll", scrollActive);

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}*/
