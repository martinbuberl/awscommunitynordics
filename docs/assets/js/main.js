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

});
