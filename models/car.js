"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(name, color, acceleration) {
        this.name = name;
        this.color = color;
        this.acceleration = acceleration;
    }
    Car.prototype.start = function () {
        console.log(this.name + " is starting the race!!!");
    };
    Car.prototype.getPosizione = function () {
        return 0;
    };
    return Car;
}());
exports.default = Car;
