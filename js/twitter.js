var defaultConfig = {
    "id": "608899925946978304",
    "domid": "twitter",
    "maxTweets": 5,
    "enableLinks": true,
    "showPermalinks": false,
    "showImages": true
}

function twitterClickHandler() {
    $(document).on('click', 'td', function () {
        defaultConfig.id = widgetId[this.id];
        twitterFetcher.fetch(defaultConfig);
    });
}