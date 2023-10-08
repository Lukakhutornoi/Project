if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}
ready()
function ready() {
 let removeCartItemButtons = document.getElementsByClassName('btn-danger')
  console.log(removeCartItemButtons);
 for ( let i = 0;i < removeCartItemButtons.length;i++){
    let button = removeCartItemButtons[i]
    button.addEventListener('click',removeCartItem)

    let quantityinputs = document.getElementsByClassName('cart-quantity-input')
    for (let i =0; i < quantityinputs.length; i++) {
        let input = quantityinputs[i]
        input.addEventListener('change', quantityChanged)
    }

  }
  let addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (let i =0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener('click',addToCartClicked )
  }
}


function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerHTML;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerHTML;
    //let image = shopItem.getElementsByClassName('shop-item-image')[0].
    console.log(title,price,);
    addItemToCart(title,price,/*image*/ )
    updateCartTotal()
}

function addItemToCart(title,price,/*image*/) {
    let cartRow = document.createElement('div')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartRowContents = `<div class="cart-row">
    <div class="cart-item cart-column">
              
            <span class="cart-item-title">${title}</span>
    </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger">Remove</button>
        </div>    
    </div>`
    cartRow.insertAdjacentElement('beforeend', cartRowContents)
    cartItems.append(cartRow)


}
    


function quantityChanged(event) {
   let input = event.target
   if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
 }
updateCartTotal()
}

function removeCartItem(event) {
    let buttonCliked = event.target
    buttonCliked.parentElement.parentElement.remove()
    updateCartTotal()
}




function updateCartTotal() {
   let cartItemContainer = document.getElementsByClassName('cart-items')[0]
   let cartRows = cartItemContainer.getElementsByClassName('cart-row')
   let  total = 0
   for ( let i = 0;i < cartRows.length;i++){
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    let price = parseFloat(priceElement.innerText.replace('$',''))
    let quantity = quantityElement.value
    total = total + (price * quantity) / 2
   }
total = Math.round(total * 100) / 100 
document.getElementsByClassName('cart-total-price')[0].innerText =  total + '$'
}