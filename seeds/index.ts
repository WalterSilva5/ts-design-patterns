/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import { ConnectionHelper } from '../src/helpers/ConnectionHelper';

async function seed(){
  const connection = await ConnectionHelper.getConnection();

  const queryRunner = connection.createQueryRunner();
  await queryRunner.startTransaction();

  const nodes: any = [];
  try {
    for (const node of nodes) {
        //escreve valores no banco
    }
  } catch (e) {
    //@ts-ignore
    console.log(`=db:seed error, error=${e}`);
    await queryRunner.rollbackTransaction();
    throw e;
  }
  await queryRunner.commitTransaction();
  await queryRunner.release();
  await connection.close();
}

seed();