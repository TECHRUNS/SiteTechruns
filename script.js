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
/* partie slide */
const monslide = document.querySelectorAll(".messlides");
point = document.querySelectorAll(".point");

let compteur = 1;
slidefun(compteur);
let timer = setInterval(autoslide, 5000);
function autoslide() {
  compteur += 1;
  slidefun(compteur);
}
function plusSlides(n) {
  compteur += n;
  slidefun(compteur);
  resetTimer();
}
function plusSlides(n) {
  compteur -= n;
  slidefun(compteur);
  resetTimer();
}
function currentSlide(n) {
  compteur += n;
  slidefun(compteur);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 5000);
}
function slidefun(n) {
  let i;
  for (i = 0; i < monslide.length; i++) {
    monslide[i].style.display = "none";
  }
  for (i = 0; i < point.length; i++) {
    point[i].classList.remove("active");
  }
  if (n > monslide.length) {
    compteur = 1;
  }
  if (n < 1) {
    compteur = monslide.length;
  }
  monslide[compteur - 1].style.display = "block";
  point[compteur - 1].classList.add("active");
}

/*fin partie slide*/
