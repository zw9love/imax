function initFooter() {
    var i = $("footer").outerHeight();
    $("body").css({"margin-bottom": i})
}

$(window).resize(initFooter), initFooter(), $("nav ul:first li").hover(function () {
    1 === $(this).index() && $(this).find("span.line").css({background: "#fff"}), $(this).find("a").addClass("nav_hover"), $(this).children("div").stop().animate({top: "0"}, "fast")
}, function () {
    1 === $(this).index() && $(this).find("span.line").css({background: "black"}), $(this).find("a").removeClass("nav_hover"), $(this).children("div").stop().animate({top: "100%"}, "fast")
}), $("nav ul:first li").eq(1).on("click", function () {
    $("nav div.header_hide").stop().slideToggle("fast")
});