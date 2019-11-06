function check()
{


var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var d= new Date;
	var wnum= d.getDay();
	var week= weekday[wnum];
	var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	document.getElementById("tdate").innerHTML= week + "  :   " + time;
	
}



var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e70d60f32ef88dca155cc098717c9c52')
.then(response => response.json())
.then(data => {
var tempValue = data['main']['temp'];
var nameValue = data['name'];
var descValue = data['weather'][0]['description'];
main.innerHTML = nameValue;
var icon= ('<span class="fwarn glyphicon glyphicon-cloud" style="font-size:40px;color:gray"></span>');
desc.innerHTML =  icon + " :  "+descValue;

var x  = 9/5;
var f = Math.trunc(tempValue -273.15);
temp.innerHTML = "Temp - "+f+'<sup>0</sup> C';
input.value ="";
})
.catch(err => alert("Wrong city name!"));
})

$(function(){
var games = ["Kottayam","Kochi","Kozhikodu","Mumbai","Chennai","Kannur","Jaipur","Kollam"];

$("#autocomplete").autocomplete({
source: games
});
});


