// Date
// --------------------------
var yearElement = document.querySelector('.Year');
var monthElement = document.querySelector('.Month');
var dayElement = document.querySelector('.Day');
console.log(yearElement, monthElement, dayElement);

// Every Day
setInterval(() => {

    // Get Time
    // ---------------------------------
    var dateObject = new Date();
    var years = dateObject.getFullYear();
    var months = dateObject.getMonth() + 1;
    var days = dateObject.getDate();

    // Update Element
    // ---------------------------------
    yearElement.innerHTML = years;
    monthElement.innerHTML = months;
    dayElement.innerHTML = days;

}, 1000);

// Clock
// --------------------------
var hoursElement = document.querySelector('.Hours');
var minutesElement = document.querySelector('.Minutes');
var secondsElement = document.querySelector('.Seconds');
console.log(hoursElement, minutesElement, secondsElement);

// Every Second
setInterval(() => {
    
    // Get Time
    // ---------------------------------
    var dateObject = new Date();
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();
    console.log(hours, minutes, seconds);

    // Update Element
    // ---------------------------------
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}, 1000);




// FALL DOWN
// --------------------

document.addEventListener('DOMContentLoaded', function() {

    // Height of Fall element
    const body = document.body;
    const main = document.querySelector('.fall');
    const numberOfLines = 50;
    const lineThickness = 1;
    const spacing = 4;

    function updateFallHeight() {
        const bodyHeight = body.offsetHeight;
        main.style.height = `${bodyHeight}`;
    }
    
    updateFallHeight();
    window.addEventListener('resize', updateFallHeight);

    // Value Change
    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        const randomRotation = Math.random() * 20 - 10;
        const randomLeft = Math.random() * 50;

        line.style.left = `${randomLeft}%`;
        line.style.animationDuration = `${10 - (i * 0.2)}s`;
        line.style.animationDelay = `${i * 0.5}s`;
        line.style.transform = `rotate(${randomRotation}deg)`;
        main.appendChild(line);

        line.addEventListener('animationstart', function() {
            const bodyBottom = body.getBoundingClientRect().bottom;
            const lineTop = line.getBoundingClientRect().top;
            const finalTop = bodyBottom - lineTop - lineThickness - spacing;
            line.style.top = `${finalTop}px`;
        });
    }
});


// API CONNECTION
// ------------------

// variable
var key = 'dd5e56c491cc41e677b12f4481570d82';
var lat = 40.730610;
var lon = -73.935242;

// API URL
var URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;

// Fetch request
fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        render(data);
    });


// Render function
function render(data) {

    // get html elements
    var lineContainer = document.querySelector('.fall');
    var infoElement = document.querySelector('.PM25');

    const pm25 = data.list[0].components.pm2_5;
    const maxPM25 = 35; // NYC daily average max
    const percentage = (pm25 / maxPM25) * 100;
    var linesAmount = Math.round(100 * percentage / 100)

    // edit text elements
    infoElement.innerHTML = `
        <h1>${ data.list[0].components.pm2_5 }</h1>
    `;

    // Adjust number of lines
    adjustElements(lineContainer, linesAmount, 'line');

    updateBackgroundColor(percentage);

    console.log(data);
}

function adjustElements(container, elementsNeeded, newLines) {
    while (container.children.length < elementsNeeded) {
        let newElement = document.createElement('div');
        newElement.classList.add(newLines);
        container.appendChild(newElement);
    }
    while (container.children.length > elementsNeeded) {
        container.removeChild(container.lastChild);
    }
}

function updateBackgroundColor(percentage) {
    const red = Math.min(255, (percentage / 100) * 510);
    const green = 255 - Math.min(255, (percentage / 100) * 510);
    document.documentElement.style.setProperty('--dynamic-bg-color', `rgb(${red.toFixed(0)}, ${green.toFixed(0)}, 0)`);
}