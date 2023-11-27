// Write a JavaScript program to calculate the volume of a sphere

const buttonCalculate = document.getElementById('submit');

buttonCalculate.addEventListener('click', volumeOfSphere);

function volumeOfSphere(event) {
    event.preventDefault();
    const radius = document.querySelector("[name=radius]").value;
    let res = 4/3*Math.PI*radius**3;
    document.querySelector("[name=volume]").value = res;
}
