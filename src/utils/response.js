/**
 * @param {import('express').Response} res
 * @param {string} message
 * @param {any} data
 * @returns
 */
export const success = (res, message, data = {}) =>
  res.status(200).json({ status: "success", message, data });

/**
 * @param {import('express').Response} res
 * @param {string} message
 * @param {any} data
 * @returns
 */
export const fail = (res, message, data = {}) =>
  res.status(400).json({ status: "fail", message, data });

/**
 *
 * @param {import('express').Response} res
 * @param {string} message
 * @param {number} code
 * @returns
 */
export const error = (res, message = 'Internal Server Error', code = 500) =>
  res.status(code).json({ status: "error", message, data: null });
