import Race from "./models/race";
import * as readline from "readline";
import Vehicle from "./models/vehicle";
import Car from "./models/car";
import Motorbike from "./models/motorbike";
import Plane from "./models/plane";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let race: Race = new Race([]);
let player: Vehicle;
let selected = false;

    rl.question('Select a vehicle: car(1), motorbike(2), plane(3) ', (answer) => {
        switch(+answer) {
            case 1:
                selected = true;
                console.log('You have chosen "car"!');
                player = new Car("Tort", "Lime", 10);
                race.addPlayer(player);
                break;
            case 2:
                selected = true;
                console.log('You have chosen "motorbike"!');
                player = new Motorbike("Tort", "Lime", 10);
                race.addPlayer(player);
                break;
            case 3:
                selected = true;
                console.log('You have chosen "plane"!');
                player = new Plane("Tort", "Lime", 10);
                race.addPlayer(player);
                break;
            default:
                console.log('Invalid answer!');
        }
        rl.close();
    });