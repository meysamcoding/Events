
var mainDiv = $("#main");
var search = $("#searchArea");
var searchBtn = $("#searchBtn");



var searchResult = search.val();
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=OqQU1zdAGtlzlsTSorTTIsb4OTpyhCRU";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (main) {
    var newDiv = document.createElement("div")
    document.body.appendChild(newDiv);
    for (var i = 0; i < main._embedded.events.length; i++) {
        var p = document.createElement("p")
        var str = main._embedded.events[i].url;
        
        var res = str.substring(54, 200);
        var newStr = res.replace(/%3A/g, ":", );
        var newStr2 = newStr.replace(/%2F/g, "/", );
        p.textContent=newStr2;
        newDiv.append(p);
        console.log(main);
    }



});