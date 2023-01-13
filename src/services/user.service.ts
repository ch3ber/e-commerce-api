// @ts-check
import { User } from '#db/models/user.model.js'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'
import boom from '@hapi/boom'

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

  async findByEmail (email) {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw boom.notFound('User not found')
    }

    return user
  }
}

const userService = new UserService(User)

export { userService }
