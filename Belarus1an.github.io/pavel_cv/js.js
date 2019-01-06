function btnRossian(){
	document.getElementById("textHello").innerHTML = "Привет. Меня зовут Павел. Я младший веб-разработчик. Это моя первая программа в javascript :D"
	document.getElementById("h2").innerHTML = "Мой Калькулятор";
}

function btnPolish(){
	document.getElementById("textHello").innerHTML = "Witam. Mam na imię Pavel. Jestem młodszym web-developerem. To jest mój pierwszy program w javascript :D"
	document.getElementById("h2").innerHTML = "Mój Kalkulator";
}

function btnEnglish(){
	document.getElementById("textHello").innerHTML = "Hello. My name is Pavel. I am a junior web-developer. This is my first program in javascript :D"
	document.getElementById("h2").innerHTML = "My Calculator";
}

function sum(){
	var num1, num2, result;
	num1 = document.getElementById("enterNumber1").value;
	num2 = document.getElementById("enterNumber2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1 + num2;
	document.getElementById("resultCalc").innerHTML = num1 + " + " + num2 + " = " + result;
	 document.getElementById("enterNumber1").value = "";
	 document.getElementById("enterNumber2").value = "";
}

function min(){
	var num1, num2, result;
	num1 = document.getElementById("enterNumber1").value;
	num2 = document.getElementById("enterNumber2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1 - num2;
	document.getElementById("resultCalc").innerHTML = num1 + " - " + num2 + " = " + result;
	 document.getElementById("enterNumber1").value = "";
	 document.getElementById("enterNumber2").value = "";
}

function mul(){
	var num1, num2, result;
	num1 = document.getElementById("enterNumber1").value;
	num2 = document.getElementById("enterNumber2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	result = num1 * num2;
	document.getElementById("resultCalc").innerHTML = num1 + " * " + num2 + " = " + result;
	 document.getElementById("enterNumber1").value = "";
	 document.getElementById("enterNumber2").value = "";
}

function div(){
	var num1, num2, result;
	num1 = document.getElementById("enterNumber1").value;
	num2 = document.getElementById("enterNumber2").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	if(num2 == 0){
		document.getElementById("resultCalc").innerHTML = "Error! Division by zero!";
	} else {
		result = num1 / num2;
	document.getElementById("resultCalc").innerHTML = num1 + " / " + num2 + " = " + result;
	 document.getElementById("enterNumber1").value = "";
	 document.getElementById("enterNumber2").value = "";
	}
}

autoSlider();

var left = 0;
var timer;

function autoSlider(){
	timer = setTimeout(function(){
		var polosa = document.getElementById("polosa");
		left -= 66;
		if(left < -330){
		left = 0;
		clearTimeout(timer);
	}
		polosa.style.left = left + "px";
		autoSlider();
	}, 2000);
}

// var img = document.getElementById("polosa");

// polosa.onmouseover = function() {
//     clearTimeout(timer);
// };

// polosa.onmouseout = function() {
//     autoSlider();
// };﻿