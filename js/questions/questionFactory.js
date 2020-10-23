class questionFactory {
    constructor() {
        this.questions = [
            new exactQuestion(24, 'Сколько лет компании Десан?'),
            new exactQuestion('нет', 'Лечо "Помидорка" сделана по ГОСТу?')
        ];
    }

    getQuestion() {
        let randomNumber = this.getRandomIntInclusive(0, 1);
        return this.questions[randomNumber];
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
}