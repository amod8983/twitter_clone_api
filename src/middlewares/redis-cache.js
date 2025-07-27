import redisClient from "../config/redis-client.js";
import { success } from "../utils/response.js";

/**
 * @description cache the incoming request
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const redisCache = async (req, res, next) => {
  const key = req.originalUrl;
  try {
    const cached = await redisClient.get(key);
    if (cached) {
      return success(res, "Retrived from redis cache", JSON.parse(cached));
    }

    res.sendResponse = res.json;
    res.json = (body) => {
      redisClient.setEx(key, 60, JSON.stringify(body)); // TTL 60s
      res.sendResponse(body);
    };

    next();
  } catch (err) {
    console.error("Redis error:", err);
    next();
  }
};

export default redisCache;
