class Statistic {
    constructor() {
        this.clicks = 0;
        this.errors = 0;
        this.gameWin = false;
        this.time = 0;
    }

    IncrementClick() {
        this.clicks++;
    }

    IncrementErrors() {
        this.errors++;
    }
}
