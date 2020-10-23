class QuestionCard extends Card {
    /**
     *
     * @param scene
     * @param cardTexture {CardTexture}
     */
    constructor(scene, cardTexture, question) {
        super(scene, cardTexture);
        this.question = question;
    }

    open(callback) {
        this.scene.lock = true;
        super.open(callback);
    }

    onClick() {
        super.onClick();

        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Принять',
            allowOutsideClick: false
        }).queue([
            {
                title: 'Карточка с вопросом',
                text: this.question.getQuestion()
            },
        ]).then((result) => {
            this.scene.lock = true;
            if (this.question.isAnswerCorrect(result.value)) {
                Swal.fire({
                    title: 'Вы ответили правильно',
                    confirmButtonText: 'Продолжить!',
                    allowOutsideClick: false,
                    willClose: () => {
                        this.scene.lock = false;
                    }
                });
            } else {
                Swal.fire({
                    title: 'Вы ответили НЕ правильно',
                    confirmButtonText: 'Продолжить!',
                    allowOutsideClick: false,
                    willClose: () => {
                        this.scene.lock = false;
                    }
                });
            }
        });
        if (this.scene.openedCard) {
            this.scene.openedCard.close();
        }
        this.scene.openedCard = this;
    }
}
