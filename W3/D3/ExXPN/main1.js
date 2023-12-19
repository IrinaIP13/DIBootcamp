const div = document.getElementById("box");
div.className = "boxes";
div.addEventListener("click", createNewBox);

function createNewBox() {
  const newBox = document.createElement("div");
  newBox.className = "newBox boxes";
  const boxes = document.getElementsByClassName("boxes");
  boxes[boxes.length - 1].after(newBox);
}
