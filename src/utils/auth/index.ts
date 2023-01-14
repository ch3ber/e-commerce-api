import passport from 'passport'

import { localStrategy } from './strategies/local.strategy'
import { jwtStragey } from './strategies/jwt.strategy'

passport.use(localStrategy)
passport.use(jwtStragey)
