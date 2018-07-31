$(document).ready(function () {

//slider
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
        // nextArrow: '<button type="button" class="slick-next"><img src="assets/images/temp/arrow-right.png" alt="Next"></button>',
        // prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/temp/arrow-left.png" alt="Prew"></button>'
    });

//slider buttons
    $('.arrow-prev').on('click',function () {
        $('.slick-prev').click();
    });
    $('.arrow-next').on('click',function () {
        $('.slick-next').click();
    });

//scrolling
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1100);
        }
        return false;
    });
    
});