import Token from "../utils/Token";
import IPayonnerPayments from "./IPayonnerPayments";

export default class Payonner implements IPayonnerPayments {

    private token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPayment(): void {
        this.token = this.authToken();
        console.log("Enviando pagamentos via Payonner.");
    }

    receivePayment(): void {
        console.log("Recebendo pagamentos via Payonner.");
    }
    
}