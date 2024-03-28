document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('clickableDiv');
    var borderElement = document.getElementById('title');
    var images = ["/studio/02_elastic-collection/media/1-.png", "/studio/02_elastic-collection/media/1--.png", "/studio/02_elastic-collection/media/1----.png", "/studio/02_elastic-collection/media/1---.png"];
    var currentIndex = 0;
  
    div.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      div.style.backgroundImage = "url('" + images[currentIndex] + "')";
    });

    borderElement.addEventListener('mouseenter', function() {
      borderElement.classList.toggle('inverted');
    });
  
    borderElement.addEventListener('mouseleave', function() {
      borderElement.classList.toggle('inverted');
    });
  });
  