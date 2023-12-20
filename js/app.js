let cartQuantity = 0;

let showCart = document.querySelector('.js-showcart');
showCart.addEventListener('click', () =>{
    console.log(`cart quantity, ${cartQuantity}`);
});

let addCart = document.querySelector('.js-add-to-cart');
addCart.addEventListener('click', () =>{
    cartQuantity +=1;
    console.log(`cart quantity, ${cartQuantity}`);
});

let addTwoCart = document.querySelector('.js-add-two');
addTwoCart.addEventListener('click', () =>{
    cartQuantity +=2;
    console.log(`cart quantity, ${cartQuantity}`);
});

let addThreeCart = document.querySelector('.js-add-three');
addThreeCart.addEventListener('click', () =>{
    cartQuantity +=3;
    console.log(`cart quantity, ${cartQuantity}`);
});

let resetCart = document.querySelector('.js-reset-cart');
resetCart.addEventListener('click', () =>{
    cartQuantity = 0;
    console.log(`cart quantity, ${cartQuantity}`);
});