// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require pace.min.js
//= require bootstrap.min.js
//= require classie.js
//= require cbpAnimatedHeader.js
//= require wow.min.js
//= require_self


if (typeof jQuery !== 'undefined') {
    // INSPINIA Landing Page Custom scripts
    $(document).ready(function () {

        // Highlight the top nav as scrolling
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 80
        })

        // Page scrolling feature
        $('a.page-scroll').bind('click', function(event) {
            var link = $(this);
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top - 70
            }, 500);
            event.preventDefault();
        });

    });

// Activate WOW.js plugin for animation on scrol
    new WOW().init();
}
