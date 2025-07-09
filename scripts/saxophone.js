document.querySelectorAll(".note").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.querySelector(".note-label").textContent.trim();
    playSound(key);
    animate(key);
  });
});

document.addEventListener("keydown", (e) => {
  playSound(e.key);
  animate(e.key);
});

function playSound(key) {
  let audio;

  switch (key) {
    case "1":
      audio = new Audio("sounds/saxophone/note1.mp3");
      break;
    case "2":
      audio = new Audio("sounds/saxophone/note2.mp3");
      break;
    case "3":
      audio = new Audio("sounds/saxophone/note3.mp3");
      break;
    default:
      console.log("Key not mapped: " + key);
      return;
  }

  audio.play();


  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 1000); 
}

function animate(currentKey) {
  let classMap = { "1": "one", "2": "two", "3": "three" };
  var activeButton = document.querySelector("." + classMap[currentKey]);
  if (!activeButton) return;
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}

