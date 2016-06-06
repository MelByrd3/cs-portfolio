// JavaScript File
var pointguardButton = document.getElementById("pointguardButton");
var shootingguardButton = document.getElementById("shootingguardButton");
var smallforwardButton = document.getElementById("smallforwardButton");
var powerforwardButton = document.getElementById("powerforwardButton");
var centerButton = document.getElementById("centerButton");

var pointguards = ["Derrick Rose","Stephen Curry","Mike Conley","Ricky Rubio",
"Rajon Rondo","John Wall","Russell Westbrook","Kyrie Irving","Chris Paul","Tony Parker",
"Damien Lillard","Kyle Lowry","Ty Lawson","Kemba Walker","Jeremy Lin","Goran Dragic","Isiah Thomas"];
var pointGuardsImg = ["http://4.bp.blogspot.com/-B7dQZWbEAsI/TcEG-a4hPVI/AAAAAAAAA7k/SnYLR3jWK8Y/s1600/Derrick-Rose.png","http://i137.photobucket.com/albums/q239/Friartown/SCurry7.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/121/384/384/p6_224_8689.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/416/384/384/p6_244_8988.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/499/384/384/p5_160_9322.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/5/403/384/384/p5_365_10080.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/208/384/384/p1_23_1510.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/5/322/384/384/p1_1_10073.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/107/384/384/p6_223_8674.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/371/384/384/p6_241_8943.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/431/384/384/p6_245_9003.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/342/384/384/p6_239_8913.png",
"http://i137.photobucket.com/albums/q239/Friartown/Lawson.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/166/384/384/p6_227_8734.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/283/384/384/p1_5_1718.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/236/384/384/p1_17_1555.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/311/384/384/p1_1_1750.png"];

var shootingguards = ["Kobe Bryant","James Harden","Klay Thompson","Dwayne Wade",
"DeMar DeRozan","Bradly Beal","Manu Ginobli","Monta Ellis","Wesley Matthews",
"Eric Gordon","Jason Terry","Tyreke Evans","Dion Waiters","Michael Jordan"];
var shootingGuardImg = ["http://media-spacejam.cursecdn.com/avatars/thumbnails/3/23/384/384/p1_15_195.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/357/384/384/p6_240_8929.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/592/384/384/p1_11_2338.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/152/384/384/p6_226_8720.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/343/384/384/p6_239_8914.png","http://www.picpicx.com/wp-content/uploads/2014/10/484a633e2159993c160a12789f703a09.png?63bea7",
"http://1.bp.blogspot.com/-saq0Pa0lH3M/U5T0XuYzaRI/AAAAAAAARzo/2nQ419MNnpc/s1600/Manu-Ginobili.png","http://i.cdn.turner.com/drp/nba/pacers/sites/default/files/montaellis-knowyourgold-cutout.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/282/384/384/p1_8_1699.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/314/384/384/p6_237_8885.png",
"http://i137.photobucket.com/albums/q239/Friartown/JET2.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/252/384/384/p1_21_1606.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/644/384/384/p1_23_2457.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/402/384/384/p1_153_2042.png"];

var smallforwards = ["Gordon Hayward","Lebron James","Kevin Durant","Kawhi Leonard",
"Rudy Gay","Carmelo Anthony","Paul George","Andrew Wiggins","Danny Granger",
"Kyle Korver","Danilo Gallinari","Giannis Antetokounmpo","Larry Bird"];
var smallForwardImg = ["http://media-spacejam.cursecdn.com/avatars/thumbnails/4/183/384/384/p6_228_8751.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/86/384/384/p1_7_1013.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/177/384/384/p1_23_1411.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/373/384/384/p6_241_8945.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/164/384/384/p1_28_1341.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/87/384/384/p1_22_1015.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/305/384/384/p6_236_8876.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/820/384/384/p5_106_9642.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/660/384/384/p5_160_9482.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/137/384/384/p6_225_8705.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/286/384/384/p6_235_8856.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/50/384/384/p6_219_8617.png",
"http://2kmtcentral.com/img/players/16/template/players/player-9606.png"];

var powerforwards = ["Chris Bosh","LaMarcus Aldridge","Dirk Nowitzki","Tim Duncan",
"Blake Griffin","Kevin Love","Kevin Garnett","Karl Malone"];
var powerForwardImg = ["http://i137.photobucket.com/albums/q239/Friartown/Bosh.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/434/384/384/p6_241_9006.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/937/384/384/p5_160_4536.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/33/384/384/p1_29_411.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/246/384/384/p1_14_1600.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/4/80/384/384/p6_221_8647.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/419/384/384/p6_244_8991.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/347/384/384/p2_66_1803.png"];

var centers = ["DeAndre Jordan","Dwight Howard","Karl-Anthony Towns","Andre Drummond",
"DeMarcus Cousins","Hassan Whiteside","Jonas Valanciunas","Shaquille O'Neal"];
var centerImg = ["http://media-spacejam.cursecdn.com/avatars/thumbnails/4/111/384/384/p6_223_8678.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/110/384/384/p1_12_1150.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/4/939/384/384/p6_244_9844.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/649/384/384/p1_10_2462.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/368/384/384/p1_28_1954.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/5/131/384/384/p5_126_10062.png",
"http://media-spacejam.cursecdn.com/avatars/thumbnails/3/587/384/384/p1_30_2332.png","http://media-spacejam.cursecdn.com/avatars/thumbnails/3/79/384/384/p2_59_948.png"];

var pointGuardimage = document.getElementById("pointGuardimage");
var shootingGuardimage = document.getElementById("shootingGuardimage");
var smallForwardimage = document.getElementById("smallForwardimage");
var powerForwardimage = document.getElementById("powerForwardimage");
var centerimage = document.getElementById("centerimage");
// var pointguards = pointguards[Math.floor(Math.random()*pointguards.length)];

pointguardButton.addEventListener("click",randomize);
shootingguardButton.addEventListener("click",randomize);
smallforwardButton.addEventListener("click",randomize);
powerforwardButton.addEventListener("click",randomize);
centerButton.addEventListener("click",randomize);

function randomize(evt){

    if  (evt.target.id === "pointguardButton"){
        var randomPG = Math.floor(Math.random()*pointguards.length);
        pointGuardimage.innerHTML = "<img style='height:275px' src='" + pointGuardsImg[randomPG] + "' >" + "<p>"  + pointguards[randomPG] + "</p>";
    }

    if  (evt.target.id === "shootingguardButton"){
        var randomSG = Math.floor(Math.random()*shootingguards.length);
        shootingGuardimage.innerHTML = "<img style='height:275px' src='" + shootingGuardImg[randomSG] + "'>" + "<p>"  + shootingguards[randomSG] + "</p>";
    }
    if  (evt.target.id === "smallforwardButton"){
        var randomSF = Math.floor(Math.random()*smallforwards.length);
        smallForwardimage.innerHTML = "<img style='height:275px' src='" + smallForwardImg[randomSF] + "'>" + "<p>"  + smallforwards[randomSF] + "</p>";
    }

    if  (evt.target.id === "powerforwardButton"){
        var randomPF = Math.floor(Math.random()*powerforwards.length);
        powerForwardimage.innerHTML = "<img style='height:275px' src='" + powerForwardImg[randomPF] + "'>" + "<p>"  + powerforwards[randomPF] + "</p>";
    }

    if  (evt.target.id === "centerButton"){
        
        var randomC = Math.floor(Math.random()*centers.length);
        centerimage.innerHTML = "<img style='height:275px' src='" + centerImg[randomC] + "'>" + "<p>"  + centers[randomC] + "</p>";
    }
}