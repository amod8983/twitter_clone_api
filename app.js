import express from "express";
import cors from "cors";
import sequelize from "./src/config/db.js";
import { errorHandler, notFound, logger } from "./src/middlewares/index.js";
import userRoutes from "./src/routes/users-route.js";

const app = express();

//init DB
sequelize.authenticate().then(() => {
    console.log('DB init success');
}).catch(() => {
    console.log('DB init failed');
    process.exit(1);
})

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
    env: process.env.NODE_ENV || "development",
  };
  res.status(200).json(healthInfo);
});

app.use("/api/user", userRoutes);

// For invalid routes
app.use(notFound);

// For uncaught exception
app.use(errorHandler);

export default app;
