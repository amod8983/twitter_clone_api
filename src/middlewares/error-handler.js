/**
 * @description Handle global uncaught error
 * @param {Error} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
  console.log(`[Error]: ${err.message}`);
  res.status(err.status || 500).json({
    status: err.status || 500,
    success: false,
    message: err.message || "Internal server error",
    stack: process.env.NODE_ENV == "development" ? err.stack : undefined,
  });
};

export default errorHandler;
