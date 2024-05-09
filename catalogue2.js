// SMOOTH
// ---------------------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.next, a.back').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  



// Date
// ---------------------
var yearElement = document.querySelector('.Year');
var monthElement = document.querySelector('.Month');
var dayElement = document.querySelector('.Day');
console.log(yearElement, monthElement, dayElement);

// Every Day
setInterval(() => {

    // Get Time
    var dateObject = new Date();
    var years = dateObject.getFullYear();
    var months = dateObject.getMonth() + 1;
    var days = dateObject.getDate();

    // Update Element
    yearElement.innerHTML = years;
    monthElement.innerHTML = months;
    dayElement.innerHTML = days;

}, 1000);

// Clock
var hoursElement = document.querySelector('.Hours');
var minutesElement = document.querySelector('.Minutes');
var secondsElement = document.querySelector('.Seconds');

// Every Second
setInterval(() => {
    
    // Get Time
    var dateObject = new Date();
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();
    console.log(hours, minutes, seconds);

    // Update Element
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}, 1000);




// MODAL
// ------------------------

function openModal(modalId, event) {
  document.getElementById(modalId).style.display = 'block';
  event.stopPropagation();
}

function closeModal(modalId, event) {
  if (event.target === document.getElementById(modalId)) {
      document.getElementById(modalId).style.display = 'none';
  }
  event.stopPropagation();
}



// Switch
// --------------------------

document.addEventListener('DOMContentLoaded', function () {
  var date = new Date();
  var hour = date.getHours();
  console.log("Current hour:", hour);

  if (hour >= 18 && hour < 21) {
      console.log("Applying noon mode");
      document.body.classList.add('noon-mode');
  } else if (hour >= 21) {
      console.log("Applying dark mode");
      document.body.classList.add('dark-mode');
  } else {
      console.log("It's not time for noon mode");
  }
});



// Scroll
// --------------------------

window.addEventListener('wheel', function(event) {
  if (event.deltaY !== 0) { 

      event.preventDefault();
      window.scrollBy(event.deltaY, 0);
  }
});
