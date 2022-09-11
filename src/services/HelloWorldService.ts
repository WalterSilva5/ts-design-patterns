import { Logger } from '../helpers';

export default class HelloWorldService {
  logger = new Logger('HelloWorldService');

  constructor() {
    this.logger.info('HelloWorldService initialized');
  }

  showHello() {
    this.logger.info('Hello World');
    return {
      message: 'Hello World',
    }
  }
}
