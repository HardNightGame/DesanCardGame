class LifeBar {
    constructor(scene, lifeService) {
        this.scoreText = scene.add.text(400, 2, 'Score: *', {
            font: '22px Arial',
            fill: '#ffffff'
        });
        this.lifeService = lifeService;
    }

    Update() {
        this.scoreText.setText(`Score: ${this.lifeService.currentLife}`);
    }
}
