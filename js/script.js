document.getElementById("brainRot").onclick = function() {brainrotFunction()};
document.getElementById("jackie").onclick = function() {jackieFunction()};
document.getElementById("jorkin").onclick = function() {jorkinFunction()};
document.getElementById("brainRot").onclick = function() {brainrotFunction()};
document.getElementById("brainRot").onclick = function() {brainrotFunction()};
document.getElementById("mainVid").onclick = function() {mainVid()};

var a = document.getElementById("myVideo");
var b = document.getElementById("brainrotImg");
var c = document.getElementById("jackieVid");
var d = document.getElementById("jorkinIt");
// var e =
function brainrotFunction() { 
  a.src = "img/brainrot.mp4"
  a.load();
}

function jackieFunction() {
  a.src = "img/jackievid.mp4"
  a.load();
}



if (a.src = "img/brainrot.mp4"){
b.src = "img/sigma.jpg"
c.src = "img/jackiethumbnail.jpg"
d.src = "jorkin.jpg"
}else if(a.src = "img/sigma.mp4"){
b.src = "img/brainrot.jpg"
c.src = "img/jackiethumbnail.jpg"
d.src = "jorkin.jpg"
}