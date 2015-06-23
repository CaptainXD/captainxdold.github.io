var open = false;
var club = "";
var image = "";
var handle;
var defaultConfig = {
    "id": "608899925946978304",
    "domId": "twitter",
    "maxTweets": 5,
    "enableLinks": true,
    "showPermalinks": false,
    "showImages": true,
    "showRetweet": false,
    "showInteraction": false,
    "club": "",
    "handle": "",
}

function twitterClickHandler() {
    $(document).on('click', '.club', function () {
        open = true;
        defaultConfig.club = this.id;
        handle = twitterUsername[this.id];
        defaultConfig.handle = handle;
        defaultConfig.id = widgetId[this.id];
        twitterFetcher.fetch(defaultConfig);
        $("#navbar h2").html('<a href="http://twitter.com/' + handle + '" target="_blank">@' + handle + '</a>');
        $("html").css("overflow-x", "hidden");
        $("#twitter, #navbar").css("display", "block");
        $("#main, table").animate({"margin-left": "-=100%"});
        $("#twitter, #navbar").animate({"left": "-=100%"}, function() {
            $("#main, table").css("display", "none");
            $("html").css("overflow-x", "auto");
            $("#twitter").css("position", "static");
            $("#twitter").css("margin-top", "75px");
        });
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $("#navbar img").click()
        }
    });
    $("#navbar img").click(function() {
        if(open) {
            $("html").css("overflow-x", "hidden");
            $("#twitter").css("position", "absolute");
            $("#main").css("display", "block");
            $("table").css("display", "table");
            $("#twitter").css("margin-top", "0");
            $("#main, table").animate({"margin-left": "+=100%"});
            $("#twitter, #navbar").animate({"left": "+=100%"}, function() {
                $("html").css("overflow-x", "auto");
                $("#twitter, #navbar").css("display", "none");
            });
        }
    });
}