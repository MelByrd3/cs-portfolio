// JavaScript File

// The four variables under this comment include the JaveScript ID's for the 
// random toppings, dropdown values, and the "redButton", which is the clickable 
// image that commences the randomzing of the toppings. next to "var toppings =", 
// toppings can be inputted by adding a comma and putting the toppings in quotes.
var display = document.getElementById("display")
var dropdown = document.getElementById("dropdown")
var redButton = document.getElementById("redButton")
var toppings = ["Pepperoni","Italian Sausage","Chicken","Ham","Salami","Sliced Sausage",
"Olives","Pineapples","Green Bell Peppers","Red Bell Peppers","Mushrooms","Spinach",
"Artichokes","Onions","Garlic","Green Onions","Anchovies","Bacon","Extra Cheese",
"Squared Tomatoes"];


// This code is the randomizing process that the toppings much go through. This 
// patch of code is in equation form so that when the topping is picked, it 
// will most likely change every time the JavaScript is commenced.
var topping1 = toppings[Math.floor(Math.random()*toppings.length)];


// This final patch of code inclues the dropdown values and what each value 
// specifally does when initating the randomizing process. There is also an 
// addEventListener for the clicking of the redButton, and this code says that 
// when the specific event of clicking happens, the function "randomize" will 
// start. Each dropdown has it's own amount of toppings and something that I 
// haven't completed yet is getting multiple toppings and being able to not 
// duplicate some toppings. Overall, the JavaScript used in this project is 
// pretty similar to the calculator since both projects use code equations in 
// order to get answers.

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