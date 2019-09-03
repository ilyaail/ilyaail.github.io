(function($) {
$(document).ready(function(){

        $('.examples_slider').slick({
            slidesToShow: 4,
            dots: true,
            arrows: true,
            nextArrow: $('.next_button'),
            prevArrow: $('.prev_button'),
              responsive: [
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              ,
                breakpoint: 900,
                settings:{
                  slidesToShow: 2,
                  slidesToScroll: 2
                
              }
            }]
            
        });


        $('.hide_show').on('click', function(e){
 e.preventDefault();
             
               $('html, body').animate({
                opacity: 0,
                scrollTop: $("#work_examples").offset().top
               }, 700, function(){
                $('html, body').animate({
                  opacity: 1
                }, 700);
               });

   
                
             
            });

        });


 
//animate images on 1 screen
     window.onload = function(){
          
        $('.code_image').animate({ borderSpacing: -45 }, {
    step: function(now,fx) {
      $(this).css({'-webkit-transform': 'rotate(0deg)'});
      $(this).css({ '-moz-transform': 'rotate(0deg)'});
      $(this).css({'transform': 'rotate(0deg)'});
    },
    duration:'slow'
},'linear');

        $('.file_image').animate({ borderSpacing: 0 }, {
    step: function(now,fx) {
      // $(this).css({'-webkit-transform': 'rotate(0deg)'});
      // $(this).css({ '-moz-transform': 'rotate(0deg)'});
      // $(this).css({'transform': 'rotate(0deg)'});
      $(this).css({'right': '5%'});
    },
    duration:'slow'
},'linear');
    }
})(jQuery);


