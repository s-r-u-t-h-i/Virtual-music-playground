document.querySelectorAll(".note").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;
    makeSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  let audio;
  switch (key) {
    case "a":
      audio = new Audio("sounds/violin/vio1.mp3");
      break;
    case "s":
      audio = new Audio("sounds/violin/vio2.mp3");
      break;
    case "d":
      audio = new Audio("sounds/violin/vio3.mp3");
      break;
    default:
      console.log("No sound for key:", key);
      return;
  }

  audio.play();


  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 1000);
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.note[data-key="${currentKey}"]`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}
