var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function()
    {
        var townData = request.response;
        // for Preston
        document.getElementById("prestonMotto").innerHTML += townData.towns[4].motto;
        document.getElementById("prestonFounded").innerHTML += townData.towns[4].yearFounded;
        document.getElementById("prestonPop").innerHTML += townData.towns[4].currentPopulation;
        document.getElementById("prestonAnnual").innerHTML += townData.towns[4].averageRainfall + "\"";  
        
        // for Soda Springs
        document.getElementById("sodaMotto").innerHTML += townData.towns[5].motto;
        document.getElementById("sodaFounded").innerHTML += townData.towns[5].yearFounded;
        document.getElementById("sodaPop").innerHTML += townData.towns[5].currentPopulation;
        document.getElementById("sodaAnnual").innerHTML += townData.towns[5].averageRainfall + "\"";  
        
        // for Fish Haven
        document.getElementById("fishMotto").innerHTML += townData.towns[1].motto;
        document.getElementById("fishFounded").innerHTML += townData.towns[1].yearFounded;
        document.getElementById("fishPop").innerHTML += townData.towns[1].currentPopulation;
        document.getElementById("fishAnnual").innerHTML += townData.towns[1].averageRainfall + "\"";  
        
    }

