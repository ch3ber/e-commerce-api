import jwt from 'jsonwebtoken'

import { config } from '@config/config'

export class SignJWTFromUser {
  static sign ({ user, payload = {}, secret = config.jwtSecret }) {
    const jwtPayload = {
      sub: user.id,
      ...payload
    }

    // @ts-ignore
    const token = jwt.sign(jwtPayload, secret, { expiresIn: '10min' })

    return token
  }
}
