// Create a paragraph and make it draggable.
// You should be able to drag and drop the paragraph.
// Change the font size of the paragraph according to the screen coordinates

const paragraph = document.getElementById("paragraph");
paragraph.style.margin = 0;
paragraph.style.padding = 0;

document.ondragover = function (e) {
  e.preventDefault();
};

document.ondrop = function (e) {
  let y = e.clientY;
  if (y > 150) {
    paragraph.style.fontSize = 2 + "em";
  }
  paragraph.style.top = y + "px";
  console.log(y);
};
