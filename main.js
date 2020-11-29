var problems = [
    new Problem("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML", "CSS", "HTML"], "HTML"),
    new Problem("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Problem("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Problem("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Problem("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All"),
    new Problem("What is 1+1=?", ["1", "2", "3", "4"], "2"),
    new Problem("Who is the most handsome boy?", ["Tien", "Kiet", "Thai", "Nhan"], "Tien"),
    new Problem("What do you do?", ["Dentist", "Doctor", "Dev", "Hacker"], "Hacker"),
    new Problem("What is 2^6", ["I don't know", "231", "423", "64"], "64"),
    new Problem("Who is the champion in RapViet show 2020", ["G-Ducky", "Ricky Star", "De Choat", "Yuno Bigboy"], "De Choat")
];

var quiz = new Quiz(problems);
var timer = 60;
var timeRemain = timer;




// --------Timer-----------
var idVar;


function myStopFunction() {
    clearInterval(idVar);

    document.getElementById("timer").innerHTML = '';
    document.getElementById("timeLeft").style.visibility = "hidden";
    if(timer == 0) timeRemain = "00:00";
    else {
        timeRemain -= timer;
        var minuteRemain = Math.floor(timeRemain / 60);
        if (minuteRemain / 10 < 1) minuteRemain = "0" + minuteRemain;
        var secondRemain = timeRemain % 60;
        if (secondRemain / 10 < 1) secondRemain = "0" + (secondRemain - 2);
        document.getElementById('timeResult').innerHTML = minuteRemain + ":" + secondRemain;
    }
    
}

function moveTo(value) {
    if (value === "next") 
    {
        quiz.index++;
    } 
    else if (value == "back"){
        quiz.index--;   
    } 
    else {
        quiz.index = parseInt(value);
    }
    quiz.reset();
    quiz.update();
    quiz.show();
}

function showStats(){
    
    document.getElementById("container").innerHTML =
        `<div id="mainContain">
            <p id="font"><b>Your Result</b></p>
            <div id="link">
                <a class="rank" style="text-decoration: none;" href=""><b>Your Ranking</b></a>
            </div>
            <div id="score">
                <h1 id="text"><b>YOUR SCORE</b></h1>
                <div id="scoreBoard"></div>
            </div>

            <div class="timeResult">
                <b style="float: left; margin-left: 80px;">Time</b>
                <div id="timeResult"></div>
            </div>
        </div>

    </div>`;
    document.getElementById('scoreBoard').innerHTML = quiz.score + "/" + quiz.problems.length;
   
    myStopFunction();
}

// --------------------------- //

var modal = document.getElementById("myModal");
var button = document.getElementById("myButton");
var close = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
    getStarted();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* ----------------- */

function getStarted(){
    quiz.userName = document.getElementById("nameInput").value;
    document.getElementById("getName").style.display = "none";
    document.getElementById("qFrame").style.display = "inline-block";
    console.log(quiz.userName);
    quiz.show();
    idVar = setInterval(() => {
        if (timer >= 0){
            var minute = Math.floor(timer / 60);
            if (minute / 10 < 1) minute = "0" + minute;
            var second = timer % 60;
            if (second / 10 < 1) second = "0" + second;
            document.getElementById("timer").innerHTML = minute + ":" + second;
            timer -= 1;
        }
        else {
            showStats();
            myStopFunction();
        }
    }, 1000);
}

