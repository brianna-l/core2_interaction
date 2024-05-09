document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementById('clickableDiv');
  var images = ["/studio/02_elastic-collection/media/10-.png", "/studio/02_elastic-collection/media/10--.png", "/studio/02_elastic-collection/media/10---.png", "/studio/02_elastic-collection/media/10----.png"];
  var currentIndex = 0;

  div.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    div.style.backgroundImage = "url('" + images[currentIndex] + "')";
  });
});