import * as jwt from "jsonwebtoken";
import { config } from "../config/env";

/**
 * Generate the token from provided payload
 * @param {any} payload
 * @returns {string} Authorization token
 */
export const generateToken = (payload) => {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

/**
 * Verify the token and return associated object.
 * @param {string} token Authorization token
 * @returns {any} decoded token
 */
export const verifyToken = (token) => {
  return jwt.verify(token, config.jwt.secret);
};
