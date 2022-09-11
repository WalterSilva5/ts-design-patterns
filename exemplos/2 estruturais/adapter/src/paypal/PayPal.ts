import Token from "../utils/Token";
import IPayPalPayments from "./IPayPalPayments";

export default class PayPal implements IPayPalPayments {

    private token: Token;

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        this.token = this.authToken();
        console.log("Enviando pagamentos via PayPal.");
    }

    paypalReceive(): void {
        console.log("Recebendo pagamentos via PayPal.");
    }
    
}