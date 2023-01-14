import LocalStrategy from 'passport-local'

import { GetAuthUser } from '../getAuthUser'

export const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async function (email, password, done) {
    try {
      const user = await GetAuthUser.get(email, password)
      return done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)
