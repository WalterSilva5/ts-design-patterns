import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log("Facebook: Transmissão Iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Conta autorizada");
    }

    authToken(): void {
        console.log("Facebook: Autorizando aplicação");
    }    

}
