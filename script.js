const currentQuantityButton = document.getElementById('currentQuantity');
const cartQuantity = document.getElementById('cartQuantity');
const addToCartButton = document.getElementById('addToCart');
const addTwoItemsButton = document.getElementById('addTwoItems');
const resetCartButton = document.getElementById('resetCart');


let cartCount = 0;


function updateCartDisplay() {
    cartQuantity.textContent = `Items in Cart: ${cartCount}`;
}
currentQuantityButton.addEventListener('click', () => {
    logCartQuantity();
});


addToCartButton.addEventListener('click', () => {
    cartCount += 1;
    updateCartDisplay();
});


addTwoItemsButton.addEventListener('click', () => {
    cartCount += 2;
    updateCartDisplay();
});


resetCartButton.addEventListener('click', () => {
    cartCount = 0;
    updateCartDisplay();
});
