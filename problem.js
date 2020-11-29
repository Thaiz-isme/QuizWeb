let Problem = function(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
    this.done = false;
    this.keyId = "button";
    this.answerId = "button";

    this.isCorrectAnswer = function(choice) {
        return this.answer === choice;
    }

    this.getKeyId = function(){
        for (var i = 0; i < this.choices.length; i++)
        {
            if (this.choices[i] === this.answer)
                this.keyId = "button" + i;
        }
    }

}