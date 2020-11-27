$(function() {

    //lottie declaration
    lottie.loadAnimation({
        container: document.getElementById('osa-splash'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'assets/lottie/osa-splash.json' // the path to the animation json
    });


    $mobileMenuToggled = false;

    $('.menu-toggle').click(function() {
        if ( $mobileMenuToggled == false ) {
            $('.navigation-container').addClass('toggled');
            $('.menu-toggle').addClass('toggled');

            $mobileMenuToggled = true;
        } else {
            $('.navigation-container').removeClass('toggled');
            $('.menu-toggle').removeClass('toggled');
            
            $mobileMenuToggled = false;
        }
    });

});


$( window ).on( "load", function() {
    setTimeout(function() {
        $('.splash-wrapper').css({'opacity':'0'});
    }, 3000)

    setTimeout(function() {
        $('.main-container').css({'opacity':'1'});
    }, 3250)

    setTimeout(function() {
        $('.landing-border').addClass('loaded');
    }, 3500)




    setTimeout(function() {
        var duration = 150;
        $('.navigation-list ul li').each(function(i) {
            var $item = $(this);
            setTimeout(function() {
            $item.css({
                'opacity': 1,
                'transform': 'translateY(0)'
            });
            }, duration*i);
        });
    }, 3500)



});
