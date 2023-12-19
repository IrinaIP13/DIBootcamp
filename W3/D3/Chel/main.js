const input = document.querySelector(".input");

input.addEventListener("input", onlyLetters);

function onlyLetters() {
  // console.log(this.value);
  this.value = this.value.replace(/[^a-zA-Z]/gi, "");
  // console.log(this.value);
}
