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

//Go to #home when top__btn clicked
const arrow__up = document.querySelector(".arrow__up");
document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight / 2) {
    arrow__up.classList.remove("visible");
  } else {
    arrow__up.classList.add("visible");
  }
});

arrow__up.addEventListener("click", () => {
  goScrollToTarget("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  const activeadd = e.target;
  console.log(activeadd);
  if (filter == null) {
    return;
  }

  //same
  //for(let project of projects){}
  //for(let i = 0;i<projects.length;i++){
  //  project = projects[i];
  //}

  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    projectContainer.classList.remove("anim-out");
  }, 300);
});

// function
function goScrollToTarget(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
