document.getElementById("brainRot").onclick = function() {myFunction()};

var x = document.getElementById("myVideo");

function myFunction() { 
  isSupp = x.canPlayType("video/mp4");
  if (isSupp == "") {
    x.src = "brainrot.mp4";
  } else {
    x.src = "brainrot.mp4";
  }
  x.load();
}