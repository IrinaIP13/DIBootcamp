// Create multiple squares/boxes with letters inside. 
// There should be 26 squares/boxes for all 
// the letters (A to Z) next to each other.
// Make all the squares draggable.
// You should be able to drag and drop the letters depending 
// on their coordinates.

const letters = document.querySelectorAll('.box');
letters.forEach((item) => {
    let node;
    item.draggable = true;
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
    item.addEventListener("dragover", dragover);
    item.addEventListener("dragenter", dragenter);
    item.addEventListener("dragleave", dragleave);
    item.addEventListener("drop", drop);
})

function dragstart(e) {
    setTimeout(() => this.classList.add("item--hide"), 0);
    node = this;
  }
  
  function dragend() {
    this.classList.remove("item--hide");
  }

  function dragover(e) {
    e.preventDefault();
  }

  function dragenter() {
    this.classList.add("box--hovered");
  }

  function dragleave() {
    this.classList.remove("box--hovered");
  }

  function drop(e) {
   this.classList.remove("box--hovered");
   this.before(node);
  }

