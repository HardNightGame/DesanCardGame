
let config = {
    type: Phaser.AUTO,
    width: 1279,
    height: 780,
    rows: 4,
    cols: 10,
    cards: 20,
    timeout: 205,
    scene: new GameScene()
    };
let game = new Phaser.Game(config);
