var numberOfTablaButtons = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfTablaButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var buttonKey = this.dataset.key;
    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

function makeSound(key) {
  let audio;
  switch (key) {
    case "q":
      audio = new Audio("sounds/tabla/tab1.mp3");
      break;
    case "w":
      audio = new Audio("sounds/tabla/tab2.mp3");
      break;
    case "e":
      audio = new Audio("sounds/tabla/tab3.mp3");
      break;
    case "r":
      audio = new Audio("sounds/tabla/tab4.mp3");
      break;
    case "t":
      audio = new Audio("sounds/tabla/tab5.mp3");
      break;
    case "y":
      audio = new Audio("sounds/tabla/tab6.mp3");
      break;
    default:
      console.log(key);
      return;
  }
  audio.play();


  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 1000);
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector(`.key[data-key="${currentKey}"]`);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 1000);
  }
}
