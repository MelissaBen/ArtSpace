
 const $menu = document.querySelector('header nav');
    const $iconeMenu = document.querySelector('.menu');

    $iconeMenu.addEventListener('click', () => {
        $menu.classList.toggle('active')
    })


// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});