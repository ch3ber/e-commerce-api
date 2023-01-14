import { Strategy, ExtractJwt } from 'passport-jwt'
import { config } from '@config/config'

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
  // issuer: 'accounts.examplesoft.com',
  // audience: 'yoursite.net'
}

export const jwtStragey = new Strategy(opts, (jwtPayload, done) => {
  return done(null, jwtPayload)
})
