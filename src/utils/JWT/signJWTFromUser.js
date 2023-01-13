import jwt from 'jsonwebtoken'

import { config } from '#config/config.js'

export class SignJWTFromUser {
  static sign (user) {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret)
    return {
      user,
      token
    }
  }
}
