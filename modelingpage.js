// JavaScript File
var pointguardButton = document.getElementById("pointguardButton")
var shootinguardButton = document.getElementById("shootguardButton")
var smallforwardButton = document.getElementById("smallforwardButton")
var powerforwardButton = document.getElementById("powerforwardButton")
var centerButton = document.getElementById("centerButton")
var pointguards = ["http://media-spacejam.cursecdn.com/avatars/thumbnails/4/255/384/384/p6_233_8824.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/436/384/384/p6_238_9008.png"]

var pointguards = pointguards[Math.floor(Math.random()*pointguards.length)];

pointguardButton.addEventListener("click",randomize);

function randomize(evt){
    if  (evt.target.id === "pointguardButton"){
        display.pointGuardimage = pointguards[Math.floor(Math.random()*pointguards.length)];
    }
}