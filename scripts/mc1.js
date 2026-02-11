const UserInput = document.getElementById("userInput");
const EnterBtn = document.getElementById("enterBtn");
const GreetingParent = document.getElementById("greetingParent");

let data;

let i = 0;
let txt = `Say Hello`;
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

async function fetchMC1() {
    const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcone/sayhello/${UserInput.value}`)
    data = await response.text();
    console.log(data);
}

async function SayHello() {
    if (!Number.isNaN(+UserInput.value)) {
        GreetingParent.textContent = "Please enter a valid name."
    }
    else {
        await fetchMC1();
        GreetingParent.textContent = data;
        UserInput.value = "";
    }
}

EnterBtn.addEventListener("click", () => {
    SayHello();
})
UserInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        SayHello();
    }
})