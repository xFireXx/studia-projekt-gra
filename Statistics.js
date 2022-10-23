class Statistics {
    constructor() {
        this.gameResults = [];
    }


    addGameToStatistics(win, bid) {
        let gameResults = {
            win: win,
            bid: bid
        }
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length.
        return 
    }

}

const stats = new Statistics()