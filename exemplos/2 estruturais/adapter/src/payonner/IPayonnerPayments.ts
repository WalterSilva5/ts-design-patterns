import Token from "../utils/Token";

export default interface IPayonnerPayments {

    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;

}