// JavaScript File
var display = document.getElementById("display")
var dropdown = document.getElementById("dropdown")
var redButton = document.getElementById("redButton")
var toppings = ["Pepperoni","Italian Sausage","Chicken","Ham","Salami","Sliced Sausage",
"Olives","Pineapples","Green Bell Peppers","Red Bell Peppers","Mushrooms","Spinach",
"Artichokes","Onions","Garlic","Green Onions","Anchovies","Bacon","Extra Cheese","Squared Tomatoes"];



var topping1 = toppings[Math.floor(Math.random()*toppings.length)];



redButton.addEventListener("click",randomize);

function randomize(){
    if  (dropdown.value >= "1"){
        display.innerHTML = toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "2"){
        display.innerHTML += ", " +toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "3"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "4"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "5"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "6"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "7"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "8"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }
    if  (dropdown.value >= "9"){
        display.innerHTML += ", " + toppings[Math.floor(Math.random()*toppings.length)];
    }

}