import boom from '@hapi/boom'
import bcrypt from 'bcryptjs'

import { User } from '#db/models/user.model.js'

export class GetAuthUser {
  static async get (email, password) {
    const user = await User.scope('withPassword').findOne({
      where: { email }
    })
    if (!user) {
      throw boom.unauthorized()
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw boom.unauthorized()
    }

    delete user.dataValues.password
    return user
  }
}
