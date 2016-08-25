function main () {
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


function auto() {
         var currentSlide = $('.slide-active'); 
4         var nextSlide = currentSlide.next(); 
5         var currentDot = $('.dot-active'); 
6         var nextDot = currentDot.next(); 
7 
 
8         if (nextSlide.length === 0) { 
9             nextSlide = $('.slide').first(); 
10             nextDot = $('.dot').first(); 
11         } 
12 
 
13         currentSlide.fadeOut(600).removeClass('slide-active'); 
14         nextSlide.fadeIn(600).addClass('slide-active'); 
15         currentDot.removeClass('dot-active'); 
16         nextDot.addClass('dot-active'); 

}

$(document).ready(function(){
    main();
    
    setInterval("auto()", 5000);
});
