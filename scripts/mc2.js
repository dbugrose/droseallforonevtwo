const UserInput1 = document.getElementById("userInput1");
const UserInput2 = document.getElementById("userInput2");
const EnterBtn = document.getElementById("enterBtn");
const SumParent = document.getElementById("sumParent");

let data;

async function fetchMC2() {
 const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcthree/EnterTwoNumbers/${UserInput1.value}/${UserInput2.value}`)
 data = await response.text();
 console.log(data);
}

async function AddNumbers() {
    if (UserInput1.value == "" || UserInput2.value == "")
    {SumParent.textContent = "Please enter two valid numbers.";}
    else
    {await fetchMC2();
    SumParent.textContent = data;}
}

EnterBtn.addEventListener("click", ()=> {
    AddNumbers();
})

UserInput1.addEventListener("keypress", (event)=> {
    if (event.key === "Enter"){
    AddNumbers();
    }
})

UserInput2.addEventListener("keypress", (event)=> {
    if (event.key === "Enter"){
    AddNumbers();
    }
})