// @ts-check
const boom = require('@hapi/boom')
const { User } = require('../db/models/user.model')

/**
 * @typedef { import('./service.d.js').Service } Service
 * @typedef { import('sequelize').Model<any, any> } Model
 * @implements {Service}
 */
class UserService {
  constructor () {
    this.products = []
  }

  /**
   * Create a new user from the client data
   * @param {import("sequelize").Optional<any, string> | undefined} data
   * @returns {Promise<Model>} - The new model created in the DB
   */
  async create (data) {
    const newUser = await User.create(data)
    return newUser
  }

  /**
   * Find all users into the DB
   * @returns {Promise<Model[]>} - Array of all users in the DB
   */
  async find () {
    const response = await User.findAll({ include: 'customer' })
    return response
  }

  /**
   * Find a user from the DB
   * @param {import("sequelize").Identifier | undefined} id - user's id in the DB
   * @returns {Promise<Model>} - User found in the DB
   */
  async findOne (id) {
    const user = await User.findByPk(id)
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  /**
   * Update data from a user in the DB
   * @param {number} id - user's id in the DB
   * @param {object} changes - changes to apply to the user
   * @returns {Promise<Model>} - User with changes applied
   */
  async update (id, changes) {
    const user = await this.findOne(id)
    const response = await user.update(changes)
    return response
  }

  /**
   * Delete a user from the DB
   * @param {number} id - user's id in the DB
   * @returns {Promise<{ id: number }>} - Deteled user id
   */
  async delete (id) {
    const user = await this.findOne(id)
    user.destroy()
    return { id }
  }
}

module.exports = UserService
