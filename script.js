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
///////////////////////////////////////////////////////
////////////////text dissapear and apear effect/////////
////////////////////////////////////////////////////////
setTimeout(() => {
  heroTitle.classList.add("active");
}, 200);
setTimeout(() => {
  buttons.classList.add("buttons-active");
}, 700);
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
const initialCoord = aboutSection.getBoundingClientRect().top;
window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoord) header.classList.add("sticky");
  else header.classList.remove("sticky");
});
/////Intersection observer API
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => console.log(entry));
};
const obsOptions = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(aboutSection);
