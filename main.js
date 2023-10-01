'use strict'

// slider
// let burgersJson = fetch("https://raw.githubusercontent.com/Lukakhutornoi/Project/main/Beefburgers.json")
let burgersJson = fetch("http://localhost:5500/Beefburgers.json")

burgersJson
.then(response => response.json()).then(drawSlides)
.catch(console.log)


//variables
let slider = document.querySelector(".slider");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slides");
let index = 0;

function drawSlides(slides) {
    slides.menu.forEach((slide, index) => {

      console.log(slide)
      let html = `<div class="slide" id="slide${index+1}">
      <img src="${slide.image_src}" alt="${slide.name}" />
  </div>`
      slideContainer.insertAdjacentHTML("beforeEnd",html)
    })

    changeSlide();
}


next.addEventListener('click', function  {
  slides[index].classList.add('active');
})
//slider End


// getmenu()
//   .then(data => drawmenu(data))
//   .catch(error => console.error(error));



function myFunction() {
    var x = document.querySelector("nav")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}