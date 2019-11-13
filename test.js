

$(function(){
    var card = $(".card");
    card.on('mousemove', function (e) {
        var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
        var y = e.clientY - $(this).offset().top + $(window).scrollTop();
        
        var rY = map(x, 0, $(this).width(), -4, 4);
        var rX = map(y, 0, $(this).height(), -4, 4);
    
        $(this).children(".project-intro").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
    });
    
    card.on('mouseenter', function () {
        $(this).children("..project-intro").css({
            transition: "all " + 0.05 + "s" + " linear",
        });
    });

    card.on('mouseleave', function () {
        $(this).children(".project-intro").css({
            transition: "all " + 0.2 + "s" + " linear",
        });

        $(this).children(".project-intro").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
    });
        
    function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
});


luxy.init();