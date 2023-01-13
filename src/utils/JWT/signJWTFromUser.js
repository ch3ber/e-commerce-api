import jwt from 'jsonwebtoken'

import { config } from '#config/config.js'

export class SignJWTFromUser {
  static sign ({ user, payload = {}, secret = config.jwtSecret }) {
    const jwtPayload = {
      sub: user.id,
      ...payload
    }

    const token = jwt.sign(jwtPayload, secret, { expiresIn: '10min' })

    return token
  }
}
