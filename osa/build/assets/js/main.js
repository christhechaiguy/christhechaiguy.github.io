$(function() {

    //lottie declaration
    lottie.loadAnimation({
        container: document.getElementById('osa-splash'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'assets/lottie/osa-splash.json' // the path to the animation json
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

});
