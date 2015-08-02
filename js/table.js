var info;
var clubs = ["CHI","CLB","COL","DAL","DC","HOU","KC","LA","MTL","NE","NY","NYC","ORL","PDX","PHI","RSL","SEA","SJ","TOR","VAN"];
var cities = [];
var gamesPlayed = [];
var wins = [];
var draws = [];
var losses = [];
var differential = [];
var points = [];
var twitterUsername = [];
var widgetId = [];
var th = `<tr>
            <th id="cities"><a href="javascript:void(0)">Club</a></th>
            <th id="gamesPlayed"><a href="javascript:void(0)">GP</a></th>
            <th id="wins"><a href="javascript:void(0)">W</a></th>
            <th id="draws"><a href="javascript:void(0)">D</a></th>
            <th id="losses"><a href="javascript:void(0)">L</a></th>
            <th id="differential"><a href="javascript:void(0)">±</a></th>
            <th id="points"><a href="javascript:void(0)">P</a></th>
        </tr>`;

var choices = [];

function sort(by) {
    for(var i = 0; i < 20; i++) {
        points[clubs[i]] = info[clubs[i]].W * 3 + info[clubs[i]].D;
        differential[clubs[i]] = info[clubs[i]].GD;
        cities[clubs[i]] = info[clubs[i]].Club;
        gamesPlayed[clubs[i]] = info[clubs[i]].GP;
        wins[clubs[i]] = info[clubs[i]].W;
        draws[clubs[i]] = info[clubs[i]].D;
        losses[clubs[i]] = info[clubs[i]].GP - info[clubs[i]].W - info[clubs[i]].D;
    }
    var keys = [];
    for (var key in points) {
        keys.push(key);
    }
    
    choices["points"] = points;
    choices["differential"] = differential;
    choices["cities"] = cities;
    choices["gamesPlayed"] = gamesPlayed;
    choices["wins"] = wins;
    choices["draws"] = draws;
    choices["losses"] = losses;
    
    keys.sort(function(k0, k1) {
        var a;
        var b;
        if(typeof by === "undefined") {
            a = points[k0];
            b = points[k1];
        } else {
            a = choices[by][k0];
            b = choices[by][k1];
        }
        if(!double) {
            if(by !== "cities") {
                if(a > b) return -1;
                if(a < b) return 1;
                if(a === b && (typeof by === "undefined" || by === "points")) {
                    if(differential[k0] > differential[k1]) return -1;
                    if(differential[k1] > differential[k0]) return 1;
                    if(differential[k0] === differential[k1]) {
                        if(k0 < k1) return -1;
                        if(k0 > k1) return 1;
                        else return 0;
                    }
                } else {
                    if(k0 < k1) return -1;
                    if(k0 > k1) return 1;
                }
            } else {
                if(k0 < k1) return -1;
                if(k0 > k1) return 1;
            }
        } else {
            if(by !== "cities") {
                if(a < b) return -1;
                if(a > b) return 1;
                if(a === b && (typeof by === "undefined" || by === "points")) {
                    if(differential[k0] < differential[k1]) return -1;
                    if(differential[k1] < differential[k0]) return 1;
                    if(differential[k0] === differential[k1]) {
                        if(k0 > k1) return -1;
                        if(k0 < k1) return 1;
                        else return 0;
                    }
                } else {
                    if(k0 > k1) return -1;
                    if(k0 < k1) return 1;
                }
            } else {
                if(k0 > k1) return -1;
                if(k0 < k1) return 1;
            }
        }
    });
    $("table").html(th);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = points[key];
        twitterUsername[key] = info[key].twitter;
        widgetId[key] = info[key].id;
        $("table").append(
            '<tr>' +
                '<td id="' + key +'" class="club"><a href="javascript:void(0)">' + info[key].Club + '</a></td>' +
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