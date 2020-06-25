

$('.testi').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    navText: ['<i class="fa fa-chevron-left font_35" aria-hidden="true"></i>','<i class="fa fa-chevron-right font_35" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

    $(window).scroll(function(){

        var top = $(window).scrollTop();
        if(top>=60){
            $("#navstart").addClass('secondary-dark-blue-bg');
            $("#navstart").removeClass('custom_nv_bg_col');
        }

        else
            if($("#navstart").hasClass('secondary-dark-blue-bg')){
                $("#navstart").removeClass('secondary-dark-blue-bg');
                $("#navstart").addClass('custom_nv_bg_col');
            }
    });