import { verifyToken } from "../utils/jwt.js";
import { STATUS } from "../constants/index.js";

/**
 * @description Authorize the incoming request
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const authValidator = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res
      .status(STATUS.UNAUTHORIZED)
      .json({ message: "Unauthorized: Token missing" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res
      .status(STATUS.UNAUTHORIZED)
      .json({ message: "Unauthorized: Invalid token" });
  }
};
