// Under this comment is a list of variables that take place in the JavaScript. Variables
//is the thing that recives that actions and connects the HTML with the JS. By adding the 
//element ID to the variable, if an action needs to be done, the variable refers back to the 
//element ID so the variable knows what to do the action to.
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

//This Event Listener is a code that says "If the event of "click" were to happen, 
//it would do the math."
button.addEventListener("click", doMath);

//"function doMath" is a code that says the function is doing math whenever 
// another code inputs the code of "doMath."
function doMath() {
    
// The dropdown values in JavaScript basically says that if these certain values 
// in the dropdown box were to be chosen, it would create an equation from the 
// input values and make the mathmatical procedure become visible in the "display.innerHTML = answer."
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "^"){
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    }
}