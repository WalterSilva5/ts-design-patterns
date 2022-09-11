import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayments from "./payonner/IPayonnerPayments";
import Payonner from "./payonner/Payonner";
import IPayPalPayments from "./paypal/IPayPalPayments";
import PayPal from "./paypal/PayPal";


const payment: IPayPalPayments = new PayonnerAdapter(new Payonner());
//const payment: IPayPalPayments = new PayPal();

payment.paypalPayment();
payment.paypalReceive();

