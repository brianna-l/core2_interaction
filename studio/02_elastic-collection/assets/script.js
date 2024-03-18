var widths = ['200px', '250px', '300px', '350px', '400px', '450px', '500px', '550px', '600px', '650px', '700px', '750px', '800px'];
var currentWidthIndex = 4;

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
            var img = document.createElement('img');
            img.src = "./media/" + space['image'];
            img.addEventListener('click', function () {
                displayDetails(space['time'], space['date'], space['location']);
            });
            article.appendChild(img);
            mainElement.appendChild(article);
        }

        space.forEach((space) => {
            insertSpaceData(space);
        });

        function displayDetails(time, date, location) {
            var modal = document.getElementById("myModal");
            var modalDetails = document.getElementById("modalDetails");
            modalDetails.innerHTML = `Time: ${time}<br>Date: ${date}<br>Location: ${location}`;

            modal.style.display = "block";

            // Close the modal when clicked
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }