document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementById('clickableDiv');
  var shuffle = document.getElementById('shuffle');
  var images = ["/studio/02_elastic-collection/media/17-.png", "/studio/02_elastic-collection/media/17--.png", "/studio/02_elastic-collection/media/17---.png", "/studio/02_elastic-collection/media/17----.png"];
  var currentIndex = 0;

  div.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    div.style.backgroundImage = "url('" + images[currentIndex] + "')";
  });

  shuffle.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * images.length);
    while(randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
    currentIndex = randomIndex;
    div.style.backgroundImage = "url('" + images[currentIndex] + "')";
  });
});