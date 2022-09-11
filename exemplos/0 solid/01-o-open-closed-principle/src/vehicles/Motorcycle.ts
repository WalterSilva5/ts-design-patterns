import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotorcycle {
    
    private color: string;
    private year: number;
    private engine: number;

    constructor(
        color: string,
        year: number,
        engine: number,
    ) {
        this.configureVehicle(color, year, engine);
    }

    configureVehicle(color: string, year: number, engine: number): void {
        
        this.color = color;
        this.year = year;
        this.engine = engine;

        this.startVehicle();

    }
    startVehicle(): void {
        console.log(`Moto da cor ${this.color}, ano ${this.year} e ${this.engine} cilindradas.`);
    }

}
