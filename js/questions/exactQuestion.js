class exactQuestion {
    constructor(answer, question) {
        this.answer = answer;
        this.question = question;
    }
    getQuestion() {
        return this.question;
    }
    isAnswerCorrect(userAnswer) {
        return userAnswer[0].toLowerCase() == this.answer;
    }
}
