class exactQuestion {
    constructor(answer, question) {
        this.answer = answer;
        this.question = question;
    }
    getQuestion() {
        return this.question;
    }
    isAnswerCorrect(userAnswer) {
        if (typeof userAnswer == "string") {
            let lowerCaseAnswer = userAnswer.toLowerCase();
            return this.answer == lowerCaseAnswer;
        } else {
            return this.answer == userAnswer;
        }
    }
}