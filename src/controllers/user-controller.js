import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../services/user-service.js";

import { success, fail, error } from "../utils/response.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const findAll = async (req, res) => {
  try {
    const users = await getAllUsers();
    success(res, "Fetched successfully", users);
  } catch (err) {
    error(res);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);
    if (!user) {
      fail(res, "No user found");
    } else {
      success(res, "User found", user);
    }
  } catch (err) {
    error(res);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const create = async (req, res) => {
  try {
    const data = req.body;
    const user = await createUser(data);
    success(res, "User created", user);
  } catch (err) {
    error(res);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const [updateCount] = await updateUser(id, data);
    if (updateCount === 0) {
      fail(res, `User not found for id:${id}`);
    } else {
      success(res, "User updated", `Update count: ${updateCount}`);
    }
  } catch (err) {
    error(res);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const patchUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const [updateCount] = await updateUser(id, data);
    if (updateCount === 0) {
      fail(res, `User not found or no update for id:${id}`);
    } else {
      success(res, "User updated", `Update count: ${updateCount}`);
    }
  } catch (err) {
    error(res);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCount = await deleteUser(id);
    if (deletedCount === 0) {
      fail(res, "Unable to delete user");
    } else {
      success(res, "User deleted", `Update count: ${deletedCount}`);
    }
  } catch (err) {
    error(res);
  }
};
