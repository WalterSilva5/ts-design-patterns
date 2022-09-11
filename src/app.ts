/* eslint-disable no-new */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { Logger } from './helpers';
import {
  HelloWorldController,
} from './controllers';

export default class App {
  logger = new Logger();
  express: any;
  controllers: any;

  start() {
    this.logger.info('Starting app');
    dotenv.config();
    this.setupExpress();
    this.loadControllers();
    this.startServer();
  }
  setupExpress() {
    this.logger.info('Setting up express');
    this.express = express();
    this.setupMiddlewares();
  }

  setupMiddlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  loadControllers() {
    this.logger.info('Setting up controllers');
    this.controllers = [
      new HelloWorldController(this.express),
    ];
  }

  startServer() {
    this.logger.info('Starting server');
    const expressPort = parseInt(process.env.EXPRESS_PORT || '3000', 10);
    this.express.listen(expressPort, () => {
      this.logger.info(`Server started on port ${expressPort}`);
    });
  }
}
