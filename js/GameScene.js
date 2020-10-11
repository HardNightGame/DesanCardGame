class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.image('bg', 'img/bg.png');
        this.load.image('card', 'img/cardnew.jpg');

        this.load.image('card1', 'img/card2.png');
        this.load.image('card2', 'img/card3.png');
        this.load.image('card3', 'img/card4.png');
        this.load.image('card4', 'img/card5.png');
        this.load.image('card5', 'img/card6.png');
        this.load.image('card6', 'img/card7.png');
        this.load.image('card7', 'img/card8.png');
        this.load.image('card8', 'img/card9.png');
        this.load.image('card9', 'img/card10.png');
        this.load.image('card10', 'img/card11.png');
        this.load.image('card11', 'img/card12.png');
        this.load.image('card12', 'img/card13.png');
        this.load.image('card13', 'img/card14.png');
        this.load.image('card14', 'img/card15.png');
        this.load.image('card15', 'img/card16.png');
        this.load.image('card16', 'img/card17.png');
        this.load.image('card17', 'img/card18.png');
        this.load.image('card18', 'img/card19.png');
        this.load.image('card19', 'img/card20.png');

        this.load.image('card101', 'img/card101.png');
        this.load.image('card102', 'img/card102.png');

        this.load.audio('card', 'sounds/card.mp3');
        this.load.audio('complete', 'sounds/complete.mp3');
        this.load.audio('success', 'sounds/success.mp3');
        this.load.audio('theme', 'sounds/theme.mp3');
        this.load.audio('timeout', 'sounds/timeout.mp3');


    }

    createText() {
        this.timeoutText = this.add.text(550, 2, `Dead line timer:`, {
            font: `22px Arial`,
            fill: `#ffffff`
        });
    }

    createScoreText() {
        this.scoreText = new LifeBar(this, this.life);
    }

    onTimerTick() {
        if (this.lock) return;
        this.timeoutText.setText('Dead line timer:' + this.timeout);
        if (this.timeout <= 0) {
            this.sounds.timeout.play();
            this.lock = true;
            Swal.fire({
                title: 'Вам не хватило времени. Попробуйте ускориться.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                allowOutsideClick: false,
                willClose: () => {
                    this.lock = false;
                    this.endGame();
                }
            });
        } else {
            --this.timeout;
            this.statistic.time++;
        }
    }

    createTimer() {
        this.time.addEvent({
            delay: 1000,
            callback: this.onTimerTick,
            callbackScope: this,
            loop: true
        });
    }

    createSounds() {
        this.sounds = {
            card: this.sound.add('card'),
            complete: this.sound.add('complete'),
            success: this.sound.add('success'),
            theme: this.sound.add('theme'),
            timeout: this.sound.add('timeout'),

        };

    }

    create() {
        this.timeout = config.timeout;
        this.life = new LifeService(config);
        this.lock = false;
        this.createSounds();
        this.createTimer();
        this.createBackground();
        this.createText();
        this.createScoreText();
        this.createCards();
        this.start();
    }

    start() {
        this.timeout = config.timeout;
        this.sounds.theme.play({
            volume: 0.1
        });
        this.openedCard = null;
        this.openedCardsCount = 0;
        this.initCards();
        this.showCards();
        this.statistic = new Statistic();
        this.life.Reset()
        this.scoreText.Update();
    }

    initCards() {
        let positions = this.getCardsPositions();

        this.cards.forEach(card => {
            card.init(positions.pop());
        });
    }

    showCards() {
        this.cards.forEach(card => {
            card.move({
                x: card.position.x,
                y: card.position.y,
                delay: card.position.delay
            });
        });

    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    }

    createCards() {
        this.cards = [];

        for (let value = 1; value <= config.cards; value++) {
            for (let i = 0; i < 2; i++) {
                this.cards.push(new Card(this, value));
            }
        }

        for (let value = 1; value <= config.bad_cards; value++) {
            this.cards.push(new Card(this, 100 + value));
        }

        this.input.on("gameobjectdown", this.onCardClicked, this);
    }

    onCardClicked(pointer, card) {
        if (card.opened || this.lock) {
            return false;
        }

        this.statistic.IncrementClick();
        this.sounds.card.play();

        card.open(() => {
            if (card.value <= 100) {
                if (this.openedCard) {
                    // уже есть открытая карта
                    if (this.openedCard.value === card.value) {
                        // картинки равны - запомнить
                        this.sounds.success.play();
                        this.openedCard = null;
                        ++this.openedCardsCount;
                    } else {
                        // картинки разные - скрыть прошлую
                        this.openedCard.close();
                        this.openedCard = card;
                    }
                } else {
                    // еще нет открытой карта
                    this.openedCard = card;
                }
                if (this.openedCardsCount === (config.cards * 2) / 2) {
                    this.sounds.complete.play();
                    this.statistic.gameWin = true;
                    this.endGame();
                }
            } else {
                this.statistic.IncrementErrors();
                this.life.Reduce();
                this.scoreText.Update();
                if (!this.life.IsAlive()) {
                    this.sounds.timeout.play();
                    this.lock = true;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Вы проиграли',
                        footer: '<a href="#">Не повезло в картах, повезет в любви =)</a>',
                        allowOutsideClick: false,
                        willClose: () => {
                            this.lock = false;
                            this.endGame();
                        }
                    })

                } else {
                    this.lock = true;
                    Swal.fire({
                        text: `Появилась новая опасность, у вас осталось попыток: ${this.life.currentLife}`,
                        allowOutsideClick: false,
                        willClose: () => {
                            this.lock = false;
                        }
                    });
                }
                if (this.openedCard) {
                    this.openedCard.close();
                }
                this.openedCard = card;
            }
        });
    }

    getCardsPositions() {
        let positions = [];
        let cardTexture = this.textures.get('card').getSourceImage();
        let cardWidth = cardTexture.width + 4;
        let cardHeight = cardTexture.height + 4;
        let offsetX = (this.sys.game.config.width - cardWidth * config.cols) / 2 + cardWidth / 2;
        let offsetY = (this.sys.game.config.height - cardHeight * config.rows) / 2 + cardHeight / 2;

        let id = 0;
        for (let row = 0; row < config.rows; row++) {
            for (let col = 0; col < config.cols; col++) {
                ++id;
                positions.push({
                    delay: id * 150,
                    x: offsetX + col * cardWidth,
                    y: offsetY + row * cardHeight,
                });
            }
        }

        return Phaser.Utils.Array.Shuffle(positions);
    }

    endGame() {
        PublishStatistic(this.statistic);
        this.start();
    }
}

