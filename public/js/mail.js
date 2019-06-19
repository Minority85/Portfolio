$(document).ready(function () {

    $('#bt1').click(function () {

        const message = $('#message').val();
        const subject = $('#subject').val();
        const email = $('#email').val();
        const name = $('#name').val();

        $('#mail').attr('action',
            'mailto:azbryant85@gmail.com?subject=' + subject + '&body=' + message);
        $('#mail').submit();
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        items: 4,
        dots: false,
        touchDrag: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 992 up
            992: {
                items: 3,
            },
            // breakpoint from 1200 up
            1200: {
                items: 4,
            },
        }
    });
});