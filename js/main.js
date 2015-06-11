$(document).ready(function() {
    $.getJSON("./js/table.json", null, function(data) {
        info = data;
        sort();
    });
    twitterClickHandler();
});