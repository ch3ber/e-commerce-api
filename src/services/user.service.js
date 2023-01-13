// @ts-check
import { User } from '#db/models/user.model.js'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'

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

export { userService }
