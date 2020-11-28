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



function animatedScroll() {
    var scrolledY = $(window).scrollTop();

        if (scrolledY > 55) {
            $(".side-panel #logo").addClass("scrolled");
            $(".menu-toggle").addClass("scrolled");
        } else {
            $(".side-panel #logo").removeClass("scrolled");
            $(".menu-toggle").removeClass("scrolled");
        }
    
};

$(window).bind('scroll',function(e){

    if ( $(window).width() <= 740 ) {
        animatedScroll();
    }

});

