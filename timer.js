
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){   
        var AmPm ="PM";
    }
    Time.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    Time_ampm.innerText = `${AmPm}`;
}

function pomoStart(){
    const pomo_timer = document.getElementById('btn');
    pomo_timer.disabled = true;
    $time = 1501;
    pomodoroTimer();
    setInterval(clock, 500);
    pomoInterval = setInterval(pomodoroTimer, 1000);
}

function pomodoroTimer(){
    $time--;
    const pomo_timer = document.getElementById('btn');
    let minute = parseInt($time / 60);
    let second = parseInt($time % 60);
    pomo_timer.innerText = `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
    if (break_time){
        document.title = "Pomodoro Timer | " + pomo_timer.innerText + tomatoes;
    }
    else{
        document.title = "Pomodoro Timer | " + pomo_timer.innerText + " 🤗";
    }
    
    if ($time <= 0){
        beep();
        clearInterval(pomodoroTimer);
        if (break_time){
            $time = 300;
            break_time = false
            tomatoes += "🍅"
        }
        else{
            $time = 1501;
            break_time = true;
        }
    }
}

function beep(){
    var audio1 = new Audio("mixkit-discrete-door-bell-announcement-225.wav");
    audio1.loop = false;
    audio1.play();
}
