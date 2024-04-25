// FALL DOWN
// --------------------

document.addEventListener('DOMContentLoaded', function() {

    // Height of Fall element
    const body = document.body;
    const main = document.querySelector('.fall');
    const numberOfLines = 20;
    const lineThickness = 1;
    const spacing = 4;

    function updateFallHeight() {
        const bodyHeight = body.offsetHeight;
        main.style.height = `${bodyHeight}px`;
    }
    
    updateFallHeight();
    window.addEventListener('resize', updateFallHeight);

    // Value Change
    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        const randomRotation = Math.random() * 20 - 10;
        const randomLeft = Math.random() * 50;

        line.style.top = `${Math.random() * 100 - 100}%`;
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
    var ratioElement = document.querySelector('.pollutionLevel');
    var ratioOther = document.querySelector('.oppositeRatio');

    const pm25 = data.list[0].components.pm2_5;
    const maxPM25 = 35; // NYC daily average max
    const percentage = (pm25 / maxPM25) * 100;
    const otherPercent = 100 - percentage;
    var linesNeeded = Math.round(100 * otherPercent / 100);
    var linesInside = Math.round(100 * percentage / 100)

    // edit text elements
    infoElement.innerHTML = `
        <p style="color: #19b904;">${ data.list[0].components.pm2_5 } µg/m3</p>
    `;
    ratioElement.innerHTML = `
        <h1>${ linesInside }</h1>
    `
    ratioOther.innerHTML = `
        <h1> ${ linesNeeded }</h1>
    `

    // Adjust number of lines
    adjustElements(lineContainer, linesInside, 'line');

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


// NOTES
// -----------------
function toggleModal() {
    var modals = document.querySelectorAll('.modal');

    modals.forEach(function(modal) {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'block';
        }
    });
}

document.querySelector('.note').onclick = toggleModal;
