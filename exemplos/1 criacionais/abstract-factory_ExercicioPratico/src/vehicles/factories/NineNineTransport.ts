import Helicopter from "../aerial/Helicopter";
import Aircraft from "../aerial/interfaces/IAircraft";
import LandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./ITransportFactory";

export default class NineNineTransport implements ITransportFactory {

    createTransportVehicle(): LandVehicle {
        return new Motorcycle();
    }
    createTransportAircraft(): Aircraft {
        return new Helicopter();
    }

}