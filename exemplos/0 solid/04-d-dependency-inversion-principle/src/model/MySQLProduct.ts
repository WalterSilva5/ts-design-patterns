import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct {

    getProductById(productID: string): string {
        return `MySQL: Exibindo dados do produto ${productID}`;
    }

}
