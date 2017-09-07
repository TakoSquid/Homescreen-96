

window.onload = main;

window.setInterval(function(){
  date();
}, 1000);

var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
var months = ["Janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]
var d;
function main() {
  date();
}



function date() {
  d = new Date();
  document.getElementById("dayStr").innerHTML = days[d.getDay()];

  var monthDayIntReturn = months[d.getMonth()] + ". ";
  if(d.getDate() < 10)
    monthDayIntReturn += "0";
  monthDayIntReturn += d.getDate();
  document.getElementById("monthDayInt").innerHTML = monthDayIntReturn;

  var hourReturn = "";
  if(d.getHours() < 10)
    hourReturn = "0";
  hourReturn += d.getHours();
  document.getElementById("hour").innerHTML = hourReturn;

  var minuteReturn = "";
  if(d.getMinutes() < 10)
    minuteReturn = "0";
  minuteReturn += d.getMinutes();
  document.getElementById("minute").innerHTML = minuteReturn;


  var progressBarWidth = 100 * d.getSeconds() / 60;
  document.getElementById("progressBar").style.width = progressBarWidth + "%";
}
