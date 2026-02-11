const UserInput = document.getElementById("userInput");
const EnterBtn = document.getElementById("enterBtn");
const ReversedParent = document.getElementById("reversedParent");

let data;

async function fetchMC8() {
    const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcseven/ReverseItNumeric/${UserInput.value}`)
    data = await response.text();
    console.log(data);
}

async function Reversed() {
        await fetchMC8();
        ReversedParent.textContent = data;
        UserInput.value = "";
}

EnterBtn.addEventListener("click", () => {
    Reversed();
})

UserInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        Reversed();
    }
})