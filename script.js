

var eventShow = $("#eventDefaultShow");


var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=OqQU1zdAGtlzlsTSorTTIsb4OTpyhCRU";


var eventName = $("<h1>");
eventName.text("Upcoming Events");
eventShow.append(eventName);
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (main) {
   
   
    for (var i = 0; i < 9; i++) {
        var str = main._embedded.events[i].url;
        var res = str.substring(54, 200);
        var newStr = res.replace(/%3A/g, ":", );
        var newStr2 = newStr.replace(/%2F/g, "/", );
        var imgEl = $("<img>");
        imgEl.attr("src", main._embedded.events[i].images[8].url);
        imgEl.css('height', '150px');
        imgEl.css('width', '200px');
        imgEl.css('positon', 'absolute');
        imgEl.css('float', 'left');
        imgEl.css('padding', '10px');
        var h6 = $("<h6>");
        h6.text(main._embedded.events[i].name);
        var a = $("<a>");
        a.attr("href", newStr2)
        a.attr("target", "_blank");
        
        // p.text(newStr2);
        // eventShow.append(h6);
        eventShow.append(a);
        a.append(imgEl);
        // eventShow.append(p);
        
     
     }



});
