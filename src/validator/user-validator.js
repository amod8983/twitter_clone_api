import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  accessToken: Joi.string().optional().allow(null),
  refreshToken: Joi.string().optional().allow(null),
  tokenExpiresAt: Joi.date().iso().optional(),
});

export const updateUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  accessToken: Joi.string().optional().allow(null),
  refreshToken: Joi.string().optional().allow(null),
  tokenExpiresAt: Joi.date().iso().optional(),
});

export const patchUserSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  accessToken: Joi.string().optional().allow(null),
  refreshToken: Joi.string().optional().allow(null),
  tokenExpiresAt: Joi.date().iso().optional(),
});
