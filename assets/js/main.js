$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
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
})