import Vehicle from "./vehicle";

class Race {
    players: Vehicle[];

    constructor(players: Vehicle[]) {
        this.players = players;
    }

    addPlayer(player: Vehicle) {
        this.players.push(player);
    }
}

export default Race;