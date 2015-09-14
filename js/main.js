function windowSize() {
    windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}
windowSize();
$(window).resize(function () {
    windowSize();
    
});

if (windowWidth < 767) {
    $('.icons-row').children().removeClass('vh-center-container');
} else {
    $('.icons-row').children().addClass('vh-center-container');
}

if (windowWidth < 691) {
    $('.overlay').css('visibility', 'hidden');
    $('.overlay-scroll').css('display', 'none');
    $('.pdv-mob').css('display', 'block');
    $('.mobile').css('display', 'block');
    $('.powered-content').css('display', 'none');
    $('.poweredby').css('margin-top', '0');
    $('.ie10up').addClass('wide-column-content');
    } else {
        $('.pdv-mob').css('display', 'none');
        $('.ie10up').removeClass('wide-column-content')
    }
//viewport animation
$('.icons-row').bind('inview', function(event, visible) {
      if (visible) {
          $(this).stop().animate({ opacity: 1 });
          $('.food-icon').addClass('fade-out-top');
      } else {
          $(this).stop().animate({ opacity: 0 });
          $('.food-icon').removeClass('fade-out-top');
      }
});

$('.slider-bottom').bind('inview', function(event, visible) {
      if (visible) {
          $(this).stop().animate({ opacity: 1 });
          
      } else {
          $(this).stop().animate({ opacity: 0 });
      }
});

$('.imprint').bind('inview', function(event, visible) {
      if (visible) {
          $(this).stop().animate({ opacity: 1 });
          
      } else {
          $(this).stop().animate({ opacity: 0 });
      }
});


//if (windowWidth < 737) {
//    $('.overlay h1').addClass('truncate');
//    
//} else {
//    $('.overlay h1').removeClass('truncate');
//}

if (windowWidth < 735) {
    $('.hide-column-content').addClass('powered-hidden');
   } else {
    $('.hide-column-content').removeClass('powered-hidden');
}

//sticky element
$(function () {
    $('.overlay').sticky({
        topSpacing: 0
    });
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