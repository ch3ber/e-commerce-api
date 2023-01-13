import passport from 'passport'

import { localStrategy } from './strategies/local.strategy.js'
import { jwtStragey } from './strategies/jwt.strategy.js'

passport.use(localStrategy)
passport.use(jwtStragey)
