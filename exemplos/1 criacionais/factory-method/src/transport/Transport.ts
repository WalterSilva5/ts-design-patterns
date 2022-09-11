import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport {

    startTransport(): void {

        let vehicle = this.createTransport();
        vehicle.startRoute();

    }

    protected abstract createTransport(): IVehicle;

}
