var main = function () {
    $('.arrow-next').click(function () {
        var currentSlide = $('.slide-active');
        var nextSlide = currentSlide.next();
        var currentDot = $('.dot-active');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(600).removeClass('slide-active');
        nextSlide.fadeIn(600).addClass('slide-active');
        currentDot.removeClass('dot-active');
        nextDot.addClass('dot-active');
    });

    $('.arrow-prev').click(function () {
        var currentSlide = $('.slide-active');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.dot-active');
        var prevDot = currentDot.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(600).removeClass('slide-active');
        prevSlide.fadeIn(600).addClass('slide-active');
        currentDot.removeClass('dot-active');
        prevDot.addClass('dot-active');
    });

};

$(document).ready(main);