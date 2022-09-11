/* eslint-disable no-console */
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
  LOG_LEVEL: Joi.string().valid('debug', 'error', 'info', 'warn').optional(),
  NODE_ENV: Joi.string().optional(),
  OAUTH_PPC_CLIENT_ID: Joi.string().optional(),
  OAUTH_PPC_CLIENT_SECRET: Joi.string().optional(),
  OAUTH_PPC_TOKEN_ENDPOINT: Joi.string().optional(),
  PPC_API_ENDPOINT: Joi.string().optional(),
  URL_SQS_ACCRUALS: Joi.string().optional(),
  URL_SQS_ORDER: Joi.string().optional(),
  URL_SQS_SAP: Joi.string().optional(),
  REGION_SQS_ACCRUALS: Joi.string().optional(),
  REGION_SQS_ORDER: Joi.string().optional(),
  REGION_SQS_SAP: Joi.string().optional(),
}).unknown().required();

const { value: envVars, error } = envSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  console.error(`[core-lib] Settings ${error}`);
  process.exit(1);
}

const constants = {
  env: envVars.NODE_ENV,
  logLevel: envVars.LOG_LEVEL,
  ppcOAuth: {
    clientId: envVars.OAUTH_PPC_CLIENT_ID,
    clientSecret: envVars.OAUTH_PPC_CLIENT_SECRET,
    tokenEndpoint: envVars.OAUTH_PPC_TOKEN_ENDPOINT,
  },
  ppcApiEndpoint: envVars.PPC_API_ENDPOINT,
  urlSqsAccruals: envVars.URL_SQS_ACCRUALS,
  regionSqsAccruals: envVars.REGION_SQS_ACCRUALS,
  urlSqsSap: envVars.URL_SQS_SAP,
  urlSqsOrder: envVars.URL_SQS_ORDER,
  regionSqsOrder: envVars.REGION_SQS_ORDER,
  regionSqsSap: envVars.REGION_SQS_SAP,
};

export default Object.freeze(constants);
