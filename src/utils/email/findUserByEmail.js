import boom from '@hapi/boom'

import { User } from '#db/models/user.model.js'

export class FindUserByEmail {
  static async find (email) {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw boom.unauthorized()
    }

    return user
  }
}
