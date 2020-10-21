class SkuCard extends Card {
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

        if (this.scene.openedCard) {
            // уже есть открытая карта
            if (this.scene.openedCard.value === this.value) {
                // картинки равны - запомнить
                this.scene.sounds.success.play();
                this.scene.openedCard = null;
                ++this.scene.openedCardsCount;
                //    this.restart();
            } else {
                // картинки разные - скрыть прошлую
                this.scene.openedCard.close();
                this.scene.openedCard = this;
            }
        } else {
            // еще нет открытой карта
            this.scene.openedCard = this;
        }
        if (this.scene.openedCardsCount === (config.cards * 2) / 2) {
            this.scene.sounds.complete.play();
            this.scene.timer.paused = true;
            this.scene.statistic.gameWin = true;
            this.scene.endGame();
        }
    }
}
