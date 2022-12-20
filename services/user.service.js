const boom = require('@hapi/boom')
const { User } = require('../db/models/user.model')

class UserService {
  constructor () {
    this.products = []
  }

  async create (data) {
    const newUser = await User.create(data)
    return newUser
  }

  async find () {
    const response = await User.findAll()
    return response
  }

  async findOne (id) {
    const user = await User.findByPk(id)
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  async update (id, changes) {
    const user = await this.findOne(id)
    const response = await user.update(changes)
    return response
  }

  async delete (id) {
    const user = await this.findOne(id)
    user.destroy()
    return { id }
  }
}

module.exports = UserService
