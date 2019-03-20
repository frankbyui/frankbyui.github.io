/* Weather API Test Script */

let weatherRequest = new XMLHttpRequest();
apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=a814507b3b5b09de8c85f93d56908c48&mode=xml&units=imperial";

weatherRequest.open("GET", apiURLstring, async="true");
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.write("current-temp").innerHTML = weatherData.temp;
}
