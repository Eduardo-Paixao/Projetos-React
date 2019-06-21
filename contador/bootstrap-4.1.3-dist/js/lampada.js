// lampada
// @author Eduardo Cavalcante de melo

function ligar () {
	document.getElementById("lampada").src ="img/lampada/on.jpg"
}
function desligar () {
	document.getElementById("lampada").src ="img/lampada/off.jpg"
}
function piscar () {
	var intervalo = 300;
	var contador = 0;
	while (contador <10) {
		intervalo += 500;
		setTimeout("document.getElementById('lampada').src='img/lampada/on.jpg';",intervalo);
		intervalo += 500;
		setTimeout("document.getElementById('lampada').src='img/lampada/off.jpg';",intervalo);
		contador++;			
	}
}
