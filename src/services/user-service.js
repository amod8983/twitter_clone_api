import User from "../models/user-model.js";

/**
 * @description Get all users
 * @returns {Promise<Array>} List of user
 */
export const getAllUsers = () => {
  return User.findAll();
};

/**
 *
 * @param {number|string} id User Id
 * @returns {Promise<object|null>} User if found, else null
 */
export const getUserById = (id) => {
  return User.findByPk(id);
};

/**
 * Create a new user in the database.
 *
 * @param {Object} data - User data
 * @returns {Promise<Object>} Created user instance
 */
export const createUser = (data) => {
  return User.create(data);
};

/**
 * Update a user by ID with new data.
 *
 * @param {number|string} id - User ID
 * @param {Object} data - Partial or full user fields to update
 * @returns {Promise<[number]>} Number of affected rows
 */
export const updateUser = (id, data) => {
  return User.update(data, { where: { id } });
};

/**
 * Delete a user by ID.
 *
 * @param {number|string} id - User ID
 * @returns {Promise<number>} Number of rows deleted
 */
export const deleteUser = (id) => {
  return User.destroy({ where: { id: id } });
};
