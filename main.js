"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var race_1 = require("./models/race");
var readline = require("readline");
var car_1 = require("./models/car");
var motorbike_1 = require("./models/motorbike");
var plane_1 = require("./models/plane");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var race = new race_1.default([]);
var player;
var selected = false;
rl.question('Select a vehicle: car(1), motorbike(2), plane(3) ', function (answer) {
    switch (+answer) {
        case 1:
            selected = true;
            console.log('You have chosen "car"!');
            player = new car_1.default("Tort", "Lime", 10);
            race.addPlayer(player);
            break;
        case 2:
            selected = true;
            console.log('You have chosen "motorbike"!');
            player = new motorbike_1.default("Tort", "Lime", 10);
            break;
        case 3:
            selected = true;
            console.log('You have chosen "plane"!');
            player = new plane_1.default("Tort", "Lime", 10);
            break;
        default:
            console.log('Invalid answer!');
    }
    rl.close();
});
