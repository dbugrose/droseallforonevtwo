const UserInput1 = document.getElementById("userInput1");
const UserInput2 = document.getElementById("userInput2");
const EnterBtn = document.getElementById("enterBtn");
const NameAndTimeParent = document.getElementById("nameAndTimeParent");

let data;

let i = 0;
let txt = `Asking Questions`;
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

async function fetchMC3() {
    const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mctwo/enternameandwaketime/${UserInput1.value}/${UserInput2.value}`)
    data = await response.text();
    console.log(data);
}

async function NameAndTime() {
    if (!UserInput1.value == "" && !UserInput2.value == "" && Number.isNaN(+UserInput1.value)) {
        await fetchMC3();
        NameAndTimeParent.textContent = data;
    }
    else { NameAndTimeParent.textContent = "Please enter two valid responses."; }
}

EnterBtn.addEventListener("click", () => {
    NameAndTime();
})

UserInput1.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        NameAndTime();
    }
})

UserInput2.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        NameAndTime();
    }
})