import Token from "../utils/Token";

export default interface IPayPalPayments {

    authToken(): Token;
    paypalPayment(): void;
    paypalReceive(): void;

}