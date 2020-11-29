//window.onload = function() {}


function quizTimer(ss) {
    if(ss < 0) ss = 0;
    
    var idVar = setInterval(() => {
        if (ss >= 0){
            var minute = Math.floor(ss / 60);
            if (minute / 10 < 1) minute = "0" + minute;
            var second = ss % 60;
            if (second / 10 < 1) second = "0" + second;
            document.getElementById("timer").innerHTML = minute + ":" + second;
            ss -= 1;
        }
        else myStopFunction();
    }, 1000);

    function myStopFunction() {
        clearInterval(idVar);
        console.log("Stop");
        showStats();
    }
}
