import { Connection, QueryRunner } from 'typeorm';
import { ConnectionHelper } from './ConnectionHelper';

export class DBTransactionHelper {
  private connection: Connection;

  private queryRunner: QueryRunner | null;

  private async getConnection() {
    if (!this.connection) {
      this.connection = await ConnectionHelper.getConnection();
    }

    return this.connection;
  }

  private getQueryRunner(): QueryRunner {
    if (!this.connection) {
      throw new Error('connection should be initialized calling startTransaction() method');
    }

    if (!this.queryRunner) {
      this.queryRunner = this.connection.createQueryRunner();
    }

    return this.queryRunner!;
  }

  private async releaseQueryRunner() {
    await this.getQueryRunner().release();
    this.queryRunner = null;
  }

  async startTransaction() {
    await this.getConnection();
    await this.getQueryRunner().startTransaction();
  }

  async save(data: any | any[]): Promise<any | any[]> {
    return this.getQueryRunner().manager.save(data);
  }

  async commit(): Promise<void> {
    await this.getQueryRunner().commitTransaction();
    await this.releaseQueryRunner();
  }

  async rollback(): Promise<void> {
    await this.getQueryRunner().rollbackTransaction();
    await this.releaseQueryRunner();
  }
}
