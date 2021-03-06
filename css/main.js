//fire off animation
var app = function () {
//    $('.food-icon').scrolling();
//    $('.food-icon').one('scrollin', function (event, $all_elements) {
        $('.food-icon').toggleClass('fade-out-top');
//    });
}

function windowSize() {
    windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}
windowSize();
$(window).resize(function () {
    windowSize();
});
if (windowWidth < 769) {
    $('.icons-row').children().removeClass('vh-center-container');
    $('.overlay h3').addClass('truncate');
    $('.overlay-scroll h3').addClass('truncate');
    $('.overlay-scroll h3').addClass('hide');
} else {
    $('.icons-row').children().addClass('vh-center-container');
    $('.overlay h3').removeClass('truncate');
    $('.overlay-scroll h3').removeClass('truncate');
    $('.overlay-scroll h3').removeClass('hide');
}

if (windowWidth < 668) {
    $('.overlay').css('visibility', 'hidden');
    $('.overlay-scroll').css('display', 'none');
    $('.mobile').css('display', 'block');
    $('.poweredby').css('margin-top', '0');
    //    $('overlay-scroll h3').addClass('truncate');
    //    $('.overlay-scroll').css('text-align', 'center'); 
    //    $('.overlay-scroll').css('height', '40px');
} else {
    //    $('.overlay-scroll h3').removeClass('hide');  
}
//if (windowWidth < 569) {
//    $('.overlay-scroll').css('text-align', 'center');  
//    $('.overlay-scroll h3').css('font-size', '2rem');    
//   } else {
//}


//sticky element
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top - 150;
    if (window_top > div_top) {
        $('.overlay').css('visibility', 'hidden');
        if (windowWidth > 667) {
            $('.overlay-scroll').animate({
                'top': '0'
            }, 360, 'swing');
            $('.overlay-scroll').show();
            $('.overlay-scroll').css('position', 'fixed');
        }
    } else {
        if (windowWidth > 667) {
            $('.overlay').css('visibility', 'visible');
            $('.overlay-scroll').animate({
                'top': '-160px'
            }, 1, 'swing');
            $('.overlay-scroll').css('position', 'relative');
            $('.overlay-scroll').hide();
        }
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