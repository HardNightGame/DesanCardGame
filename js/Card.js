class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, value) {
        super(scene, 0, 0, 'card');
        this.scene = scene;
        this.value = value;
        this.scene.add.existing(this);
        this.setInteractive();
        this.opened = false;
    }

    init(position) {
        this.position = position;
        this.close();
        this.setPosition(-this.width, -this.height);
    }

    move(params) {
        this.scene.tweens.add({
            targets: this,
            x: params.x,
            y: params.y,
            delay: params.delay,
            ease: 'Linear',
            duration: 250,
            onComplete: () => {
            }
        });
        // this.setPosition(params.x, params.y);
    }

    flip(texture, callback) {
        this.scene.tweens.add({
            targets: this,
            scaleX: 0,
            ease: 'Linear',
            duration: 150,
            onComplete: () => {
                this.show(texture, callback);
            }
        });
    }

    show(texture, callback) {
        this.setTexture(texture);
        this.scene.tweens.add({
            targets: this,
            scaleX: 1,
            ease: 'Linear',
            duration: 150,
            onComplete: () => {
                if (callback) {
                    callback();
                }
            }
        });
    }

    open(callback) {
        this.opened = true;
        this.flip('card' + this.value, callback);
    }

    close(callback) {
        if (this.opened) {
            this.opened = false;
            this.flip('card', callback);
        }
    }
}
