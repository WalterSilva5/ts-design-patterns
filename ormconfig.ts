import { DBConfigHelper } from './src/helpers/DBConfigHelper';

const ormconfig = DBConfigHelper.loadDBConfig(true);

export default ormconfig;
