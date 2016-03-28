// JavaScript File
var display2 = document.getElementById("display2")
var redButton2 = document.getElementById("redButton2")
var crust = ["Original","Stuffed","Garlic Parmasan","Shredded Cheddar","Baked Whole Oat Grain"
"Pan Style","Pepperoni Stuffed Crust","High Crust","Honey Baked","Thin Crust",""];



var crust = toppings[Math.floor(Math.random()*toppings.length)];



redButton2.addEventListener("click",randomize);