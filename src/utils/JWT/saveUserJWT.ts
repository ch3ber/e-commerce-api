import { userService } from '@services/user.service'

export class SaveUserJWT {
  static async save ({ userId = null, userEmail = null, token }) {
    if (userEmail) {
      const user = await userService.findByEmail(userEmail)
      // @ts-ignore
      userService.update(user.id, {
        recoveryToken: token
      })
      return
    }

    if (userId) {
      userService.update(userId, {
        recoveryToken: token
      })
    }
  }
}
