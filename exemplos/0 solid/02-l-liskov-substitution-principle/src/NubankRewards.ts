import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {

    validate(): void {
        console.log("Limite OK, Rewards OK!");
    }

    collectPayment(): void {
        console.log("Pagamento realizado com sucesso!");
        console.log("Pontuação creditada no Programa Rewards!");
    }

}