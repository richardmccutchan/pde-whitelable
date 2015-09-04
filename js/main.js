//fire off animation
var app = function () {
    $('.food-icon').scrolling();
    $('.food-icon').one('scrollin', function (event, $all_elements) {
        $('.food-icon').toggleClass('fade-out-top');
    });
}

function windowSize() {
    windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}
windowSize();
$(window).resize(function () {
    windowSize();
});
if (windowWidth < 768) {
    $('.icons-row').children().removeClass('vh-center-container');
    $('h3').addClass('truncate');
} else {
    $('.icons-row').children().addClass('vh-center-container');
    $('h3').removeClass('truncate');
}

//sticky element
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top + (-160);
    if (window_top > div_top) {
        $('.overlay').css('visibility', 'hidden');
        $('.overlay-scroll').animate({
            "top": "0",
            "height": 130
        }, 360, "swing");
        $('.overlay-scroll').show();
        $('.overlay-scroll').css('position', 'fixed');
    } else {
        $('.overlay').css('visibility', 'visible');
        $('.overlay-scroll').animate({
            "top": "-160px",
            "height": 130
        }, 1, "swing");
        $('.overlay-scroll').hide();
        $('.overlay-scroll').css('position', 'relative');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

//slider
$(function () {
    $(".rslides").responsiveSlides({
        auto: true, // Boolean: Animate automatically, true or false
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000, // Integer: Time between slide transitions, in milliseconds
        pager: false, // Boolean: Show pager, true or false
        nav: false, // Boolean: Show navigation, true or false
        random: true, // Boolean: Randomize the order of the slides, true or false
        pause: false, // Boolean: Pause on hover, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "Previous", // String: Text for the "previous" button
        nextText: "Next", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "rslides", // String: Change the default namespace used
        before: function () {}, // Function: Before callback
        after: function () {} // Function: After callback
    });
});

$(document).ready(app);