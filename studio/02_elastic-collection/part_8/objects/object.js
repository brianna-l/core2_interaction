// 1
document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('clickableDiv');
    var images = ["/studio/02_elastic-collection/media/1-.png", "/studio/02_elastic-collection/media/1--.png", "/studio/02_elastic-collection/media/1---.png", "/studio/02_elastic-collection/media/1----.png"];
    var currentIndex = 0;
  
    div.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      div.style.backgroundImage = "url('" + images[currentIndex] + "')";
    });
  });

// 2
document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementById('clickableDiv2');
  var images2 = ["/studio/02_elastic-collection/media/2-.png", "/studio/02_elastic-collection/media/2--.png", "/studio/02_elastic-collection/media/2---.png", "/studio/02_elastic-collection/media/2----.png"];
  var currentIndex = 0;

  div.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images2.length;
    div.style.backgroundImage = "url('" + images2[currentIndex] + "')";
  });
});

// 3
document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementById('clickableDiv3');
  var images3 = ["/studio/02_elastic-collection/media/3-.png", "/studio/02_elastic-collection/media/3--.png", "/studio/02_elastic-collection/media/3---.png", "/studio/02_elastic-collection/media/3----.png"];
  var currentIndex = 0;

  div.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images3.length;
    div.style.backgroundImage = "url('" + images3[currentIndex] + "')";
  });
});