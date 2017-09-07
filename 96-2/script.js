

window.onload = main;

window.setInterval(function(){
  date();
}, 1000);

var months = ["Jan", "Fev", "mars", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]
var d;
function main() {
  date();

  document.getElementById("volume").innerHTML = "Volume: " + Math.floor(Math.random()*10);
}



function date() {
  d = new Date();

  document.getElementById("time").innerHTML = d.getHours() + ":" + d.getMinutes();
  document.getElementById("date").innerHTML = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}
