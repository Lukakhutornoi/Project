'use strict'






















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




>>>>>>> fe5e1e95d17383dcaffd97881ea2b3caace1876e


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