// @author Eduardo Paixão

var sorteio = Math.floor(Math.random() * 6 + 1);

switch(sorteio){
	case 1:
	document.getElementById("face").src="img/dado/face1.png";
	break;
	case 2:
	document.getElementById("face").src="img/dado/face2.png";
	break;
	case 3:
	document.getElementById("face").src="img/dado/face3.png";
	break;
	case 4:
	document.getElementById("face").src="img/dado/face4.png";
	break;
	case 5:
	document.getElementById("face").src="img/dado/face5.png";
	break;
	case 6:
	document.getElementById("face").src="img/dado/face6.png";
	break;
	default:
	// caso contrario
	break;
}