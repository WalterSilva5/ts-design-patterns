import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log("Twitch: Transmissão Iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando RMTP");
    }

    authToken(): void {
        console.log("Twitch: Validando o Canal");
    }    

}
