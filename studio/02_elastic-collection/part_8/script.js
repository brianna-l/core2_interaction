var widths = ['100px','150px', '200px', '250px', '300px', '350px', '400px', '450px', '500px', '550px', '600px', '650px', '700px', '750px', '800px'];
var currentWidthIndex = 3;

// Zoom In Button
document.getElementById('zoomInBtn').addEventListener('click', function () {
    if (currentWidthIndex < widths.length - 1) {
        currentWidthIndex++;
        var width = widths[currentWidthIndex];
        applyWidth(width);
    }
});

// Zoom Out Button
document.getElementById('zoomOutBtn').addEventListener('click', function () {
    if (currentWidthIndex > 0) {
        currentWidthIndex--;
        var width = widths[currentWidthIndex];
        applyWidth(width);
    }
});
function applyWidth(width) {
    var spaceElements = document.querySelectorAll('.Spot');
    spaceElements.forEach(function (element) {
        element.style.width = width;
    });
}

// body

var mainElement = document.querySelector('.space');

        function insertSpaceData(space) {
            var article = document.createElement('article');
            article.classList.add('Spot');

            var anchor = document.createElement('a');
            anchor.href = space['url'];

            var img = document.createElement('img');
            img.src = "/studio/02_elastic-collection/media/" + space['image'];

            anchor.appendChild(img);
            article.appendChild(anchor);
            mainElement.appendChild(article);
        }

        space.forEach((space) => {
            insertSpaceData(space);
        });


// body hover
document.addEventListener("DOMContentLoaded", function() {
    var title = document.getElementById('title');
    var body = document.body;
    var aboutLinks = document.querySelectorAll('#about a');
    var buttons = document.querySelectorAll('button');

    title.addEventListener('click', function() {
        // Toggle body
        body.classList.toggle('body-hovered');

        // Toggle title
        aboutLinks.forEach(function(link) {
            link.classList.toggle('title-hovered');
        });

        // Toggle #about a
        aboutLinks.forEach(function(link) {
            link.classList.toggle('about-hovered');
        });

        // Toggle button
        buttons.forEach(function(button) {
            button.classList.toggle('button-hovered');
        });
    });
});