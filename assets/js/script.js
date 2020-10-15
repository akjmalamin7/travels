jQuery(document).ready(function(){

    // start hover menu
    $('ul.custom-hover li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });
    




    //start slick slider
      
        $('.home-slick-slider').slick({
            slidesToShow: 1,
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        });

              // our team
              jQuery('.our-team ').owlCarousel({
                items:1,
                loop:true,
                // margin:10,
                nav:false,
                // autoplay:true,
                autoplayTimeout:10000,
                dots:true,
                slideTransition:'linear',
                slideBy:1,
                // navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }

                }
            
            });
   

});