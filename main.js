"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  console.log(target);
  console.log(link);
  if (link == null) {
    return;
  }

  goScrollToTarget(link);
});

//Handle scrolling when click on the contack_me btn

const contactMeBtn = document.querySelector(".home__contact");

contactMeBtn.addEventListener("click", () => {
  goScrollToTarget("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector("#home");
const home__container = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home__container.style.opacity = 1 - window.scrollY / homeHeight;
});

function goScrollToTarget(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
