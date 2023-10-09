



'use strict'

// slider

function fetchBurgersData() {
  return new Promise((resolve, reject) => {
    fetch("https://raw.githubusercontent.com/Lukakhutornoi/Project/main/Beefburgers.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

fetchBurgersData()
  .then(drawSlides)
  .catch(error => {
    console.error(error);
  });

//variables
  let slider = document.querySelector(".slider");
 let next = document.querySelector("#next");
 let prev = document.querySelector("#prev");
 let slides = document.querySelectorAll(".slide");
 const slideContainer = document.querySelector(".slides");
 let index = 0;
   /*<div class=" slide shop-item" id="slide${index+1}">
                                                                          
      <img class="bgfoto shop-item-image"
          src="${slide.image_src}" alt="${slide.name}" />


          
      <p class="text ">
          <span class="shop-item-details">
          <span class="shop-item-title">${slide.name}</span> <br>
          price:<span class="shop-item-price">${slide.price}</span>      <br>
          contains:${slide.contains} <br><br><br><br><br><br>
          <button class="btn btn-primary shop-item-button">
          Add to cart
          </button>
          </span>
      </p>

  </div> */
 function drawSlides(slides) {
    slides.menu.forEach((slide, index) => {                                          
      console.log(slide)
                                                                //      let html2 = `<div class="slide" id="slide${index+1}">
                                                                //      <img src="${slide.image_src}" alt="${slide.name}" />
                                                                // </div>`
      let html = `
      <div class="dsp slide shop-item">

    <img class="Sbgfoto"
        src="${slide.image_src}"
        alt="" />

   
    <div/>
      `
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

//slider End




// getmenu()
//   .then(data => drawmenu(data))
//   .catch(error => console.error(error));


//cart

//cart







//closures

var myFunction = (function() {
  var x = document.querySelector("nav");
  var isNavVisible = false;

  return function() {
    if (isNavVisible) {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    isNavVisible = !isNavVisible;
  };
})();

//closures

function validate() {
  let mail = document.getElementById("text").value;
  let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
  
   if(regx.test(mail)){
    alert('You have provided a valid Email ID')
    return true
  }
  else{
    alert('Sorry incorrect Email ID!')
    return false;
    
  }
}



// აქ გავაკეთე შეკვეთის პროცესის სიმულაცია სტატუსი complete ზე რომ გადავა კიდევ ტუ დააჭერთ გეტყვით რომ უკვე შესრულებულია შკვეთა


let orderStatus = "pending";

function updateStatus(status) {
    document.getElementById("status").textContent = `Order Status: ${status}`;
}

document.getElementById("startOrder").addEventListener("click", () => {
    if (orderStatus === "complete") {
        alert("Order is already complete!");
        return;
    }
    
    orderStatus = "in-progress";
    updateStatus("In Progress");
    
    setTimeout(() => {
        if (orderStatus === "in-progress") {
            orderStatus = "complete";
            updateStatus("Complete");
        }
    }, 3000); 
});

document.getElementById("cancelOrder").addEventListener("click", () => {
    if (orderStatus === "complete") {
        alert("order canceld.stopping order processing you can remove items from the cart or order again");
        return;
    }
    
    orderStatus = "canceled";
    updateStatus("Canceled");

    while (true) {

      
    
      if (orderStatus === "complete") {
        console.log("Order is complete. Ready for delivery.");
        break; 
      }
    
    
    
      
      if (orderStatus === "pending") {
        orderStatus = "in-progress";
      } else if (orderStatus === "in-progress") {
        orderStatus = "complete";
      } else if (orderStatus === 'canceled'){
        orderStatus = 'canceld'
      }

    }
});





// export {
//   fetchBurgersData,
//   drawSlides,
//   slider,
//   next,
//   prev,
//   slides,
//   slideContainer,
//   index,
//   changeSlide,
//   validate,

// };
 


