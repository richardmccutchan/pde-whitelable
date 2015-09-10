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
    $('.powered-content').css('display', 'none');
    $('.poweredby').css('margin-top', '0');
    $('.ff-adjust').css('text-align', 'center');
    $('.ff-adjust').css('width', '100%');
} else {

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

$('.view').bind('inview', function(event, visible) {
      if (visible) {
          $(this).stop().animate({ opacity: 1 });
          $('.map-container').addClass('one-by-one');
          $('.map-container').addClass('fade-out-top');
      } else {
          $(this).stop().animate({ opacity: 0 });
          $('.map-container').removeClass('one-by-one');
          $('.map-container').removeClass('fade-out-top');
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


if (windowWidth < 1025) {
   $('.overlay h3').addClass('truncate');
   
} else {
    $('.overlay h3').removeClass('truncate');
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