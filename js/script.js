document.getElementById("brainRot").onclick = function() {brainrotFunction()};
document.getElementById("jackie").onclick = function() {jackieFunction()};
document.getElementById("jorkin").onclick = function() {jorkinFunction()};
document.getElementById("Aaron").onclick = function() {AaronFunction()};
document.getElementById("mainVid").onclick = function() {mainVidFunction()};

var a = document.getElementById("myVideo");
var b = document.getElementById("brainrotImg");
var c = document.getElementById("jackieVid");
var d = document.getElementById("jorkinIt");

function brainrotFunction() { 
  a.src = "img/brainrot.mp4"
  a.load();
}

function jackieFunction() {
  a.src = "img/jackievid.mp4"
  a.load();
}

function jorkinFunction() {
  a.src = "img/jorkin.mp4"
  a.load();
}

function mainVidFunction() {
  a.src = "img/sigma.mp4"
  a.load();
}

function AaronFunction() {
  a.src = "img/Aaron.mp4"
  a.load();
}



// if (a.src = "img/brainrot.mp4"){
// b.src = "img/sigma.jpg"
// c.src = "img/jackiethumbnail.jpg"
// d.src = "jorkin.jpg"
// }else if(a.src = "img/sigma.mp4"){
// b.src = "img/brainrot.jpg"
// c.src = "img/jackiethumbnail.jpg"
// d.src = "jorkin.jpg"
// }