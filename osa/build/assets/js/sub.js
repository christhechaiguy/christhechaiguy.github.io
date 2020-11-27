$( window ).on( "load", function() {
    setTimeout(function() {
        $('.main-container').css({'opacity':'1'});
    }, 500)

    setTimeout(function() {
        $('.landing-border').addClass('loaded');
    }, 750)

});
