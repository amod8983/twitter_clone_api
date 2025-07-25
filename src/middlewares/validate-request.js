import { fail } from "../utils/response.js";

/**
 * @param {import('joi').Schema} schema
 */
export const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errorData = error.details.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
    return fail(res, "Validation failed", errorData);
  }
  next();
};

export default validateRequest;
