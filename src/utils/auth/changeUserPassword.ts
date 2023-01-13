import boom from '@hapi/boom'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { config } from '#config/config.js'
import { User } from '#db/models/user.model.js'
import { userService } from '#services/user.service.js'

export class ChangeUserPassword {
  static async #verifyToken (token) {
    const payload = jwt.verify(token, config.jwtRecoverySecret)
    const user = await User.scope('withRecoveryToken').findByPk(payload.sub)

    if (user.recoveryToken !== token) {
      throw boom.unauthorized()
    }

    return user
  }

  static async #saveNewPassword (password, user) {
    const hash = await bcrypt.hash(password, 10)

    userService.update(user.id, {
      recoveryToken: null,
      password: hash
    })
  }

  static async change (token, password) {
    try {
      const user = await this.#verifyToken(token)
      await this.#saveNewPassword(password, user)

      return { message: 'password changed' }
    } catch (error) {
      throw boom.unauthorized()
    }
  }
}
