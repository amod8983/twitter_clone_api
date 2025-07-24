import { Router } from "express";
import {
  findAll,
  findById,
  create,
  update,
  patchUpdate,
  remove,
} from "../controllers/user-controller.js";

import { validateRequest } from "../middlewares/validate-request.js";
import {
  createUserSchema,
  updateUserSchema,
  patchUserSchema,
} from "../validator/user-validator.js";

const router = Router();

router.post("/", validateRequest(createUserSchema), create);

router.get("/", findAll);

router.get("/:id", findById);

router.put("/:id", validateRequest(updateUserSchema), update);

router.patch("/:id", validateRequest(patchUserSchema), patchUpdate);

router.delete("/:id", remove);

export default router;
