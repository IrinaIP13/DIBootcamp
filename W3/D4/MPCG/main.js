const colors = document.querySelectorAll(".color");
let colorActive;
let isMousePressed = false;
colors.forEach((item) => {
  item.addEventListener("click", selectColor);
});

function selectColor() {
  colors.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
  colorActive = this.id;
}

const cells = document.querySelectorAll("#main div");
cells.forEach((item) => {
  item.addEventListener("mousedown", coloring);
  item.addEventListener("mousemove", coloringMove);
  item.addEventListener("mouseup", notColoring);
});

function coloring() {
  isMousePressed = true;
  this.style = "background-color:" + colorActive;
}

function coloringMove() {
  if (!isMousePressed) return;
  this.style = "background-color:" + colorActive;
}

function notColoring() {
  isMousePressed = false;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearColor);
function clearColor() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style = "background-color: white";
  }
}
