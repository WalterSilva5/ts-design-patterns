import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando entraga com patinete...");
    }

    getCargo(): void {
        console.log("Encomenda na mochila!");
    }

}