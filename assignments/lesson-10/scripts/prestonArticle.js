/* Preston Events Page */

var eventsRequest = new XMLHttpRequest();
eventsRequest.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json");
eventsRequest.responseType = "json";
eventsRequest.send();

eventsRequest.onload = function () {
    var eventData = eventsRequest.response;
    showCityData(eventData);
}

function showCityData(jsonObj) {
    
    var towns, townIndex;
    towns = jsonObj["towns"];

    for (townIndex = 0; townIndex < towns.length; townIndex++){
        if (towns[townIndex].name == "Preston")
        populateCityData(towns[townIndex]);
    }

    /* for (cityIndex = 0; cityIndex < cities.length; cityIndex++){
        if (cities[cityIndex].name == "Soda Springs")
        populateCityData(cities[cityIndex]);
    }

    for (cityIndex = 0; cityIndex < cities.length; cityIndex++){
        if (cities[cityIndex].name == "Fish Haven")
        populateCityData(cities[cityIndex]);
    }
    */
}

function populateCityData(jsonObj) {

    var town = jsonObj;
    var events;

    var myUList = document.createElement("<ul>");

    for (i=0; i < events.length; i++) {
        events += "<li>" + events[i] + "</li>"; 
    }

    var myList = document.createElement(events);

    var myUListClose = document.createElement("</ul>");

    myUList.appendChild(myList);
    myUList.appendChild(myUListClose);
    myUList.class = "events";

    section.appendChild(myUlist);

}