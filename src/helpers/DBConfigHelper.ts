/* eslint-disable no-case-declarations */
import { readFileSync, readdirSync } from 'fs';
import * as path from 'path';
import { Logger } from '../helpers';

export class DBConfigHelper {
  static loadDBConfig(isRunningManual = false) {
    const logger = new Logger();
    const environment = process.env.NODE_ENV || 'production';
    const basePath = __dirname;
    const defaultConfigFile = path.join(basePath, '..', 'settings', 'ormconfig.prod.json');
    let config;
    switch (environment) {
      case 'development':
        const configFileLocal = path.join(basePath, '..', 'settings', 'ormconfig.local.json');
        logger.info(`msg=loading config, configFile=${configFileLocal}`);
        config = readFileSync(configFileLocal);
        break;
      case 'stage':
        const configFileStage = path.join(basePath, '..', 'settings', 'ormconfig.np.json');
        config = readFileSync(configFileStage);
        break;
      default:
        config = readFileSync(defaultConfigFile);
        break;
    }

    if (!config) {
      config = readFileSync(defaultConfigFile);
    }

    config = JSON.parse(config.toString());
    config.entities.push(path.join(basePath, '..', 'entity', '*.js'));

    if (config.ssl && config.ssl.ca) {
      config.ssl.ca = [readFileSync(path.join(basePath, '..', 'settings', 'certs', config.ssl.ca), 'ascii')];
    }

    if (!isRunningManual) {
      config.migrations[0] = path.join(basePath, '..', 'migration', '*.js');
    }

    return config;
  }
}
