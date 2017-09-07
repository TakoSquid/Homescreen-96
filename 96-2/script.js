
var songMinutes = 4;
var songSeconds = 38;
var min, sec, displaySec = "";

window.onload = main;

window.setInterval(function(){
  date();
}, 1000);

var months = ["Jan", "Fev", "mars", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]
var d;
function main() {
  min = Math.floor(Math.random()*songMinutes);
  sec = Math.floor(Math.random()*songSeconds);
  if(sec < 10)
    displaySec += "0";
  displaySec += sec;

  date();
  fillHeader();
  progressBar();
}



function date() {
  d = new Date();

  document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes();
  document.getElementById("date").innerHTML = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

function fillHeader() {
  document.getElementById("artist").innerHTML = "Porter Robinson";
  document.getElementById("songTitle").innerHTML = "Flicker";
  document.getElementById("albumName").innerHTML = "Worlds";
  document.getElementById("timeCode").innerHTML = min + ":" + displaySec;
  document.getElementById("state").innerHTML = "paused";
}

function progressBar() {
  var pourcent = (min * 60 + sec) * 100 / (songMinutes * 60 + songSeconds);
  document.getElementById("progressBar").style.width = pourcent + "%";
}
