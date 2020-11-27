$( window ).on( "load", function() {
    setTimeout(function() {
        $('.main-container').css({'opacity':'1'});
    }, 500)

    setTimeout(function() {
        $('.landing-border').addClass('loaded');
    }, 750)

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
    }, 1000)

});
