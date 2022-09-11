export default class ErrorResponse extends Error {
  name: string;

  code: number;

  constructor(message: string, code = 500) {
    super(message)
    this.name = this.constructor.name;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
