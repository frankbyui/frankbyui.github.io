/* Preston Events Page */

var town, townIndex;
var section = document.querySelector("events");
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var eventsRequest = new XMLHttpRequest();
eventsRequest.open("GET", requestURL);
eventsRequest.responseType = "json";
eventsRequest.send();

eventsRequest.onload = function () {
    var eventData = eventsRequest.response;
    showCityData(eventData);
}

function showCityData(jsonObj) {
    
    var townNames = jsonObj["towns"];
    var i;   

    for (i = 0; i < townNames.length; i++){
        if (townNames[i].name == "Preston")
        populateCityData(townNames[i]);
    }

    /* for (i= 0; i < townNames.length; i++){
        if (townNames[i].name == "Soda Springs")
        populateCityData(townNames[i]);
    }

    for (i = 0; i < cities.length; i++){
        if (townNames[i].name == "Fish Haven")
        populateCityData(townNames[i]);
    }
    */
}

function populateCityData(jsonObj) {

    var town = jsonObj;
    var events = town.events;
    var eventsList, i;

    for (i = 0; i < events.length; i++) {
        eventsList += "<li>" + events[i] + "</li><br>"; 
    }

    var myUList = document.createElement("<ul>");
    var myList = document.createElement(eventsList);
    var myUListClose = document.createElement("</ul>");    

    myUList.appendChild(myList);
    myUList.appendChild(myUListClose);
    myUList.class = "events";

    section.appendChild(myUlist);

}