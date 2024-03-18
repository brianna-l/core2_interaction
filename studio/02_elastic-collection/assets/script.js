var scales = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
var currentScaleIndex = 6;

// Zoom In Button
document.getElementById('zoomInBtn').addEventListener('click', function () {
    if (currentScaleIndex < scales.length - 1) {
        currentScaleIndex++;
        var scale = scales[currentScaleIndex];
        applyScale(scale);
    }
});

// Zoom Out Button
document.getElementById('zoomOutBtn').addEventListener('click', function () {
    if (currentScaleIndex > 0) {
        currentScaleIndex--;
        var scale = scales[currentScaleIndex];
        applyScale(scale);
    }
});
function applyScale(scale) {
    var spaceElements = document.querySelectorAll('.Spot');
    spaceElements.forEach(function (element) {
        element.style.transform = 'scale(' + scale + ')';
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