import Aircraft from "../aerial/interfaces/IAircraft";
import LandVehicle from "../land/interfaces/ILandVehicle";

export default interface ITransportFactory {
    
    createTransportVehicle(): LandVehicle;
    createTransportAircraft(): Aircraft;    

}