import { config } from '#config/config.js'
import { SignJWTFromUser } from '../../JWT/signJWTFromUser.js'
import { userService } from '#services/user.service.js'

export class GenerateRecoveryLink {
  static async generate (userEmail) {
    const user = await userService.findByEmail(userEmail)

    const token = SignJWTFromUser.sign({
      user,
      secret: config.jwtRecoverySecret
    })

    const APP_DOMAIN = 'https://ch3ber.github.io'
    const recoveryLink = `${APP_DOMAIN}?recoverytk=${token}`

    return {
      recoveryLink,
      token
    }
  }
}
