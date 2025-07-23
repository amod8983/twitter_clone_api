import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.status(201).json({ response: `Add user called` });
});

router.get("/", (req, res) => {
  res.status(200).json({ response: `Get all users called` });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ response: `Get one user called for ${req.params.id}` });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ response: `Update user called for ${req.params.id}` });
});

router.patch("/:id", (req, res) => {
  res.status(200).json({ response: `Update user called for ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ response: `Delete user called for ${req.params.id}` });
});

export default router;
