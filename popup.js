$( document ).ready(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var title = tabs[0].title;
        var req = {
            "url": url,
            "title": title
        };
        $.post("http://13.68.211.239:8080/fakebox/check", req,
        function(result){
            $("#decision").text(result.title.decision);
            //$("span").html(JSON.stringify(result));
        });
    });
});