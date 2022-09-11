import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {

    public static create(type: Db): IDbProduct {
        if (type === Db.MYSQL) {
            return new MySQLProduct();
        } else {
            return new MongoDBProduct();
        }
    }

}
