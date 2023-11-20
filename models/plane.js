"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plane = /** @class */ (function () {
    function Plane(name, color, acceleration) {
        this.name = name;
        this.color = color;
        this.acceleration = acceleration;
    }
    Plane.prototype.start = function () {
        console.log(this.name + " is starting the race!!!");
    };
    Plane.prototype.getPosizione = function () {
        throw new Error("Method not implemented.");
    };
    return Plane;
}());
exports.default = Plane;
