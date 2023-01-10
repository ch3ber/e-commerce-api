import LocalStrategy from 'passport-local'
import { User } from '../../../db/models/user.model.js'
import bcrypt from 'bcryptjs'
import boom from '@hapi/boom'

export const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async function (email, password, done) {
    try {
      const user = await User.scope('withPassword').findOne({
        where: { email }
      })

      if (!user) return done(boom.unauthorized(), false)

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return done(boom.unauthorized(), false)
      }

      delete user.dataValues.password

      return done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)
