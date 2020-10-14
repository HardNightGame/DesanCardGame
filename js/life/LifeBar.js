class LifeBar {
    constructor(scene, lifeService) {
        this.BarText ="Осталось попыток: ";
        this.scoreText = scene.add.text(420, 2, `${this.BarText} *`, {
            font: '22px Arial',
            fill: '#ffffff'
        });
        this.lifeService = lifeService;
    }

    Update() {
        this.scoreText.setText(`${this.BarText} ${this.lifeService.currentLife}`);
    }
}
