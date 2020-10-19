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

         // hot slider
         jQuery('.add-hot-slider-area').owlCarousel({
            items:2,
            loop:true,
            autoplay:true,
            nav:false,
            navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            margin:10,
            dots:false,
            autoplayTimeout:7000,
            smartSpeed:750,
            slideBy:1,
            responsive:{
                0:{
                    items:1
                },
                992:{
                    items:2
                }

            }
          

        });
              // our team
              jQuery('.our-team ').owlCarousel({
                items:1,
                loop:true,
                // margin:10,
                nav:false,
                autoplay:true,
                autoplayTimeout:5000,
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

                // partner logo
                jQuery('.partner-logo').owlCarousel({
                    items:7,
                    loop:true,
                    // margin:10,
                    nav:false,
                    autoplay:true,
                    autoplayTimeout:7000,
                    dots:false,
                    smartSpeed:750,
                    autoplayHoverPause:true,
                    slideBy:3,
                    // navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
                    responsive:{
                        0:{
                            items:3
                        },
                        400:{
                            items:4
                        },
                        576:{
                            items:5
                        },
                        767:{
                            items:6
                        },
                        992:{
                            items:8
                        }

                    }
                
                });

               
   
    //mixitup
    var mixer = mixitup('.latest-product');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
    //Counter up
    jQuery('.countUp').counterUp({
        delay: 10,
        time: 1000
    });

});