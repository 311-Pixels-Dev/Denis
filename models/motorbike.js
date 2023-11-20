"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motorbike = /** @class */ (function () {
    function Motorbike(name, color, acceleration) {
        this.name = name;
        this.color = color;
        this.acceleration = acceleration;
    }
    Motorbike.prototype.start = function () {
        console.log(this.name + " is starting the race!!!");
    };
    Motorbike.prototype.getPosizione = function () {
        return 0;
    };
    return Motorbike;
}());
exports.default = Motorbike;
