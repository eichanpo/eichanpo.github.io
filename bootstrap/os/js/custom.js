window.onscroll = function() {myFunction()};
var nav = document.getElementById("stickyTop");
var sticky = nav.offsetTop;

function myFunction() {
    if(window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}