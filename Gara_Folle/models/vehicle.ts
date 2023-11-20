interface Vehicle {
    name: string;
    color: string;
    acceleration: number;

    start(): void;

    getPosizione(): number;
}

export default Vehicle;