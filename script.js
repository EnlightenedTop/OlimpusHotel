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
const allBtnBook = document.querySelectorAll(".btn-book");
const overlay = document.querySelector(".overlay");
const allModals = document.querySelectorAll(".modal");
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
history.scrollRestoration = "manual";
document.querySelector(".nav-links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
////////Modal apear when the button is clicked

const slides = document.querySelectorAll(".slide");
const slideBtnLeft = document.querySelector(".slider-btn-left");
const slideBtnRight = document.querySelector(".slider-btn-right");
const dotContainer = document.querySelector(".dots");

/////////////////
////////////////
/////////////////
const createDots = function () {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots_dot" data-slide='${i}'></button>`
    );
  });
};
createDots();
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
let curSlide = 0;
const maxSlides = 3;

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlides - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide < 1) {
    curSlide = maxSlides - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

slideBtnRight.addEventListener("click", nextSlide);
slideBtnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

////////Modal showup

allBtnBook.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    overlay.classList.remove("hidden");
    const pressedBtn = e.target.dataset.btn;
    console.log(pressedBtn);
    document.querySelector(`.modal--${pressedBtn}`).classList.remove("hidden");
    document
      .querySelector(".btn-close-modal")
      .addEventListener("click", function (e) {
        overlay.classList.add("hidden");
        document.querySelector(`.modal--${pressedBtn}`).classList.add("hidden");
      });
  });
});
//////////click on the image to make the image bigger

const allImg = document.querySelectorAll(".gods-room-img");
const imgOverlay = document.querySelector(".img-overlay");
allImg.forEach(function (img) {
  img.addEventListener("click", function (e) {
    const pressedImg = e.target.getAttribute("src");

    console.log(pressedImg);
    imgOverlay.classList.remove("hidden");
    overlay.classList.remove("hidden");
    imgOverlay.style.backgroundImage = "url(" + pressedImg + ")";
  });
});
document
  .querySelector(".img-overlay-close")
  .addEventListener("click", function () {
    imgOverlay.classList.add("hidden");
    overlay.classList.add("hidden");
    imgOverlay.style.backgroundImage = "";
  });
