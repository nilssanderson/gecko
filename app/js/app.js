$(document).ready(function(){

    // Apply parallax effect to .parallax items
    $('.parallax').parallax();

    // Once item .tabs-wrapper has reached the top of the page, make it sticky
    $('.tabs-wrapper .row').pushpin({
        top: $('.tabs-wrapper').offset().top
    });
});
