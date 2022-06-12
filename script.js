"use strict";
////////////////////random color generator///////////////////////////

const btn = document.querySelector(".btn-primary");

window.setInterval(function () {
  let randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  let randomDeg = (min, (max) => Math.floor(Math.random() * (max - min)));
  let randomColor = `rgb(${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )}, ${randomInt(0, 255)})`;
  btn.style.backgroundColor = `linear-gradient(from top to left, ${randomColor} ${randomDeg}%, ${randomColor} ${randomDeg}%)`;
}, 500);
