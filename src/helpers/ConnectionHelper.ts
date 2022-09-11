import { Connection, createConnection } from 'typeorm';
import { DBConfigHelper } from './DBConfigHelper';

let connection: Connection;

export class ConnectionHelper {
  static async getConnection(): Promise<Connection> {
    if (!connection) {
      const config = DBConfigHelper.loadDBConfig();
      connection = await createConnection(config);
    }

    return connection;
  }
}
