function finddeterminant(){
	var number1 = parseInt(document.getElementById("s11").value);
	var number2 = parseInt(document.getElementById("s12").value);
	var number3 = parseInt(document.getElementById("s13").value);

	var number4 = parseInt(document.getElementById("s21").value);
	var number5 = parseInt(document.getElementById("s22").value);
	var number6 = parseInt(document.getElementById("s23").value);

	var number7 = parseInt(document.getElementById("s31").value);
	var number8 = parseInt(document.getElementById("s32").value);
	var number9 = parseInt(document.getElementById("s33").value);


	var determinant = (number1*number5*number9 + number3*number7*number9+ number7*number2*number6) - (number3*number5*number7 + number1*number8*number6 + number9*number4*number2);
	console.log(determinant);
	document.getElementById("result").innerHTML = determinant;
}