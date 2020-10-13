let config = {
    type: Phaser.AUTO,
    width: 1279,
    height: 780,
    scale: {
        mode: Phaser.Scale.FIT
    },
    parent: 'game',
    rows: 4,
    cols: 10,
    cards: 19,
    bad_cards: 2, // Колличество плохих карт
    lifes: 2, // Колличество жизней
    timeout: 205,
    scene: new GameScene()
};
let game = new Phaser.Game(config);
