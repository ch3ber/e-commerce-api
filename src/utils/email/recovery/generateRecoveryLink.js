import { config } from '#config/config.js'
import { SignJWTFromUser } from '../../JWT/signJWTFromUser.js'
import { FindUserByEmail } from '#utils/email/findUserByEmail.js'

export class GenerateRecoveryLink {
  static async generate (userEmail) {
    const user = await FindUserByEmail.find(userEmail)

    const token = SignJWTFromUser.sign({
      user,
      secret: config.jwtRecoverySecret
    })

    const APP_DOMAIN = 'https://ch3ber.github.io'
    const recoveryLink = `${APP_DOMAIN}?recoverytk=${token}`

    return recoveryLink
  }
}
