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
console.log(hoursElement, minutesElement, secondsElement);

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