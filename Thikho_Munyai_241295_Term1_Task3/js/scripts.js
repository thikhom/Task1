const minus = document.querySelector(".minus");
const add = document.querySelector(".add");
const value = document.querySelector(".value");


let totalValue = 0;
value.innerHTML = totalValue;

add.onclick = function(){
    totalValue++;
    value.innerHTML = totalValue;
}

minus.onclick = function(){
    if (totalValue>0){
    totalValue--;
    value.innerHTML = totalValue;
    } 
}

const minusNeptune = document.querySelector(".minusNeptune");
const addNeptune = document.querySelector(".addNeptune");
const valueNeptune = document.querySelector(".valueNeptune");

valueNeptune.innerHTML = totalValue;

addNeptune.onclick = function(){
    totalValue++;
    valueNeptune.innerHTML = totalValue;
}

minusNeptune.onclick = function(){
    totalValue--;
    valueNeptune.innerHTML = totalValue;
}

const minusJupiter = document.querySelector(".minusJupiter");
const addJupiter = document.querySelector(".addJupiter");
const valueJupiter = document.querySelector(".valueJupiter");

valueJupiter.innerHTML = totalValue;

addJupiter.onclick = function(){
    totalValue++;
    valueJupiter.innerHTML = totalValue;
}

minusJupiter.onclick = function(){
    totalValue--;
    valueJupiter.innerHTML = totalValue;
}

const minusSaturn = document.querySelector(".minusSaturn");
const addSaturn = document.querySelector(".addSaturn");
const valueSaturn = document.querySelector(".valueSaturn");

valueSaturn.innerHTML = totalValue;

addSaturn.onclick = function(){
    totalValue++;
    valueSaturn.innerHTML = totalValue;
}

minusSaturn.onclick = function(){
    totalValue--;
    valueSaturn.innerHTML = totalValue;
}

const minusUranus = document.querySelector(".minusUranus");
const addUranus = document.querySelector(".addUranus");
const valueUranus = document.querySelector(".valueUranus");

valueUranus.innerHTML = totalValue;

addUranus.onclick = function(){
    totalValue++;
    valueUranus.innerHTML = totalValue;
}

minusUranus.onclick = function(){
    totalValue--;
    valueUranus.innerHTML = totalValue;
}

const minusMoon = document.querySelector(".minusMoon");
const addMoon = document.querySelector(".addMoon");
const valueMoon = document.querySelector(".valueMoon");

valueMoon.innerHTML = totalValue;

addMoon.onclick = function(){
    totalValue++;
    valueMoon.innerHTML = totalValue;
}

minusMoon.onclick = function(){
    totalValue--;
    valueMoon.innerHTML = totalValue;
}

function bookNow(buttoned){
    let mars = parseInt(document.getElementById(buttoned).value);
    let tickets = parseInt(document.getElementById('ticket').innerHTML) + mars;
    document.getElementById('ticket').innerHTML=tickets;
 
}

//image slides

const featuredTrip = document.querySelectorAll(".featuredTrip img");
let imgIndex = 0;
let intervalId = null;

initializeSlider()
   
function initializeSlider(){

    featuredTrip[imgIndex].classList.add("displaySlide");

}
function showSlide(index){

}
function prevSlide(){

}
function nextSlide(){

}
