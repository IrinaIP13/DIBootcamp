const loading = document.getElementById("loading");
let count = 0;

setInterval(dotsAnimation, 500);
textAnimation();
setInterval(textAnimation, 6000);

function dotsAnimation() {
  loading.innerText += ".";
  count++;
  if (count > 3) {
    loading.innerText = "Loading";
    count = 0;
  }
}

function textAnimation() {
  let letters = document.getElementsByTagName("span");
  for (let i = 0; i < letters.length; i++) {
    letters[i].style.opacity = 0;
    setTimeout(function () {
      letters[i].classList.add("anim-letter");
    }, i * 500);
    setTimeout(function () {
      letters[i].classList.remove("anim-letter");
    }, 5000);
  }
}
