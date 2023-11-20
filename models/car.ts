import Vehicle from "./vehicle";

class Car implements Vehicle {
    name: string;
    color: string;
    acceleration: number;

    constructor(name: string, color: string, acceleration: number) {
        this.name = name;
        this.color = color;
        this.acceleration = acceleration;
    }

    start(): void {
        console.log(this.name + " is starting the race!!!");
    }

    getPosizione(): number {
        
        return 0;
    }
}

export default Car;