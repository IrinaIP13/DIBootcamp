// Hint/tip
// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button

var x = document.getElementById("demo");

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}