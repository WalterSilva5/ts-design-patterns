import IDbProduct from "./IDbProduct";

export default class MongoDBProduct implements IDbProduct {

    getProductById(productID: string): string {
        return `MongoDB: Exibindo dados do produto ${productID}`;
    }

}
