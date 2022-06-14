"use strict";
///////////////////////////////////////////////////
////////////DOM Selectors//////////////////////////
/////////////////////////////////////////////////////

const btnHero = document.querySelector(".btn-primary");
const hero = document.querySelector(".hero");
const btnFeatures = document.querySelector(".features-buttons");
const btnAllFts = document.querySelectorAll(".btn-features");
const txtAllBox = document.querySelectorAll(".features-modal");
///////////////////////////////////////////////////////
////////////////text dissapear and apear effect/////////
////////////////////////////////////////////////////////
setTimeout(() => {
  hero.classList.add("active");
}, 200);

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
