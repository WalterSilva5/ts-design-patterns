import validator from 'express-validator'
import { AbstractController } from './AbstractController';
import {
  Logger,
} from '../helpers'
import { HelloWorldService } from '../services'

export default class HelloWorldController extends AbstractController {
  service = new HelloWorldService();
  logger: Logger;
  constructor(express: any) {
    super(express);
    this.logger.info('HelloWorldController initialized');
  }

  setupRoutes(baseRoute: string) {
    this.logger.info('Setting up routes for HelloWorldController');
    this.express.get(`${baseRoute}/hello`, this.showHello.bind(this));
  }

  showHello(req: any, res: any) {
    this.logger.info('showHello');
    return res.json(this.service.showHello());
  }
}
