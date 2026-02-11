const FastFoodBtn = document.getElementById("fastBtn");
const AsianBtn = document.getElementById("asianBtn");
const MexicanBtn = document.getElementById("mexicanBtn");
const RestaurantParent = document.getElementById("restaurantParent");

let data;
let category;
let i = 0;
let txt = `Restaurant Picker`;
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

async function fetchMC10() {
    const response = await fetch(`https://allforone2526dor-fegsczb3g6hxf2dw.westus3-01.azurewebsites.net/api/mcten/TypeMexicanAsianOrFast/${category}`)
    data = await response.text();
    console.log(data);
}

async function GenerateRestaurant() {
        await fetchMC10();
        RestaurantParent.textContent = data;
}

FastFoodBtn.addEventListener("click", () => {
    category = "fast";
    GenerateRestaurant();
})

AsianBtn.addEventListener("click", () => {
    category = "asian";
    GenerateRestaurant();
})

MexicanBtn.addEventListener("click", () => {
    category = "mexican";
    GenerateRestaurant();
})