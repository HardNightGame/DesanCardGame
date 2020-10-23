class questionFactory {
    constructor() {
        this.questions = [
            new exactQuestion(24, 'Сколько лет компании Десан?'),
            new exactQuestion('нет', 'Лечо "Помидорка" сделана по ГОСТу?'),
            new exactQuestion(3, 'Сколько брендов у компании Десан?'),
        ];
        this.questions = Phaser.Utils.Array.Shuffle(this.questions);
    }

    getQuestion() {
        return this.questions.pop();
    }
}
