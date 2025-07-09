var numberOfGuitarButtons = document.querySelectorAll(".chord").length;

for (var i = 0; i < numberOfGuitarButtons; i++) {
  document.querySelectorAll(".chord")[i].addEventListener("click", function () {
    var key = this.querySelector(".chord-label").textContent.trim().toLowerCase();
    makeGuitarSound(key);
    animateChord(key);
  });
}

document.addEventListener("keypress", function (event) {
  makeGuitarSound(event.key.toLowerCase());
  animateChord(event.key.toLowerCase());
});

function makeGuitarSound(key) {
  let audio;
  switch (key) {
    case "a":
      audio = new Audio("sounds/guitar/a.mp3");
      break;
    case "s":
      audio = new Audio("sounds/guitar/s.mp3");
      break;
    case "d":
      audio = new Audio("sounds/guitar/d.mp3");
      break;
    case "f":
      audio = new Audio("sounds/guitar/f.mp3");
      break;
    default:
      console.log("Unmapped key: " + key);
      return;
  }

  audio.play();


  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 1000); 
}


function animateChord(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}
