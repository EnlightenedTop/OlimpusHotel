"use strict";
///////////////////////////////////////////////////
////////////DOM Selectors//////////////////////////
/////////////////////////////////////////////////////

const btnHero = document.querySelector(".btn-primary");
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");
const buttons = document.querySelector(".buttons");
const btnFeatures = document.querySelector(".features-buttons");
const btnAllFts = document.querySelectorAll(".btn-features");
const txtAllBox = document.querySelectorAll(".features-modal");
const aboutSection = document.querySelector(".features-section");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav-bar");
const allSections = document.querySelectorAll(".section");
///////////////////////////////////////////////////////
////////////////text dissapear and apear effect/////////
////////////////////////////////////////////////////////
setTimeout(() => {
  heroTitle.classList.add("active");
}, 200);
setTimeout(() => {
  buttons.classList.add("buttons-active");
}, 300);
///////////////////////////////////////////
/////////////////Features section modals///////////
/////////////////////////////////////////////////
btnFeatures.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-features");
  /////Safe guard////////////////////////////////
  if (!clicked) return;
  txtAllBox.forEach((m) => m.classList.remove("feature-modal-active"));
  btnAllFts.forEach((b) => b.classList.remove("btn-active"));
  ///////////////////////////////////////////////////////////
  clicked.classList.add("btn-active");
  document
    .querySelector(`.features-modal-${clicked.dataset.tab}`)
    .classList.add("feature-modal-active");
});
// window.setInterval(function () {
//   let randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);
//   let randomDeg = (min, (max) => Math.floor(Math.random() * (max - min)));
//   let randomColor = `rgb(${randomInt(0, 255)}, ${randomInt(
//     0,
//     255
//   )}, ${randomInt(0, 255)})`;
//   btn.style.backgroundColor = `linear-gradient(from top to left, ${randomColor} ${randomDeg}%, ${randomColor} ${randomDeg}%)`;
// }, 500);
/////////////////////sticky navigation
// const initialCoord = aboutSection.getBoundingClientRect().top;
// window.addEventListener("scroll", function (e) {
//   if (window.scrollY > initialCoord) header.classList.add("sticky");
//   else header.classList.remove("sticky");
// });
/////Intersection observer API sticky nav
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
};
const heroObserver = new IntersectionObserver(stickyNav, obsOptions);
heroObserver.observe(hero);
////////////////// reveal sections with observer api

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
console.log();
////////smooth scrolling
document.querySelector("nav-links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
