var id;
var double = false;
$(document).ready(function() {
    $.getJSON("./js/table.json", null, function(data) {
        info = data;
        sort();
    });
    twitterClickHandler();
    $(document).on('click', 'th', function () {
        if(id === this.id && !double) {
            double = true;
        } else {
            id = this.id;
            double = false;
        }
        sort(this.id);
    });
});