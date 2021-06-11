  
  // nav - bar
 const $menu = document.querySelector('header nav');
    const $iconeMenu = document.querySelector('.menu');
    $iconeMenu.addEventListener('click', () => {
        $menu.classList.toggle('active')
    })

  //tooltip


    tippy('.pages', { allowHTML: true, content: "<strong class='title-tooltip'> Pages </strong> <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.bandwidth', { allowHTML: true, content: "<strong class='title-tooltip'> Bandwith </strong> <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.storage', { allowHTML: true, content: "<strong class='title-tooltip'> Storage </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.customDomain', { allowHTML: true, content: "<strong class='title-tooltip'> Custom Domain </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.support', { allowHTML: true, content: "<strong class='title-tooltip'> Support </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.Galleries-Blogs', { allowHTML: true, content: " <strong class='title-tooltip'> Galleries Blogs </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.Unlimited-Bandwidth', { allowHTML: true, content: " <strong class='title-tooltip'> Unlimited Bandwidth </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.Unlimited-Storage', { allowHTML: true, content: " <strong class='title-tooltip'> Unlimited Storage </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.Unlimited-Contributors', { allowHTML: true, content: " <strong class='title-tooltip'> Unlimited Contributors </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.advanced', { allowHTML: true, content: " <strong class='title-tooltip'> Advanced Form builderBuilder </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.app', { allowHTML: true, content: " <strong class='title-tooltip'> Google ads & Mailchimp Sync</strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});
    tippy('.facebook-page', { allowHTML: true, content: " <strong class='title-tooltip'> publish to facebook pages </strong> <br>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste et aspernatur perferendis sequi veniam, voluptas possimus reiciendis deserunt quaerat omnis laborum. Voluptas non nostrum architecto! A praesentium similique facilis.", placement: 'bottom'});


  //wow js
 
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