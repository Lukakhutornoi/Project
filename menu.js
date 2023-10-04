'use strict';

function getmenu() {
  return fetch('http://localhost:5500/Beefburgers.json')
    .then(response => response.json());
}

function drawmenu(menu) {
  let slides = document.querySelector('.slides');
  menu.menu.forEach(item => {
    let slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `
      <div class="dsp">
        <img class="bgfoto" src="${item.image_src}" alt="" />
        <p class="text">
          ${item.contains} <br>
          price: ${item.price} <br>
          Contains: Lorem ipsum...
          <a href="order.html"> 
            <span class="order">
              <span class="white">ORDER</span> 
            </span> 
          </a>
        </p>
      </div>
    `;
    slides.appendChild(slide);
  });
}

export { getmenu, drawmenu };
