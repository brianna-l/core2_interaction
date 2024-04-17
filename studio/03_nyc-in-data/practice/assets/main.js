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
        <p>${ lat }</p>
        <p>${ lon }</p>
        <p>${ data.list[0].components.co } μg/m3</p>
        <p>${ data.list[0].components.no } μg/m3</p>
        <p>${ data.list[0].components.o3 } μg/m3</p>
        <p>${ data.list[0].components.so2 } μg/m3</p>
        <p>${ data.list[0].components.pm2_5 } μg/m3</p>
        <p>${ data.list[0].components.pm10 } μg/m3</p>
        <p>${ data.list[0].components.nh3 } μg/m3</p>
    `;

    console.log(data);
}