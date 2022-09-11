import Application from "./vehicles/app/application";
import Company from "./vehicles/consts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import ITransportFactory from "./vehicles/factories/ITransportFactory";
import UberTransport from "./vehicles/factories/UberTransport";
import LimeTransport from "./vehicles/factories/LimeTransport";

const currentCompany = Company.LIME;
let factory: ITransportFactory;

switch (currentCompany) {

    case Company.UBER:
        factory = new UberTransport();
        break;

    case Company.NINENINE:
        factory = new NineNineTransport();
        break;

    case Company.LIME:
        factory = new LimeTransport();
        break;

    default:
        console.log("Desconhecida");

}

const app = new Application(factory);

app.startRoute();
