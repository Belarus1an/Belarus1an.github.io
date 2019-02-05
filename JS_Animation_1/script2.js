var rocket = document.getElementById("rocket");
var text = document.getElementById("text");

var timer;
var number = 5;

text.style.display = "none";

function start(){
    var run = 0;
    
    timer = setInterval(function (){
    rocket.style.bottom = run + "px";
    run = run += 3;

        if(rocket.style.bottom == 375 + "px"){
            rocket.style.display = "none"
            clearInterval(timer);
            rocket.style.bottom = 0;
            stopAudio();
        }
    }, 30);
}

function obr(){

    if(number == 5){
        goAudio();
        text.style.display = "block";
    }

    document.getElementById("text").innerHTML = number;
    rocket.style.display = "block";
    number--;

        if(number < 0){
            text.style.display = "none";
            clearTimeout(timer);
            goRocket();
            number = 5;
            start();

        } else {
            timer = setTimeout(obr, 1000);
    }
}

var audio = new Audio("audio/goRocket.mp3");
var audio1 = new Audio("audio/rocket.mp3");
var audio2 = new Audio("audio/alarm2.mp3");

function goAudio(){
    audio1.play();
    audio2.play();
}

function goRocket(){
    audio.play();
}







