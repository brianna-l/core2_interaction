// variable
// -----------------------

var key = 'dd5e56c491cc41e677b12f4481570d82';
var zip = 10011;

// API URL
// -----------------------

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&units=imperial&appid=${ key }`;

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
        <p>${ zip }</p>
        <p>${ data.main.temp } F</p>
        <p>${ data.wind.deg } deg</p>
        <p>${ data.wind.speed } mph</p>
    `;


    // edit info element
    containerElement.style.background = `hsl(${ data.main.temp }, 100%, 50%`;

    // edit weather vane
    weatherVaneElement.style.transform =   `rotate(${data.wind.deg}deg)`;
    weatherVaneElement.style.animationDuration = `${data.wind.speed}s `;

    console.log(data);
}