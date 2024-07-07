(function(){let clockCTA = document.querySelector(".clock-CTA");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let continueBtn = document.querySelector(".continue");
let hourBox = document.querySelector(".hour");
let minuteBox = document.querySelector(".minute");
let secondBox = document.querySelector(".second");

let hour = 0;
let minute = 0;
let second = 0;
let countDownTimer;


clockCTA.addEventListener('click', function(e){
    let val = e.target.className;
    console.log(`${val} clicked`);

    if(val == "start"){
        startBtn.classList.add("hide");
        stopBtn.classList.remove("hide");

        countDownTimer = setInterval(() => {
            timer();
            console.log(`hour : ${hour} mintue : ${minute} second : ${second}`);
        }, 1000);
    }
    else if(val == "stop"){
        stopBtn.classList.add("hide");
        continueBtn.classList.remove("hide");
        stopTimer();
    }
    else if(val == "continue"){
        continueBtn.classList.add("hide");
        stopBtn.classList.remove("hide");
        
        countDownTimer = setInterval(() => {
            timer();
        }, 1000);
    }
    else if(val == "reset"){
        startBtn.classList.remove("hide");
        stopBtn.classList.add("hide");
        continueBtn.classList.add("hide");
        stopTimer();
        resetTimer();
    }

    function stopTimer(){
        clearInterval(countDownTimer);
        console.log("Timer stopped");
    }

    function timer(){
        second++;
    
        if(second >= 60){
            second = second-59;
            minute++; 
        }
        
        if(minute >= 60){
            minute = minute-59;
            hour++;
        }

        updateDisplay();
        
    }

    function updateDisplay() {
        hourBox.innerHTML = hour.toString().padStart(2, '0');
        minuteBox.innerHTML = minute.toString().padStart(2, '0');
        secondBox.innerHTML = second.toString().padStart(2, '0');
    }

    function resetTimer(){
        hour=0;
        minute=0;
        second=0;

        updateDisplay();
    }
})})()

