// cart list
// let cartIcon = document.querySelector('#bag-icon1');
let cart = document.querySelector('.cart-list');
// let closeCart = document.querySelector('#close-cart1');
// open cart list
// cartIcon.onclick = () => {
//     cart.classList.add('active');
// }
// close cart list
// closeCart.onclick = () => {
//     cart.classList.remove('active');
// }

$(document).ready(function() {
    $(".cart-list").hide();
    $("#bag-icon").click(function() {
        $(".cart-list").show();
    });
    $(".close").click(function() {
        $(".cart-list").hide('slow');
    })

})



