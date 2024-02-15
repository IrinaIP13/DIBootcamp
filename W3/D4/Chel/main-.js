const tasks = [];

const buttonSubmit = document.getElementById("buttonSubmit");
buttonSubmit.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  if (input.value == "") {
    alert("Input value must be");
    return;
  }
  tasks.push(input.value);
  addToDisplay(input.value);
  input.value = "";
}

function addToDisplay(value) {
  const newTask = document.createElement("input");
  newTask.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  label.textContent = value;
  label.classList.add("label");
  const span = document.createElement("span");
  const hr = document.createElement("hr");
  span.appendChild(newTask);
  span.appendChild(label);
  span.appendChild(hr);
  const listTasks = document.querySelector(".listTasks");
  listTasks
    .appendChild(span)
    .insertAdjacentElement("beforebegin", newButtonX());
}

function newButtonX() {
  const buttonX = document.createElement("b");
  buttonX.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';
  buttonX.classList.add("btn-amazon");
  return buttonX;
}
