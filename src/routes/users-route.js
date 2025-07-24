import { Router } from "express";
import {
  findAll,
  findById,
  create,
  update,
  patchUpdate,
  remove,
} from "../controllers/user-controller.js";

const router = Router();

router.post("/", create);

router.get("/", findAll);

router.get("/:id", findById);

router.put("/:id", update);

router.patch("/:id", patchUpdate);

router.delete("/:id", remove);

export default router;
