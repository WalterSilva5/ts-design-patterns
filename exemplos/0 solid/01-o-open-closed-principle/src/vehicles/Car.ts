import IVehicleCar from './IVehicleCar';
export default class Car implements IVehicleCar {

    private color: string;
    private year: number;
    private engine: number;
    private seats: number;
    private doors: number;

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number,
        doors: number
    ) {
        this.configureVehicle(color, year, engine, seats, doors);
    }

    configureVehicle(color: string, year: number, engine: number, seats: number, doors: number): void {
        
        this.color = color;
        this.year = year;
        this.engine = engine;
        this.seats = seats;
        this.doors = doors;

        this.startVehicle();

    }

    startVehicle(): void {

        console.log(`Carro da cor ${this.color}, ${this.doors} portas, ano ${this.year}.`);

    }

}
