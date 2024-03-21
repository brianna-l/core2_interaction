document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('clickableDiv');
    var borderElement = document.getElementById('title');
    var images = ["/studio/02_elastic-collection/media/1-.png", "/studio/02_elastic-collection/media/1--.png", "/studio/02_elastic-collection/media/1----.png", "/studio/02_elastic-collection/media/1---.png"];
    var textColors = ["black", "black", "white", "white"];
    var linkColors = ["black", "black", "white", "white"];
    var borderColors = ["black", "black", "white", "white"];
    var currentIndex = 0;
  
    div.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      div.style.backgroundImage = "url('" + images[currentIndex] + "')";
      document.body.style.color = textColors[currentIndex];
      var links = document.querySelectorAll('a');
      links.forEach(function(link) {
        link.style.color = linkColors[currentIndex];
      });
      borderElement.style.borderColor = borderColors[currentIndex];
    });

    borderElement.addEventListener('mouseenter', function() {
      borderElement.classList.toggle('inverted');
    });
  
    borderElement.addEventListener('mouseleave', function() {
      borderElement.classList.toggle('inverted');
    });
  });
  