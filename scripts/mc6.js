const UserInput = document.getElementById("userInput");
const EnterBtn = document.getElementById("enterBtn");
const OddOrEvenParent = document.getElementById("oddOrEvenParent");

let data;
let i = 0;
let txt = `Odd or Even`;
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

async function fetchMC6() {
 const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcfive/enteranumber/${UserInput.value}`)
 data = await response.text();
 console.log(data);
}

async function OddOrEven() {
    if (UserInput.value == "")
    {OddOrEvenParent.textContent = "Please enter two valid numbers.";}
    else
    {await fetchMC6();
    OddOrEvenParent.textContent = data;}
}

EnterBtn.addEventListener("click", ()=> {
    OddOrEven();
})

UserInput.addEventListener("keypress", (event)=> {
    if (event.key === "Enter"){
    OddOrEven();
    }
})