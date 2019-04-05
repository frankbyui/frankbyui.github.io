/* Windspeed Script */

var temp = parseInt(document.getElementById('currtemp').innerHTML);
var wind = parseInt(document.getElementById('currwind').innerHTML);

var result = 35.74 + .6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);

document.getElementById('windchill').innerHTML = result.toFixed(1);