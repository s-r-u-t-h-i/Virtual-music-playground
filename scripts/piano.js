document.querySelectorAll('.white-key').forEach(button => {
  button.addEventListener('click', () => {
    playSound(button.dataset.key);
    animateKey(button);
  });
});
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  playSound(key);
  const button = document.querySelector(`.white-key[data-key="${key}"]`);
  if (button) animateKey(button);
});
function playSound(key) {
  const audio = new Audio(`sounds/piano/${key}.mp3`);
  audio.play();
}
function animateKey(button) {
  button.classList.add('pressed');
  setTimeout(() => button.classList.remove('pressed'), 100);
}
