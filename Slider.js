


'use strict'

// slider
export let burgersJson = fetch("https://raw.githubusercontent.com/Lukakhutornoi/Project/main/Beefburgers.json")
// let burgersJson = fetch("http://localhost:5500/Beefburgers.json")

export default burgersJson
.then(response => response.json()).then(drawSlides)
.catch(console.log)


//variables
export  let slider = document.querySelector(".slider");
export let next = document.querySelector("#next");
export let prev = document.querySelector("#prev");
export let slides = document.querySelectorAll(".slide");
export const slideContainer = document.querySelector(".slides");
export let index = 0;

export function drawSlides(slides) {
    slides.menu.forEach((slide, index) => {

      console.log(slide)
                                                                 //     let html2 = `<div class="slide" id="slide${index+1}">
                                                                //     <img src="${slide.image_src}" alt="${slide.name}" />
                                                               // </div>`


      let html = `
      <div class=" slide">

      <img class="bgfoto"
          src="${slide.image_src}" alt="${slide.name}" />

      <p class="text">
          ${slide.name} <br>
          price: <span class="linethru">8.50 </span>/ 7.00$ <br>
          contains:${slide.contains} <br><br><br><br><br><br>
          <a href="order.html">
              <span class="order">
                  <span class="white">ORDER</span>
              </span>
          </a>
      </p>

  </div>`
      slideContainer.insertAdjacentHTML("beforeEnd",html)
    })

    changeSlide();
}

 next.addEventListener('click', function () {
  index++;
  changeSlide()
});

prev.addEventListener('click', function () {
  index--;
  changeSlide()
});

export function changeSlide() {
  slides = document.querySelectorAll(".slide"); // count slides
  if(index < 0) {
    index = slides.length -1;
  }
  if(index > slides.length -1) {
    index= 0;
  }
  for(let i = 0;i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');

}

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


let email = document.getElementById('#email').value;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email)) {
  alert('Invalid email format.');
}