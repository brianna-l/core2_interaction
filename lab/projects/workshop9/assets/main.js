// variable
// -----------------------

var key = 'dd5e56c491cc41e677b12f4481570d82';
var lat = 40.730610;
var lon = -73.935242;

// API URL
// -----------------------

var URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;

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
    var paletteElement = document.getElementById('Palette');

    // edit info element
    infoElement.innerHTML = `
        <h2 style="color: #FF1347;">Current Level of PM2.5</h2>
        <h5><u>List of pollution elements</u></h5>
        <p>CO <i style="color: #FF6347;">(Carbon monoxide)</i>: ${ data.list[0].components.co } µg/m3</p>
        <p>NO <i style="color: #FF6347;">(Nitrogen monoxide)</i>: ${ data.list[0].components.no } µg/m3</p>
        <p>NO2 <i style="color: #FF6347;">(Nitrogen dioxide)</i>: ${ data.list[0].components.no2 } µg/m3</p>
        <p>O3 <i style="color: #FF6347;">(Ozone)</i>: ${ data.list[0].components.o3 } µg/m3</p>
        <p>SO2 <i style="color: #FF6347;">(Sulphur dioxide)</i>: ${ data.list[0].components.so2 } µg/m3</p>
        <p><u>PM2.5 <i style="color: #FF6347;">(Fine particles matter)</i>: <strong>${ data.list[0].components.pm2_5 } µg/m3</strong></u></p>
        <p>PM10 <i style="color: #FF6347;">(Coarse particulate matter)</i>: ${ data.list[0].components.pm10 } µg/m3</p>
        <p>NH3 <i style="color: #FF6347;">(Ammonia)</i>: ${ data.list[0].components.nh3 } µg/m3</p>
    
    `;


    var pm25 = data.list[0].components.pm2_5;
    var maxPM25 = 35; // Assuming 35 µg/m3 is the highest
    var scale = Math.max(0.1, Math.min(1, pm25 / maxPM25));

    // Scale transformation
    weatherVaneElement.style.transform = `scale(${scale})`;

    // Change color
    paletteElement.innerHTML = '';

    var colorSwatch = [
        { range: [0, 5], color: '#0EF513' },
        { range: [5, 10], color: '#F5D90E' },
        { range: [10, 15], color: '#F59C0E' },
        { range: [15, 20], color: '#F55F0E' },
        { range: [20, 25], color: '#F5370E' },
        { range: [25, 30], color: '#E10000' },
        { range: [30, 35], color: '#990000' }
    ];

    function getCurrentColor(pm25) {
        for (var i = 0; i < colorSwatch.length; i++) {
            if (pm25 >= colorSwatch[i].range[0] && pm25 <= colorSwatch[i].range[1]) {
                return colorSwatch[i].color;
            }
        }
        return null;
    }
    
    var currentColor = getCurrentColor(pm25);
    weatherVaneElement.style.fill = currentColor;
    
    colorSwatch.forEach(swatch => {
        var colorSquare = document.createElement('div');
        colorSquare.style.width = '30px';
        colorSquare.style.height = '30px';
        colorSquare.style.backgroundColor = swatch.color;
        colorSquare.style.display = 'inline-block';
        colorSquare.style.margin = '5px';
        paletteElement.appendChild(colorSquare);
    });

    console.log(data);
    console.log(currentColor);
    console.log(colorSwatch);
}
