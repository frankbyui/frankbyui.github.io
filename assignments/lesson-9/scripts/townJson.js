// script for getting json data //

var cityIndex, cities;
var section =  document.querySelector("section");
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
    var cityInfo = request.response;
    showCityData(cityInfo);
} 

function showCityData(jsonObj) {
    
    cities = jsonObj["towns"];

    for (cityIndex = 0; cityIndex < cities.length; cityIndex++){
        if (cities[cityIndex].name == "Preston")
        populateCityData(cities[cityIndex]);
    }

    for (cityIndex = 0; cityIndex < cities.length; cityIndex++){
        if (cities[cityIndex].name == "Soda Springs")
        populateCityData(cities[cityIndex]);
    }

    for (cityIndex = 0; cityIndex < cities.length; cityIndex++){
        if (cities[cityIndex].name == "Fish Haven")
        populateCityData(cities[cityIndex]);
    }

}

function populateCityData(jsonObj) {

    var city = jsonObj;

    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myH3 = document.createElement("h3");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myImage = document.createElement("img");

    myH2.textContent = city.name;
    myH3.textContent = city.motto;
    myPara1.textContent = "Year Founded: " + city.yearFounded;
    myPara2.textContent = "Population: " + city.currentPopulation;
    myPara3.textContent = "Average Rainfall: " + city.averageRainfall;

    switch (myH2.textContent) {
        case "Preston":
            myImage.src = "images/homePreston.jpg";
            myImage.id = "preston", alt = "Preston";
            break;

        case "Soda Springs":
            myImage.src = "images/homeSoda.jpg";
            myImage.id = "sodaSprings", alt = "Soda Sorings";
            break;

        case "Fish Haven":
            myImage.src = "images/homeFish.jpg";
            myImage.id = "fishHaven", alt = "Fish Haven";
            break;
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myImage);
    myArticle.className = "homeTowns";

    section.appendChild(myArticle);

}

