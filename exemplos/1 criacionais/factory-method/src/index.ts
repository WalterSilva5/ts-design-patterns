import { CarTransport } from "./transport/CarTransport";
import { MotorcycleTransport } from "./transport/MotorcycleTransport";
import Transport from "./transport/transport";

declare var process;

let transport: Transport;

if (process.argv.includes("--uber")) {

    transport = new CarTransport();

} else if (process.argv.includes("--log")) {

    transport = new MotorcycleTransport();

} else {

    console.log("Selecione o tipo de entrega.");
    
}

if (transport) {
    transport.startTransport();
}