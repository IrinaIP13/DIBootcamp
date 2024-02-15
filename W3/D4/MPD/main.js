const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (!keys.includes(key)) return;
  event.preventDefault();
  event.stopPropagation();
  playAudio(key);
});

const drums = document.querySelectorAll(".drum");
drums.forEach((item) => {
  let key;
  item.addEventListener("click", (e) => {
    key = item.querySelector("kbd").innerHTML;
    playAudio(key);
  });
});

function playAudio(key) {
  let drum = document.querySelector(".drum[data-id='" + key + "']");
  let note = document.getElementById(key);
  note.currentTime = 0; //Sets current position of playback to 0. So the sound restarts if its still playing.
  drum.classList.add("playing");
  setTimeout(function () {
    drum.classList.remove("playing");
  }, 100);
  note.play();
}
