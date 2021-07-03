$('.owl-carousel').owlCarousel({
    loop: true,
    margin:20,
    padding:20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})