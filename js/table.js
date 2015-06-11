var info;
var clubs = ["CHI","CLB","COL","DAL","DC","HOU","KC","LA","MTL","NE","NY","NYC","ORL","PDX","PHI","RSL","SEA","SJ","TOR","VAN"];
var gamesPlayed = [];
var wins = [];
var draws = [];
var losses = [];
var differential = [];
var points = [];
var twitterUsername = [];
var widgetId = [];

function sort() {
    for(var i = 0; i < 20; i++) {
        points[clubs[i]] = info[clubs[i]].W * 3 + info[clubs[i]].D;
        differential[clubs[i]] = info[clubs[i]].GD;
    }
    var keys = [];
    for (var key in points) {
        keys.push(key);
    }

    keys.sort(function(k0, k1) {
        var a = points[k0];
        var b = points[k1];
        
        if(a > b) return -1;
        if(a < b) return 1;
        if(a === b) {
            if(differential[k0] > differential[k1]) return -1;
            if(differential[k1] > differential[k0]) return 1;
            if(differential[k0] === differential[k1]) {
                if(k0 < k1) return -1;
                if(k0 > k1) return 1;
                else return 0;
            }
        }
    });

    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = points[key];
        gamesPlayed[key] = info[key].GP;
        wins[key] = info[key].W;
        draws[key] = info[key].D;
        losses[key] = info[key].GP - info[key].W - info[key].D;
        twitterUsername[key] = info[key].twitter;
        widgetId[key] = info[key].id;
        $("table").append(
            '<tr>' +
                '<td id="' + key +'" class="club">' + info[key].Club + '</td>' +
                '<td>' + gamesPlayed[key] + '</td>' +
                '<td>' + wins[key] + '</td>' +
                '<td>' + draws[key] + '</td>' +
                '<td>' + losses[key] + '</td>' +
                '<td>' + differential[key] + '</td>' +
                '<td>' + points[key] + '</td>' +
            '</tr>'
        );
    }
}