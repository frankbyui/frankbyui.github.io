/* Preston Events Page */

var town, townIndex;
var section = document.querySelector("article");
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
    var i;

    var myArticle = document.createElement("article");
    myArticle.class = "events";
    var myH2 = document.createElement("h2");
    myH2.textContent = town.name + " Events";
    myArticle.appendChild(myH2);

    for (i = 0; i < events.length; i++) {
        var myList = document.createElement("p");
        myList.textContent = events[i];
        myArticle.appendChild(myList);
    }

    section.appendChild(myArticle);

}