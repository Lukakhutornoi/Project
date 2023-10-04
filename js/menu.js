'use strict';

function getmenu() {
  return fetch('http://localhost:5500/js/Beefburgers.json')
    .then(response => response.json());
}

function drawmenu(menu) {
  let menuHTML = document.querySelector('.list-of-items');
  menu.menu.forEach(item => {
    let slide = document.createElement('div');
    slide.classList.add('menu-item');
    slide.innerHTML = `
        <img class="bgfoto" src="${item.image_src}" alt="" />
        <div class="menu-item-text">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="sale">${item.sale}</p>
          <p class="price">${item.price}</p>
          <button class="add-to-cart">Add to cart</button>
        </div>
    `;
    menuHTML.appendChild(slide);
  });
}

export { getmenu, drawmenu };
