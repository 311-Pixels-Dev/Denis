import Vehicle from "./vehicle";

class Race {
    players: Vehicle[];

    constructor(players: Vehicle[]) {
        this.players = players;
    }

    addPlayer(player: Vehicle) {
        this.players.push(player);
        this.addBots(4)
    }

    addBots(num: number) {
        this.players.push();
    }
}

export default Race;