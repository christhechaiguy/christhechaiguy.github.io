$(function() {

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
