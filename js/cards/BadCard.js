class BadCard extends Card{
    /**
     *
     * @param scene
     * @param value
     * @param cardTexture {CardTexture}
     */
    constructor(scene, value, cardTexture) {
        super(scene, value, cardTexture);
    }

    open(callback) {
        this.scene.lock = true;
        super.open(callback);
    }

    onClick(){
        super.onClick();

        this.scene.statistic.IncrementErrors();
        this.scene.life.Reduce();
        this.scene.scoreText.Update();
        if (!this.scene.life.IsAlive()) {
            this.scene.sounds.timeout.play();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Вы проиграли',
                footer: '<a href="#">Не повезло в картах, повезет в любви =)</a>',
                allowOutsideClick: false,
                willClose: () => {
                    this.scene.endGame(true);
                    this.scene.lock = false;
                }
            })

        } else {
            Swal.fire({
                text: `Появилась новая опасность, у вас осталось попыток: ${this.scene.life.currentLife}`,
                allowOutsideClick: false,
                willClose: () => {
                    this.scene.lock = false;
                }
            });
        }
        if (this.scene.openedCard) {
            this.scene.openedCard.close();
        }
        this.scene.openedCard = this;
    }
}
