function add() {
	let num1 = parseFloat(document.getElementById("textbox1").value);
	let num2 = parseFloat(document.getElementById("textbox2").value);
	let result = num1 + num2;
	document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
}

function subtract() {
	let num1 = parseFloat(document.getElementById("textbox1").value);
	let num2 = parseFloat(document.getElementById("textbox2").value);
	let result = num1 - num2;
	document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
}

function multiply() {
	let num1 = parseFloat(document.getElementById("textbox1").value);
	let num2 = parseFloat(document.getElementById("textbox2").value);
	let result = num1 * num2;
	document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
}

function divide() {
	let num1 = parseFloat(document.getElementById("textbox1").value);
	let num2 = parseFloat(document.getElementById("textbox2").value);
	let result = num1 / num2;
	document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
}

function modulus() {
	let num1 = parseFloat(document.getElementById("textbox1").value);
	let num2 = parseFloat(document.getElementById("textbox2").value);
	let result = num1 % num2;
	document.getElementById("result").innerHTML = "The remainder of " + num1 + " divided by " + num2 + " is " + result + ".";
}
