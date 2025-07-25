import { STATUS } from '../constants/index.js';


/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const notFound = (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  res.status(STATUS.NOT_FOUND).json({
    status: STATUS.NOT_FOUND,
    success: false,
    message: "Route not found",
    method: req.method,
    url: fullUrl,
  });
};

export default notFound;
