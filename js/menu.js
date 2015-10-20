var menuOpen = false;

$(document).on("click", "#button", function() {
    if(!menuOpen) {
        $("#menu").css("display", "initial");
        $("#menu").animate({"bottom": "-=10%"}, 'slow');
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        menuOpen = true;
    } else {
        $("#menu").animate({"bottom": "+=10%"}, 'slow', function() {
            $("#menu").css("display", "none");
            menuOpen = false;
        });
    }
});