/* Preston weather API ID=5604473 @prestonWeather.js */

/* Weather Summary */
var weatherRequest = new XMLHttpRequest();
var summAPILink = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a814507b3b5b09de8c85f93d56908c48&units=imperial";

weatherRequest.open("GET", summAPILink, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("current-conditions").innerHTML = weatherData.weather[0].description;
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
    document.getElementById("wind-dir").innerHTML = weatherData.wind.direction.code;
    
    var windChill = 35.74 + 0.6215 + weatherData.main.temp - 35.75 * Math.pow(weatherData.wind.speed, 0.16) + 0.4275 
    * weatherData.main.temp * Math.pow(weatherData.wind.speed, 0.16);
    var windRounded = Math.round(windChill);
    document.getElementById("wind-chill").innerHTML = windRounded;

}

/* Weather Forecast */
var weatherForecast = new XMLHttpRequest();
var foreAPILink = "api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a814507b3b5b09de8c85f93d56908c48&units=imperial";

weatherForecast.open("GET", foreAPILink, true);
weatherForecast.send();
weatherForecast.onload =  function () {

    var forecastData = JSON.parse(weatherForecast.responseText);
    console.log(forecastData);

    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < forecastData.list.length; i++) {
        var time = forecastData.list[i].dt_txt;

        if (time.includes("18:00:00")) {

            /* date */
            var date = new Date(forecastData.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
                "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + " " + date.getDate();
            listDate.push(findDate);

            /* temp */
            var temp = forecastData.list[i].main.temp_max;
            var tempRounded = Math.round(temp);
            listTemp.push(tempRounded);

            /* icon */
            var iconCode = forecastData.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconCode + ".png";
            listIconCode.push(icon_path);
        }
        continue;     
    }

/* Forecast Date */
document.getElementById('day1').innerHTML = listDate[0];
document.getElementById('day2').innerHTML = listDate[1];
document.getElementById('day3').innerHTML = listDate[2];
document.getElementById('day4').innerHTML = listDate[3];
document.getElementById('day5').innerHTML = listDate[4];

/* Forecast Icon */
document.getElementById('wIcon1').src = listIconCode[0];
document.getElementById('wIcon2').src = listIconCode[1];
document.getElementById('wIcon3').src = listIconCode[2];
document.getElementById('wIcon4').src = listIconCode[3];
document.getElementById('wIcon5').src = listIconCode[4];

/* Forecast High Temp */
document.getElementById("hTemp1").innerHTML = listTemp[0];
document.getElementById("hTemp2").innerHTML = listTemp[1];
document.getElementById("hTemp3").innerHTML = listTemp[2];
document.getElementById("hTemp4").innerHTML = listTemp[3];
document.getElementById("hTemp5").innerHTML = listTemp[4];

}