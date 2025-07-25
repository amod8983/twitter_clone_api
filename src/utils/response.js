import { STATUS } from '../constants/index.js';

/**
 * @param {import('express').Response} res
 * @param {string} message
 * @param {any} data
 * @returns
 */
export const success = (res, message, data = {}) =>
  res.status(STATUS.OK).json({ status: "success", message, data });

/**
 * @param {import('express').Response} res
 * @param {string} message
 * @param {any} data
 * @returns
 */
export const fail = (res, message, data = {}) =>
  res.status(STATUS.BAD_REQUEST).json({ status: "fail", message, data });

/**
 * @param {import('express').Response} res
 * @param {string} message
 * @param {number} code
 * @returns
 */
export const error = (res, message = 'Internal Server Error', code = STATUS.SERVER_ERROR) =>
  res.status(code).json({ status: "error", message, data: null });
