//nav-bar
 const $menu = document.querySelector('header nav');
    const $iconeMenu = document.querySelector('.menu');

    $iconeMenu.addEventListener('click', () => {
        $menu.classList.toggle('active')
    })

new WOW().init();


//slick-slider

$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev-slider'),
  nextArrow: $('.next-slider'),
});


$('.blog-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev-blog-slider'),
  nextArrow: $('.next-blog-slider'),
});

//fleche
$('#fleche_haut').click(function(){
    $('html,body').animate({
        scrollTop:'20px'
    },'slow');
});


//tooltip

$(document).ready(function() {
  $('.tooltip').tooltipster({
    contentCloning: true
});
 })