// Slide show
// @author Eduardo Cavalcante

var intervalo = 3000;

function slide1 () {
	document.getElementById("banner").src= "http://dummyimage.com/1080x300/4d494d/686a82.gif&text=placeholder+image";
	setTimeout("slide2 ()", intervalo);
}

function slide2 () {
	document.getElementById("banner").src= "http://dummyimage.com/1050x300/4d494d/686a82.gif&text=placeholder+image";
	setTimeout("slide3 ()", intervalo);
}

function slide3 () {
	document.getElementById("banner").src= "http://dummyimage.com/1020x300/4d494d/686a82.gif&text=placeholder+image";
	setTimeout("slide1 ()", intervalo);
}