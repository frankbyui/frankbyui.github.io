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
    var eventsList, i;

    for (i = 0; i < events.length; i++) {
        eventsList += "<li>" + events[i] + "</li><br>"; 
    }

    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myList = document.createElement("p"); 

    myH2.textContent = city.name + " Events";
    myList.textContent = eventsList;


    myArticle.appendChild(myH2);
    myArticle.appendChild(myList);
    myArticle.class = "events";

    section.appendChild(myArticle);

}