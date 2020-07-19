jQuery(function ($) {

    /* ----------------------------------------------------------- */
    /*  Event counter
    /* -----------------------------------------------------------*/

    if ($('.countdown').length > 0) {
        $(".countdown").jCounter({
            date: '28 August 2020 10:00:00',
            timezone: "Europe/Paris",
            fallback: function () {
                console.log("count finished!")
            }
        });
    }

    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
    $(window).on('scroll', function () {

        /**Fixed header**/
        if ($(window).scrollTop() > 250) {
            $('.header').addClass('sticky fade_down_effect');
        } else {
            $('.header').removeClass('sticky fade_down_effect');
        }
    });


    /**-------------------------------------------------
     * Canvas
     *----------------------------------------------------**/
    particlesJS.load('particles-js', 'assets/particlesJsConfig.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // | 28th & 29th of August 2020
    //  on middle east and north africa
    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 900,
        startDelay: 20,
        loop: true,
    });
});
