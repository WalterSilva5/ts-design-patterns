import IVehicle from "./IVehicle";
import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicle, IVehicleMotorcycle {

    private color: string;
    private year: number;
    private engine: number;

    constructor(
        color: string, 
        year: number, 
        engine: number
    ) {
        this.configureMotorcycle(color, year, engine);
    }

    configureMotorcycle(color: string, year: number, engine: number): void {
        this.color = color;
        this.year = year;
        this.engine = engine;

        console.log(`Moto da cor ${this.color}, ano ${this.year}.`);

        this.startVehicle();
    }

    startVehicle() {
        console.log("Ligando os motores.");
    }
    
}
