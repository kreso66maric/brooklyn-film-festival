  // Scrollspy fluide
        $(function() {
            $('header a').on('click', function(e) {
                e.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000, function() {
                    window.location.hash = hash;
                });
            });
        });

// show and hide menu

$(document).ready(function(){

    "use strict";

    $(window).scroll(function(){

        "use strict";

        if($(window).scrollTop() < 80){

            $(".header").css({
                "margin-top": "-100px",
                "opacity": "0.5"
            });
        } else{
            $(".header").css({
                "margin-top": "0px",
                "opacity": "1",
                "transition": "1s"
            });
        }
    });
});