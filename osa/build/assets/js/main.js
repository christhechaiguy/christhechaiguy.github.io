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