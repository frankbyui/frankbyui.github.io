/* Weather API Test Script */

var weatherRequest = new XMLHttpRequest
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a814507b3b5b09de8c85f93d56908c48&units=imperial";

weatherRequest.open("GET", apiURLstring);
weatherRequest.send();
weatherRequest.onload =  function () {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    document.getElementById("current-temp").innerHTML = weatherInfo.main.temp;
}
