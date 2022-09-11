import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {

    startRoute(): void {
        this.wind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }

    getCargo(): void {
        console.log("Pegamos os passageiros, estamos prontos!");
    }

    wind(): void {
        console.log("Ventos as 25km, ventos ok!");
    }

}