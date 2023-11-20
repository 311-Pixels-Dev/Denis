"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Race = /** @class */ (function () {
    function Race(players) {
        this.players = players;
    }
    Race.prototype.addPlayer = function (player) {
        this.players.push(player);
        console.log(this.players);
    };
    return Race;
}());
exports.default = Race;
