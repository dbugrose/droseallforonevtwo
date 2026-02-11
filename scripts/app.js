let i = 0;
let txt = `All For One`;
let speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', function() {
    typeWriter();
});