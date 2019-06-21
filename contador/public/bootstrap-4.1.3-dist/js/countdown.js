// Countdown
// @author Eduardo Cavalcante de Melo

var check = false;
function xequemate() {

	if (check == false) {
		var timer1 = setInterval(function(){ start() }, 1000);
		var cont = 5;
		function start () {
			beep();
			document.getElementById("time").innerHTML = cont;
			if (cont == 0) {
				clearInterval(timer1);
				document.getElementById("fire").src = "img/contdown/explosion.gif";
				document.getElementById("time").innerHTML = "SE LASCOOOOO :P";
				thunder();
			}
			cont --;
		}
		check = true;
	}
}

function beep () {
	var beep = new Audio ();
	beep.src = "img/contdown/Beep_Short.mp3";
	beep.play();	
}

function thunder () {
	var beep = new Audio ();
	beep.src = "img/contdown/Thunder_Crack.mp3";
	beep.play();
}