
$('#button').click(() => {
    $('html, body').animate({
        scrollTop: $('.ways').offset().top
    }, 1000);
});


$(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    navText: ['<img src="img/arrow1.png">', '<img src="img/arrow2.png">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});
