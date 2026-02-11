const triggerButton = document.getElementById('triggerButton');
const animatedBox = document.getElementById('animatedBox');

triggerButton.addEventListener('click', () => {
  animatedBox.classList.toggle('is-visible');
});