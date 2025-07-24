/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const logger = (req, res, next) => {
  const time = new Date().toISOString();
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  console.log(`[${time}] ${req.method}: ${fullUrl}`);
  next();
};

export default logger;
