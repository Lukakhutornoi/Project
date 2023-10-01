

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


next.addEventListener('click', function () {
  index++;
  changeSlide()
});

prev.addEventListener('click', function () {
  index--;
  changeSlide()
});


function changeSlide() {

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
// slider End





















function getmenu() {
  return fetch('Project/Beef burgers.json')
    .then(response => response.json());
}

function drawmenu(menu) {
  let slides = document.querySelector('.slides');

  menu.forEach(item => {
    let slide = document.createElement('div');
    slide.classList.add('slide', );
    slide.innerHTML = `
    <div class="dsp">
    <img
        class="bgfoto"
        src="${menu.item.image.scr}"
        alt=""
    />

    <p class="text">
          ${menu.item.text.name} <br>
     price: ${menu.item.text.price} <br>
     Contains:Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa reprehenderit nisi, sit odio rem minus non quaerat quidem mollitia? <br><br><br><br><br><br>
     <a href="order.html"> 
        <span class="order">
        <span class="white">ORDER</span> 
        </span> 
    </a>  </p>
        </div>
    `;

    slides.appendChild(slide);
  });
}

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



