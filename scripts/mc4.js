const UserInput1 = document.getElementById("userInput1");
const UserInput2 = document.getElementById("userInput2");
const EnterBtn = document.getElementById("enterBtn");
const ComparisonParent = document.getElementById("comparisonParent");

let data;
let i = 0;
let txt = `Greater or Less Than`;
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

async function fetchMC4() {
    const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mceleven/greaterless/${UserInput1.value}/${UserInput2.value}`)
    data = await response.text();
    console.log(data);
}

async function Comparison() {
    if (UserInput1.value == "" || UserInput2.value == "") { ComparisonParent.textContent = "Please enter two valid numbers."; }
    else {
        await fetchMC4();
        ComparisonParent.textContent = data;
        UserInput1.value == "";
        UserInput2.value == "";
    }
}

EnterBtn.addEventListener("click", () => {
    Comparison();
})

UserInput1.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        Comparison();
    }
})

UserInput2.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        Comparison();
    }
})