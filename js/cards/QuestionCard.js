class QuestionCard extends Card {
    /**
     *
     * @param scene
     * @param value
     * @param cardTexture {CardTexture}
     */
    constructor(scene, value, cardTexture) {
        super(scene, value, cardTexture);
    }

    onClick() {
        super.onClick();
        this.scene.lock = true;

        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
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
    }
}