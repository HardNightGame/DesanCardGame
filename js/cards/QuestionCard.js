class QuestionCard extends Card {
    /**
     *
     * @param scene
     * @param cardTexture {CardTexture}
     */
    constructor(scene, cardTexture) {
        super(scene, cardTexture);
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
                text: 'Сколько лет компании Десан?'
            },

        ]).then((result) => {
            this.scene.lock = true;
            if (result.value == 24) {
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
        this.scene.openedCard = null;
    }
}
