// GET ELEMENTS
// ---------------------------------

var minutesElement = document.querySelector('.Minutes');
console.log(minutesElement);

// Refresh
// ---------------------------------
setInterval(() => {
    
    // Get Time
    // ---------------------------------
    var dateObject = new Date();
    var minutes = dateObject.getMinutes();
    console.log(minutes);

    // Update Element
    // ---------------------------------
    minutesElement.innerHTML = minutes;

}, 1000);