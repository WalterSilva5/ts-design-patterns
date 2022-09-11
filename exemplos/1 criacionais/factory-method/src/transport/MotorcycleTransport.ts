import Transport from "./transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export class MotorcycleTransport extends Transport {

    protected createTransport(): IVehicle {
        
        return new Motorcycle();

    }

}