import IVehicle from "./IVehicle";
import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicle, IVehicleCar {

    private color: string;
    private year: number;
    private engine: number;
    private seats: number;

    constructor(
        color: string, 
        year: number, 
        engine: number,
        seats: number
    ) {
        this.configureCar(color, year, engine, seats);
    }

    configureCar(color: string, year: number, engine: number, seats: number): void {
        
        this.color = color;
        this.year = year;
        this.engine = engine;
        this.seats = seats;

        console.log(`Carro da cor ${this.color}, ${this.seats} assentos, ano ${this.year}.`);

        this.startVehicle();

    }

    startVehicle() {
        console.log("Ligando os motores.");
    }
    
}
