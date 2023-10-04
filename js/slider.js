'use strict';

let burgersJson = fetch("http://localhost:5500/js/Beefburgers.json");

burgersJson
  .then(response => response.json())
  .then(drawSlides)
  .catch(console.log);

let slider = document.querySelector(".slider");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slides");
let index = 0;

function drawSlides(slides) {
  slides.menu.forEach((slide, index) => {
    let html = `<div class="slide" id="slide${index+1}">
      <img src="${slide.image_src}" alt="${slide.name}" />
    </div>`;
    slideContainer.insertAdjacentHTML("beforeEnd", html);
  });
  changeSlide();
}

next.addEventListener('click', function () {
  index++;
  changeSlide();
});

prev.addEventListener('click', function () {
  index--;
  changeSlide();
});

function changeSlide() {
  slides = document.querySelectorAll(".slide");
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index > slides.length - 1) {
    index = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
}

export { drawSlides, changeSlide };
