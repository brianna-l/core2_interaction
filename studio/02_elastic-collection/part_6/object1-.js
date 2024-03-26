document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('clickableDiv');
    var images = ["/studio/02_elastic-collection/media/1-.png", "/studio/02_elastic-collection/media/1--.png", "/studio/02_elastic-collection/media/1----.png", "/studio/02_elastic-collection/media/1---.png"];
    var currentIndex = 0;
  
    div.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      div.style.backgroundImage = "url('" + images[currentIndex] + "')";
    });
      var article = document.getElementById("article");
      var textDiv = document.querySelector(".text");
      textDiv.addEventListener("mouseleave", function() {
          article.style.display = "none";
    });
  });

  function displayDetails() {
    var article = document.getElementById("article");
    article.style.display = "flex";
}