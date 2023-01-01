// @ts-check
const { User } = require('../db/models/user.model')
const { MakeBaseServiceFrom } = require('./MakeBasicServiceFrom')

// const UserService = new MakeBaseServiceFrom(User)
/**
 * @typedef { import('sequelize').Model<any, any> } Model
 */

class UserService extends MakeBaseServiceFrom {
  /**
   * Find all users into the DB
   * @returns {Promise<Model[]>} - Array of all users in the DB
   */
  async find () {
    const response = await User.findAll({ include: 'customer' })
    return response
  }
}

const userService = new UserService(User)

module.exports = { userService }
