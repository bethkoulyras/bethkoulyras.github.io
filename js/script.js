// // Perspective shift
// var rotate = 20;

// var pageX = $(document).width();
// var pageY = $(document).height();
// var mouseY=0;
// var mouseX=0;

// $(document).mousemove(function( event ) {
//     mouseX = event.pageY;
//     mouseY = event.pageX;
//     rotateY = -(pageY/2-mouseY)/pageY*rotate;
//     rotateX = (pageX/2-mouseX)/pageX*rotate;
    
//     $('.project-intro').css({'-webkit-transform' : 'translateX(0%) translateY(0%) scale(1) perspective( 1960px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
    
// });

$(function(){
    var card = $(".project-intro");
    card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
        
        var rY = map(x, 0, $(this).width(), -17, 17);
        var rX = map(y, 0, $(this).height(), -17, 17);
    
        $(this).children("img").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
    });
    
    card.on('mouseenter', function () {
        $(this).children("img").css({
            transition: "all " + 0.05 + "s" + " linear",
        });
    });

    card.on('mouseleave', function () {
        $(this).children("img").css({
            transition: "all " + 0.2 + "s" + " linear",
        });

        $(this).children("img").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
    });
        
    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
});
