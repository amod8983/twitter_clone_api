import express from "express";
import userRoutes from "./src/routes/users.route.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ text: "Server is running fine" });
});

app.use("/api/user", userRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
