// variable
// -----------------------

var key = 'dd5e56c491cc41e677b12f4481570d82';
var lat = 40.730610;
var lon = -73.935242;

// API URL
// -----------------------

var URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;

// Fetch request
// -----------------------

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        render(data);
    });


// Render function
// -----------------------

function render(data) {

    // get html elements
    var containerElement = document.querySelector('.Container');
    var weatherVaneElement = document.querySelector('.WeatherVane');
    var infoElement = document.querySelector('.Info');

    // edit info element
    infoElement.innerHTML = `
        <h2 style="color: #FF1347;">Current Level of PM2.5</h2>
        <h5><u>List of pollution elements</u></h5>
        <p>CO <i style="color: #FF6347;">(Carbon monoxide)</i>: ${ data.list[0].components.co } µg/m3</p>
        <p>NO <i style="color: #FF6347;">(Nitrogen monoxide)</i>: ${ data.list[0].components.no } µg/m3</p>
        <p>NO2 <i style="color: #FF6347;">(Nitrogen dioxide)</i>: ${ data.list[0].components.no2 } µg/m3</p>
        <p>O3 <i style="color: #FF6347;">(Ozone)</i>: ${ data.list[0].components.o3 } µg/m3</p>
        <p>SO2 <i style="color: #FF6347;">(Sulphur dioxide)</i>: ${ data.list[0].components.so2 } µg/m3</p>
        <p>PM2.5 <i style="color: #FF6347;">(Fine particles matter)</i>: ${ data.list[0].components.pm2_5 } µg/m3</p>
        <p>PM10 <i style="color: #FF6347;">(Coarse particulate matter)</i>: ${ data.list[0].components.pm10 } µg/m3</p>
        <p>NH3 <i style="color: #FF6347;">(Ammonia)</i>: ${ data.list[0].components.nh3 } µg/m3</p>
    
    `;


    var pm25 = data.list[0].components.pm2_5;
    var maxPM25 = 500; // Assuming 500 µg/m3 is the highest significant value for PM2.5
    var scale = Math.max(0.1, Math.min(1, pm25 / maxPM25));

    // Apply scale transformation to weather vane
    weatherVaneElement.style.transform = `scale(${scale})`;

    console.log(data);
}