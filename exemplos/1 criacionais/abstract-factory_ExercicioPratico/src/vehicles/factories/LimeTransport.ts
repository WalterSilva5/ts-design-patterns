import Drone from "../aerial/Drone";
import Aircraft from "../aerial/interfaces/IAircraft";
import LandVehicle from "../land/interfaces/ILandVehicle";
import Scooter from '../land/Scooter';
import ITransportFactory from "./ITransportFactory";

export default class LimeTransport implements ITransportFactory {

    createTransportVehicle(): LandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): Aircraft {
        return new Drone();
    }

}