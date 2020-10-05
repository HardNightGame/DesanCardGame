
let config = {
    type: Phaser.AUTO,
    width: 1279,
    height: 780,
    rows: 4,
    cols: 10,
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    timeout: 205,
    scene: new GameScene()
    };
let game = new Phaser.Game(config);