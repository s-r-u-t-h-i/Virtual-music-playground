var numberOfBongoButtons = document.querySelectorAll(".pad").length;

for (var i = 0; i < numberOfBongoButtons; i++) {
  document.querySelectorAll(".pad")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML.toLowerCase();
    makeBongoSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeBongoSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

function makeBongoSound(key) {
  switch (key) {
    case "z":
      var left = new Audio("sounds/bongo/left.mp3");
      left.play();
      break;

    case "x":
      var right = new Audio("sounds/bongo/right.mp3");
      right.play();
      break;

    default:
      console.log("Key not mapped: " + key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

