import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../utils';
import { Logger } from '../helpers';

export class AbstractController {
  express: any;
  logger:Logger = new Logger();
  constructor(express: any) {
    if (!express) {
      throw new Error('Express is not defined');
    }
    this.express = express;
    this.setupRoutes('/api/v1');
  }

  setupRoutes(path: string) {
    throw new Error('setupRoutes is abstract.');
  }

  resolver(handlerFunction: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
      handlerFunction(req, res, next).catch(next);
    }
  }

  notValid(error: any, code = 400) {
    const problems = this.express.validationErrors();
    throw new ErrorResponse(`ValidationError: ${problems}`, code);
  }

  badRequest(response: Response, errors: any) {
    return response.status(400).json({
      error: errors?.details ? errors.details.map((
        e: any,
      ) => e.message) : errors.array().map((e: any) => e.msg),
    });
  }

  unauthorized(response: Response) {
    return response.status(401).json({
      error: 'Unauthorized',
    });
  }
}
