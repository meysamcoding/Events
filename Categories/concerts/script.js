
var eventShow = $("#eventDefaultShow");
var search = $("#search");
var btn = $("#searchBtn");

btn.on("click", function(event){
    // event.preventDefault();

    $("#eventDefaultShow").empty();


 var searchValue = search.val().toLowerCase();
 var newSearchValue = searchValue.replace(/ /g, "" );
 console.log("ddd" ,newSearchValue)

 if(newSearchValue == "losangeles" ){
     var lastPart = 324;
 }
else if( newSearchValue == "sandiego" ){
    var lastPart = 381;
}
else if( newSearchValue == "boston" ){
    var lastPart = 235;
}
else if( newSearchValue == "lasvegas" ){
    var lastPart = 319;
}
else if( newSearchValue == "washington" ){
    var lastPart = 409;
}
else if( newSearchValue == "chicago" ){
    var lastPart = 249;
}
else if( newSearchValue == "sanfrancisco" ){
    var lastPart = 382;
}
else if( newSearchValue == "detroit" ){
    var lastPart = 266;
}
else if( newSearchValue == "baltimore" ){
    var lastPart = 224;
}
else if( newSearchValue == "denver" ){
    var lastPart = 264;
}
else if( newSearchValue == "miami" ){
    var lastPart = 334;
}
else{
   var error =  $("<div>" + "SORRY we dont have that city in our system :(" + "</div>");
   error.css("fontSize", "30px");
   error.css("color", "red");
   eventShow.append(error);
}
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=concert&dmaId=" + lastPart + "&apikey=OqQU1zdAGtlzlsTSorTTIsb4OTpyhCRU";


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
        
        var h6 = $("<h6>");
        h6.text(main._embedded.events[i].name);
        console.log(main._embedded.events[i].name)
        var a = $("<a>");
        a.attr("href", newStr2 , h6)
        a.attr("target", "_blank");

        var div =  $("<div class=show> </div>");
        
        div.append(a, h6);
        // p.text(newStr2);
        eventShow.append( div );
        // eventShow.append(h6);
        
        a.append(imgEl);
        
     
     }


     
});
});