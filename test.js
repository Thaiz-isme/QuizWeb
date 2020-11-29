/*----------*/
let Quiz = function(problems) {
    this.score = 0;
    this.problems = problems;
    this.currentProblem = problems[0];
    this.index = 0;
    this.questionAnswered = 0;

    this.show = function() {
        this.currentProblem.getKeyId();
        document.getElementById("questionNum").innerHTML = "Question " + (this.index + 1);
        document.getElementById("question").innerHTML = this.currentProblem.question;

        if (this.questionAnswered < problems.length)
        {
            if (this.index == 0)
                document.getElementById("back").style.display = "none";

            else if (this.index == (this.problems.length - 1))
                document.getElementById("next").style.display = "none";
            else{
                document.getElementById("back").style.display = "inline-block";
                document.getElementById("next").style.display = "inline-block";
            }

            if (!this.currentProblem.done)
            {
                for (let i = 0; i < this.currentProblem.choices.length; i++) {
                    let element = document.getElementById("label" + i);
                    element.innerHTML = this.currentProblem.choices[i];
                }
                for (let i = 0; i < this.currentProblem.choices.length; i++) 
                    self.choose("button" + i, this.currentProblem.choices[i]);  
            }

            else
            {
                for (let i = 0; i < this.currentProblem.choices.length; i++) {
                let element = document.getElementById("label" + i);
                element.innerHTML = this.currentProblem.choices[i];
                }

                for (var i = 0; i < 4; i++)
                    document.getElementById("button" + i).disabled = true;

                if (this.currentProblem.keyId == this.currentProblem.answerId)
                    document.getElementById(this.currentProblem.keyId).style.backgroundColor = "yellow";
                else
                {
                    document.getElementById(this.currentProblem.keyId).style.backgroundColor = "yellow";
                    document.getElementById(this.currentProblem.answerId).style.backgroundColor = "red";
                }
            }
        }
    }

    this.update = function() {
        this.currentProblem = this.problems[this.index];
    }


    this.choose = function(id, answer) {
        var button = document.getElementById(id);

        button.onclick = () => {
            if (this.currentProblem.isCorrectAnswer(answer)) {
                this.score++;

                document.getElementById(id).style.backgroundColor = 'yellow';
                this.currentProblem.done = true;
                this.questionAnswered++;
                this.currentProblem.answerId = id;
                document.getElementById("q" + this.index).style.backgroundColor = "green";
                self.disableAllButton(true);
                // Animation
                if (this.questionAnswered < this.problems.length){
                    document.getElementById("good").style.display = "inline-block";
                    setTimeout(function(){document.getElementById("good").style.display = "none";}, 1500);
                }

                if (this.questionAnswered == (this.problems.length)){
                    document.getElementById("good").style.display = "inline-block";
                    setTimeout(function(){document.getElementById("good").style.display = "none";}, 1500);
                    setTimeout(function(){showStats();}, 1500);
                }
            } 
            else {
                this.currentProblem.getKeyId();
                document.getElementById(id).style.backgroundColor = 'red';
                document.getElementById(this.currentProblem.keyId).style.backgroundColor = "yellow";
                document.getElementById("q" + this.index).style.backgroundColor = "red";

                this.currentProblem.answerId = id;
                this.currentProblem.done = true;
                this.questionAnswered++;
                self.disableAllButton(true);
                // Animation
                if (this.questionAnswered < this.problems.length){
                    document.getElementById("incorrect").style.display = "inline-block";
                    setTimeout(function(){document.getElementById("incorrect").style.display = "none";}, 1500);
                }

                if (this.questionAnswered == (this.problems.length)){
                    document.getElementById("incorrect").style.display = "inline-block";
                    setTimeout(function(){document.getElementById("incorrect").style.display = "none";}, 1500);
                    setTimeout(function(){showStats();}, 1500);
                }
            }
        }
    }

    this.disableAllButton = function(status) {
        for (let i = 0; i < this.currentProblem.choices.length; i++) {
            var tag = '#button' + i;
            button = document.querySelector(tag);
            button.disabled = status;
        }
    }

    this.reset = function() {
        self.disableAllButton(false);
        for (let i = 0; i < this.currentProblem.choices.length; i++) {
            var tag = 'button' + i;
            document.getElementById(tag).style.backgroundColor = '#01BBFF';
        }
    }

    self = this;
}


// picked = [];
//         while(picked.length())
//         var pick = Math.floor(Math.random() * 10);
//         if(!picked.includes(pick) && pick < 10) picked.push(pick);
