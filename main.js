var problems = [
    new Problem("In which country would you be if you were visiting the Taj Mahal?", ["India", "French", "Pakistan", "Canada"], "India"),
    new Problem("In which continent is the world’s longest river?", ["Asia", "Europe", "Africa", "South America"], "Africa"),
    new Problem("What is the only major city located on two continents?", ["Marseille", "Istanbul", "Hamburg", "Mumbai"], "Istanbul"),
    new Problem("What is the official language of the Canadian province Quebec?", ["English", "French", "Spanish", "Hebrew"], "French"),
    new Problem("Which country has the most volcanoes?", ["Japan", "Indonesia", "Australia", "Canada"], "Indonesia"),
    new Problem('What country is called "Land of Fire and Ice"?', ["Russia", "Canada", "Greenland", "Iceland"], "Iceland"),
    new Problem("What river flows through Paris?", ["Seine", "Volga", "Main", "Thames"], "Seine"),
    new Problem("Havana is the capital of what country?", ["Spain", "Cuba", "Costa Rica", "Afganistan"], "Cuba"),
    new Problem("Which ocean is Bermuda in?", ["Atlantic", "Pacific", "Indian", "Southern"], "Atlantic"),
    new Problem("What is the smallest country in the world?", ["Monaco", "Vatican", "Maldives", "Tuvalu"], "Vatican")
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
                <a class="rank" style="text-decoration: none; text-align:center;" href=""><b>Your Ranking</b></a>
            </div>
            <div id="score">
                <h1 id="text"><b>YOUR SCORE</b></h1>
                <div id="scoreBoard"></div>
            </div>

            <div class="timeResult">
                <b style="float: left; margin-left: 80px;">Time</b>
                <div id="timeResult"></div>
            </div>
        </div>`;

    document.getElementById('scoreBoard').innerHTML = quiz.score + "/" + quiz.problems.length;
    myStopFunction();
}

/* ------------------- */

// --------------------------- //

var modal = document.getElementById("myModal");
var button = document.getElementById("myButton");
var close = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
    pressEnter();
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

function pressEnter(){
    var input = document.getElementById("nameInput");
    input.addEventListener("keyup", function(event){
        if (event.keyCode == 13){
            event.preventDefault();
            document.getElementById("close").click();
        }
    });
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

