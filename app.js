import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import redisClient from "./src/config/redis-client.js";
import { config } from "./src/config/env.js";
import { errorHandler, notFound, logger } from "./src/middlewares/index.js";

//models
import User from "./src/models/user-model.js";

//routes
import userRoutes from "./src/routes/users-route.js";

const app = express();

process.on("SIGINT", async () => {
  await redisClient.quit();
  process.exit(0);
});

//init DB
(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB init success");

    await sequelize.sync({ alter: false });
    console.log("DB sync done");
  } catch (e) {
    console.log("DB init failed");
    process.exit(1);
  }
})();

//Global logger
app.use(logger);

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  const healthInfo = {
    status: "ok",
    uptime: process.uptime().toFixed(0),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    env: config.nodeEnv || "development",
  };
  res.status(200).json(healthInfo);
});

app.use("/api/user", userRoutes);

// For invalid routes
app.use(notFound);

// For uncaught exception
app.use(errorHandler);

export default app;
