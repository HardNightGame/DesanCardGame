class LifeService{
    /**
     * @param config {{score: number, cards: number, lifes: number, width: number, bad_cards: number, type: number, rows: number, cols: number, timeout: number, height: number, scene: GameScene}}
     */
    constructor(config) {
        this.config = config;
    }

    Reduce(){
        this.currentLife--;
        return this;
    }

    IsAlive() {
        return this.currentLife > 0;
    }

    Reset(){
        this.currentLife =this.config.lifes;
    }
}
