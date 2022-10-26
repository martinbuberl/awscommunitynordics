jQuery(function ($) {

    $("#schedule-day-1").show();
    $("#schedule-day-2").hide();

    /* ----------------------------------------------------------- */
    /*  Event counter
    /* -----------------------------------------------------------*/

    if ($('.countdown').length > 0) {
        $(".countdown").jCounter({
            date: '10 December 2022 10:00:00',
            timezone: "Gulf Standard Time",
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
    particlesJS.load('particles-js', 'assets/particlesJsConfig.json', function() {});

    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 900,
        startDelay: 20,
        loop: true,
    });

    /**-------------------------------------------------
     * Event Schedule buttons
     *----------------------------------------------------**/

    $("#schedule-day-1-btn").click(function() {
        $("#schedule-day-1").show();
        $("#schedule-day-2").hide();
    });

    $("#schedule-day-2-btn").click(function() {
        $("#schedule-day-2").show();
        $("#schedule-day-1").hide();
    });

});
