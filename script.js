const monslide = document.querySelectorAll(".messlides");
const form1 = document.getElementById("btn1");
const form2 = document.getElementById("btn2");
const formulaire1 = document.querySelector(".form1");
const formulaire2 = document.querySelector(".form2");

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

// Partie formulaire

form1.addEventListener("click", () => {
  formulaire1.classList.add("formvisible");
});
form1.addEventListener("click", () => {
  formulaire2.classList.remove("formvisible");
});
form2.addEventListener("click", () => {
  formulaire2.classList.add("formvisible");
});
form2.addEventListener("click", () => {
  formulaire1.classList.remove("formvisible");
});

// fin formulaire
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

/* partie slide */

let compteur = 1;
function_slide(compteur);
let temps = setInterval(autoslide, 5000);
function autoslide() {
  compteur += 1;
  function_slide(compteur);
}
function plusSlides(n) {
  compteur += n;
  function_slide(compteur);
  resetTemps();
}
function currentSlide(n) {
  compteur += n;
  function_slide(compteur);
  resetTemps();
}
function resetTemps() {
  clearInterval(temps);
  temps = setInterval(autoslide, 5000);
}
function function_slide(n) {
  let i;
  for (i = 0; i < monslide.length; i++) {
    monslide[i].style.display = "none";
  }
  if (n > monslide.length) {
    compteur = 1;
  }
  if (n < 1) {
    compteur = monslide.length;
  }
  monslide[compteur - 1].style.display = "none";
}

/*fin partie slide*/
