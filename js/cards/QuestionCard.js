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

        Swal.fire({
            text: `Карта викторина: ${this.scene.life.currentLife}`,
            allowOutsideClick: false,
            willClose: () => {
                this.scene.lock = false;
            }
        });
    }
}
