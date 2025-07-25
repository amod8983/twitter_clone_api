import { STATUS } from '../constants/index.js';
import { config } from '../config/env.js';


/**
 * @description Handle global uncaught error
 * @param {Error} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
  console.log(`[Error]: ${err.message}`);
  res.status(err.status || STATUS.SERVER_ERROR).json({
    status: err.status || STATUS.SERVER_ERROR,
    success: false,
    message: err.message || "Internal server error",
    stack: config.nodeEnv == "development" ? err.stack : undefined,
  });
};

export default errorHandler;
