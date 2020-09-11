var s = document.createElement("script");
s.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js";
s.onload = function (e) {
    $('head')
        .append('<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>')
        .append('<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>')
        .append('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css">')
        .append('<style type="text/css">#tsparticles{ position:absolute; width: 100%; height: 100%; background-image: url("//localhost:8888/html2/img/hourse.2a5a8bee.jpg"); background-repeat: no-repeat; background-size: cover; background-position: 50% 50%; }a.kw-open-modal:hover .overlay{z-index:2;}.kw-iframe-wrapper a{position: relative;}.overlay{position: absolute;z-index:-2; background-color:rgba(0,0,0,0.5);right:0;left:0;height:100%;width:100%;top:0;bottom:0;}.pd-container {width: 300px;height: 600px;position: relative;text-align: center;color: #fff;font-family: Arial;background: url(//localhost:8888/html2/img/hourse.2a5a8bee.jpg);}.kw-iframe-wrapper .kw-counter{display:none;z-index: 9;height:90px;text-align:center;position:absolute;font-size:30px;border-radius:50%;width:90px;}.kw-iframe-wrapper{display: flex;flex-direction: row;flex-wrap: wrap;justify-content: center;align-items: center;}.kw-iframe-wrapper img{width:100%;height:100%;}#kw-promo-div{width:40%;height:40%;margin:10px auto;position:relative;}.kw-promo-modal{padding:0;}.jquery-modal.blocker.current{z-index:2;}</style>');
        // .append('<script>$( document ).ready(function() { particlesJS("tsparticles", {"particles":{"number":{"value":4000,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});});</script>');
    $('#kw-promo-div').append(
        '<div class="kw-iframe-wrapper">' +
        '<div class="kw-counter"></div>' +
        '<a href="#ex1" rel="modal:open" class="kw-open-modal">' +
        '<div class="pd-container"><div id="tsparticles"></div></div>' +  
        '<div class="overlay"></div>' +
        '</a>' +
        '<iframe id="ex1" class="modal kw-promo-modal" style="max-width:90%;"src="//localhost:8888/html2"></iframe>' +
        '</div>'
    );

    $('.kw-iframe-wrapper .overlay').hover(function (e) {
        $('canvas').fadeIn();
        counter = 4;
        $('#tsparticles').append('<script>particlesJS("tsparticles", {"particles":{"number":{"value":600,"density":{"enable":false,"value_area":0}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":12},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.6974842464765024,"random":false,"anim":{"enable":true,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":1,"width":0},"move":{"enable":true,"speed":0.5,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":267.9854800594439,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}); </script>');
        $('.kw-counter').text(counter);
        myInterval = setInterval(function () {
            --counter;
            var loader_img = '<img src="//localhost:8888/html2/img/up_logo_f_color.gif" alt="">';
            $('.kw-counter').text('');
            if (counter > 0) {
                $('.kw-counter').append(loader_img).fadeIn();
            } else if (counter == 0) {
                $('.kw-open-modal').trigger('click');
                $('.kw-counter').fadeOut();
            }
        }, 1000);
    }, function (e) {
        clearInterval(myInterval);
        $('.kw-counter').text('').fadeOut();
    });
    $('.kw-iframe-wrapper .overlay').mouseout(function (e) {
        $('canvas').fadeOut();
    });
};

document.head.appendChild(s);
