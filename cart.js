


'use strict';

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
   

    // Load cart items from sessionStorage when the page loads
    loadCartItems();
}



function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerHTML;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerHTML;
    addItemToCart(title, price);
    updateCartTotal();
}

function addItemToCart(title, price) {
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartRowContents = `<div class="cart-row">
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger">Remove</button>
        </div>
    </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click',quantityChanged)
    saveCartItems();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    saveCartItems();
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = total + '$';

    // Save the updated cart total to sessionStorage
    sessionStorage.setItem('cartTotal', total.toString());
}

function saveCartItems() {
    let cartItems = [];
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let title = cartRow.getElementsByClassName('cart-item-title')[0].innerText;
        let price = cartRow.getElementsByClassName('cart-price')[0].innerText;
        let quantity = cartRow.getElementsByClassName('cart-quantity-input')[0].value;
        cartItems.push({ title, price, quantity });
    }
    // Save the cart items as JSON to sessionStorage
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadCartItems() {
    let cartItemsJson = sessionStorage.getItem('cartItems');
    let cartTotal = sessionStorage.getItem('cartTotal');
    if (cartItemsJson && cartTotal) {
        let cartItems = JSON.parse(cartItemsJson);
        let cartItemContainer = document.getElementsByClassName('cart-items')[0];
        cartItemContainer.innerHTML = '';
        cartItems.forEach((item) => {
            addItemToCart(item.title, item.price);
            let cartRow = cartItemContainer.lastElementChild;
            cartRow.getElementsByClassName('cart-quantity-input')[0].value = item.quantity;
        });
        document.getElementsByClassName('cart-total-price')[0].innerText = cartTotal + '$';
    }
}

// Load cart items from sessionStorage when the page loads
loadCartItems();


export {
    ready,
    addToCartClicked,
    addItemToCart,
    quantityChanged,
    removeCartItem,
    updateCartTotal,
    saveCartItems,
    loadCartItems
};

