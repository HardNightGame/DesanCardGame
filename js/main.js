let config = {
    type: Phaser.AUTO,
    width: 1279,
    height: 780,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scene.CENTER_BOTH
    },
    parent: 'game',
    rows: 4,
    cols: 10,
    cards: 19,
    bad_cards: 2, // Колличество плохих карт
    lifes: 3, // Колличество жизней
    timeout:20,
    scene: new GameScene()
};
let game = new Phaser.Game(config);
