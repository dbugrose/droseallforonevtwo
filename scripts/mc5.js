const AdjInput = document.getElementById("adjInput");
const CreatureInput = document.getElementById("creatureInput");
const ObjectInput = document.getElementById("objectInput");
const PlaceInput = document.getElementById("placeInput");
const FoodInput = document.getElementById("foodInput");
const EnterBtn = document.getElementById("enterBtn");
const MadLibParent = document.getElementById("madLibParent");

let data;
let i = 0;
let txt = `Mad Lib`;
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

async function fetchMC5() {
 const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcfour/MadLib/${AdjInput.value}/${CreatureInput.value}/${ObjectInput.value}/${PlaceInput.value}/${FoodInput.value}`)
 data = await response.text();
 console.log(data);
}

async function MadLib() {
    if (AdjInput.value == "" || CreatureInput.value == "" || ObjectInput.value == "" || PlaceInput.value == "" || FoodInput.value == "")
    {MadLibParent.textContent = "Please make sure all fields are filled out.";}
    else
    {await fetchMC5();
    MadLibParent.textContent = data;
    AdjInput.value = "";
    CreatureInput.value = "";
    ObjectInput.value = "";
    PlaceInput.value = "";
    FoodInput.value = "";
}
}

EnterBtn.addEventListener("click", ()=> {
    MadLib();
})

FoodInput.addEventListener("keypress", (event)=> {
    if (event.key === "Enter")
    {MadLib();}
})