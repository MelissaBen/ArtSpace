  
  // nav - bar
    const $menu = document.querySelector('header nav');
    const $iconeMenu = document.querySelector('.menu');
    $iconeMenu.addEventListener('click', () => {
    $menu.classList.toggle('active')
    })


  //wow js 
 new WOW().init();


//fleche
$('#fleche_haut').click(function(){
    $('html,body').animate({
        scrollTop:'20px'
    },'slow');
});



