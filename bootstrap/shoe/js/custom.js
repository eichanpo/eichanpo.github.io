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

// end sticky bar

// start for promo.html
$(function() {
    $("#div").show();
    $("#div-men").hide();
    $("#div-women").hide();
    $("#div-kids").hide();

    $(".men").click(function() {
        $("#div").hide();
        $("#div-women").hide();
        $("#div-kids").hide();
        $("#div-men").show('slow');
    });
    $(".women").click(function() {
        $("#div").hide();
        $("#div-men").hide();
        $("#div-kids").hide();
        $("#div-women").show('slow');
    })
    $(".kids").click(function() {
        $("#div").hide();
        $("#div-men").hide();
        $("#div-women").hide();
        $("#div-kids").show('slow')
    })
    $(".all").click(function () {
       
        $("#div-men").hide();
        $("#div-women").hide();
        $("#div-kids").hide();
        $("#div").show('slow');
      });
});