(function(a) {
    if (a(".app-screen-carousel").length) {
        a(".app-screen-carousel").owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            dots: true,
            autoWidth: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: true
                },
                575: {
                    items: 1,
                    dots: false,
                    nav: true
                },
                600: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        })
    }
})(jQuery);