import { createConnection } from 'typeorm';
import { DBConfigHelper } from './DBConfigHelper';

export class SyncDatabaseHelper {
  async sync() {
    const config = DBConfigHelper.loadDBConfig();
    config.migrationsRun = true;

    const connection = await createConnection(config);
    connection.close();
  }
}
