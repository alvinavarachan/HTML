
// Display time on the Screen

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('Dtime').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// Time display code ends


// Audio playing code Starts

var x = document.getElementById("myAudio"); 
var count=1;
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

function nextsong() {
  x.stop();
   
   for(var i=1; i<=5; i++)
   {

   }
  
} 



// Audio play code ends

// Audio button toggle

$(document).ready(function(){
  $("#btnpa").hide();
  $(".btn").click(function(){
    $(".btn").toggle();
  });
});

// Button toggle Ends












