const UserInput = document.getElementById("userInput");
const EnterBtn = document.getElementById("enterBtn");
const AnswerParent = document.getElementById("answerParent");

let data;
window.addEventListener('load', function() {
    typeWriter();
});
async function fetchMC9() {
    const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mceight/RandomAnswer`)
    data = await response.text();
    console.log(data);
}

async function Answer() {
    if (!UserInput.value.includes("?")) {
        {
            AnswerParent.textContent = "Please enter a valid question.";
            UserInput.value = "";
        }
    }
    else {
        await fetchMC9();
        AnswerParent.textContent = data;
        UserInput.value = "";
    }

}

EnterBtn.addEventListener("click", () => {
    Answer();
})

UserInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        Answer();
    }
})