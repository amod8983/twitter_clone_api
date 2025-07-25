import bcrypt from "bcrypt";
import { crypto } from "../constants/index.js";

/**
 * @description Generate hash of the password.
 * @param {string} password 
 * @returns {Promise<string>} hashed password
 */
export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, crypto.SALT_ROUNDS);
  return hashedPassword;
};

/**
 * @description compare hashed password with password.
 * @param {string} password 
 * @param {string} hashedPassword 
 * @returns {Promise<boolean>} true is matches, else false
 */
export const verifyHashedPassword = async (password, hashedPassword) => {
  const isMatching = await bcrypt.compare(password, hashedPassword);
  return isMatching;
};
