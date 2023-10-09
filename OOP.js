'use strict'

class Drink {
    constructor(name,price,description) { // constructor - ეშვება როდესაც ეშვება new Person("Anna", 25)
        this.name = name;
        this.price = price;
        this.description = description
    }

    sayHello() {
        console.log(`drink: ${this.name} price: ${this.price}`);
    }
}

class SugarFreeDrink extends Drink { // აკავშირებს Person კლასთან და ამავდროულებს მის მეთოდებთან
    constructor(name, price,noSugar) { 
        super(name, price,description); // call parent constructor
        this.noSugar = noSugar;
    }

    study() {
        console.log(`${this.name} is sugar free`);
    }
}

    DRINKS:{
let cocacola = new SugarFreeDrink('Coca cola',2.00+'$','sugar free' )
let fanta = new Drink ('fanta',2.00 +'$' )

}


function drawDrinks(params) {
    let WRAP = document.getElementsByClassName('WRAP')
    let drinksWrap = document.createElement('div')
    DRINKS.forEach(() => {
        drink = ` <p class="text3">
        <span class="shop-item-title">${this.name}</span> <br>
        price: <span class="shop-item-price">${this.price}</span><br>
        contains:Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa reprehenderit nisi, sit
        odio rem minus non<br><br><br><br><br><br>
       
        <button class="btn btn-primary shop-item-button order">
       <span class="white"> Add to cart </span>
        </button>
    </p>
    </div>`
    drinksWrap.innerHTML= drink
    });
WRAP.append(drinksWrap)
}


// anna.hasOwnProperty("name"); // true 
// anna.hasOwnProperty("sayHello"); // false

// anna instanceof Student; // true
// anna instanceof Person; // true
// let anna = new Student("Anna", 25, 3.5); 
// let david = new Teacher("David", 20, "Math");  