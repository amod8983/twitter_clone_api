/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const notFound = (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  res.status(404).json({
    status: 404,
    success: false,
    message: "Route not found",
    method: req.method,
    url: fullUrl,
  });
};

export default notFound;
