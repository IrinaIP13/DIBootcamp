document.onmousemove = animateFrame; // frame follow mouse

var colors = ["#1abc9c", "#3498db", "#f1c40f"];

function animateFrame(e) {
  var frame = document.createElement("div");
  frame.setAttribute("class", "frame");
  document.body.appendChild(frame); // adds function to body

  // adds motion
  frame.style.left = e.clientX + "px";
  frame.style.top = e.clientY + "px";

  // randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  frame.style.borderColor = color;

  // adds animation
  frame.style.transition = "all 1s linear 0s";

  frame.style.left = frame.offsetLeft - 20 + "px";
  frame.style.top = frame.offsetTop - 20 + "px";

  frame.style.width = "50px";
  frame.style.height = "50px";
  frame.style.borderWidth = "5px";
  frame.style.opacity = 0;
}
