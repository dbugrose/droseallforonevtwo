const UserInput = document.getElementById("userInput");
const EnterBtn = document.getElementById("enterBtn");
const GreetingParent = document.getElementById("greetingParent");

let data;

async function fetchMC1() {
 const response = await fetch("https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcone/HelloWorld")
 data = await response.text();
 console.log(data);
}

async function GreetWorld() {
    await fetchMC1();
    GreetingParent.textContent = data;
}

EnterBtn.addEventListener("click", ()=> {
    GreetWorld();
})