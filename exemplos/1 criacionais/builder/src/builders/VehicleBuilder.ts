import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {
    
    private vehicle = new Vehicle();

    setVehicleType(vehicleType: VehicleType): void {
        this.vehicle.vehicleType = vehicleType;
    }

    setSeats(seats: number): void {
        this.vehicle.seats = seats;
    }

    setEngine(engine: Engine): void {
        this.vehicle.engine = engine;
    }

    setTrasmission(transmission: Transmission): void {
        this.vehicle.transmission = transmission;
    }

    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel);
    }

    reset() {
        this.vehicle = new Vehicle();
    }

    getVehicle() {
        const result: Vehicle = this.vehicle;
        this.reset();
        return result;
    }

}