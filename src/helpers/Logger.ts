/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-prototype-builtins */
type LogLevel = 'error' | 'warn' | 'info' | 'debug';
type JsConsoleMethods = 'error' | 'warn' | 'info' | 'log';

const logLevels = {
  error: 4,
  warn: 3,
  info: 2,
  debug: 1,
};

const stdout = function (level: JsConsoleMethods = 'log', traceId: string = '', ...params: any[]) {
  const logParams = [];

  if (traceId) {
    logParams.push(`trace_id=${traceId}`);
  }

  logParams.push(...params);

  console[level](...logParams);
};

export class Logger {
  private traceId: string;

  constructor(traceId?: string) {
    this.traceId = traceId || '';
  }

  error(...params: any[]) {
    if (this.getLogLevel() <= logLevels.error) {
      stdout('error', this.traceId, ...params);
    }
  }

  warn(...params: any[]) {
    if (logLevels.error > this.getLogLevel()) {
      stdout('warn', this.traceId, ...params);
    }
  }

  info(...params: any[]) {
    if (logLevels.warn > this.getLogLevel()) {
      stdout('info', this.traceId, ...params);
    }
  }

  debug(...params: any[]) {
    if (this.getLogLevel() === logLevels.debug) {
      stdout('log', this.traceId, ...params);
    }
  }

  getLogLevel(): number {
    const logLevel: LogLevel = (process.env.LOG_LEVEL || 'error') as LogLevel;

    return logLevels.hasOwnProperty(logLevel)
      ? logLevels[logLevel]
      : logLevels.error;
  }
}
