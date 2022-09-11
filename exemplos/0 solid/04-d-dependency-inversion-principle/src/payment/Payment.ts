import DbProductFactory from "../factory/DbProductFactory";
import Db from "../model/Db";

export default class Payment {

    pay(productID: string): void {
        const dbProduct = DbProductFactory.create(Db.MYSQL);
        const product = dbProduct.getProductById(productID);
        console.log(product);
    }

}
