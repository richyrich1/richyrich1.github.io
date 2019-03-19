//For current weather
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c01eef2a2c5a264a85454076af40230d&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', requestURL, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function()
{
    var weatherData = weatherRequest.response;
    console.log(weatherData);

    document.getElementById("currently").innerHTML = weatherData.weather[0].description;
    document.getElementById("temperature").innerHTML = weatherData.main.temp;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    //document.getElementById("precipitation").innerHTML = weatherData.clouds.all;
    document.getElementById("windSpeed2").innerHTML = weatherData.wind.speed;

    var currentIcon = weatherData.weather[0].icon;
    var currentIcon_path = "http://openweathermap.org/img/w/" + currentIcon + ".png";
    document.getElementById("currentWeatherIcon").src = currentIcon_path;
}

//This is forecasting
var forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c01eef2a2c5a264a85454076af40230d&units=imperial';
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastRequestURL, true);
forecastRequest.responseType = 'json';
forecastRequest.send();

forecastRequest.onload = function()
{
    var forecastData = forecastRequest.response;
    console.log(forecastData);

    /*for dates
    document.getElementById("dateDay1").innerHTML = forecastData.list[0].dt_txt;
    document.getElementById("dateDay2").innerHTML = forecastData.list[1].dt;
    document.getElementById("dateDay3").innerHTML = forecastData.list[2].dt;
    document.getElementById("dateDay4").innerHTML = forecastData.list[3].dt;
    document.getElementById("dateDay5").innerHTML = forecastData.list[4].dt;
    */
    //for data
    document.getElementById("day1").innerHTML = forecastData.list[0].main.temp;
    document.getElementById("day2").innerHTML = forecastData.list[1].main.temp;
    document.getElementById("day3").innerHTML = forecastData.list[2].main.temp;
    document.getElementById("day4").innerHTML = forecastData.list[3].main.temp;
    document.getElementById("day5").innerHTML = forecastData.list[4].main.temp;

    //for icons
    var currentIcon1 = forecastData.list[0].weather[0].icon;
    var currentIcon_path1 = "http://openweathermap.org/img/w/" + currentIcon1 + ".png";
    document.getElementById("weatherIcon1").src = currentIcon_path1;

    var currentIcon2 = forecastData.list[1].weather[0].icon;
    var currentIcon_path2 = "http://openweathermap.org/img/w/" + currentIcon2 + ".png";
    document.getElementById("weatherIcon2").src = currentIcon_path2;

    var currentIcon3 = forecastData.list[2].weather[0].icon;
    var currentIcon_path3 = "http://openweathermap.org/img/w/" + currentIcon3 + ".png";
    document.getElementById("weatherIcon3").src = currentIcon_path3;

    var currentIcon4 = forecastData.list[3].weather[0].icon;
    var currentIcon_path4 = "http://openweathermap.org/img/w/" + currentIcon4 + ".png";
    document.getElementById("weatherIcon4").src = currentIcon_path4;

    var currentIcon5 = forecastData.list[4].weather[0].icon;
    var currentIcon_path5 = "http://openweathermap.org/img/w/" + currentIcon5 + ".png";
    document.getElementById("weatherIcon5").src = currentIcon_path5;
}