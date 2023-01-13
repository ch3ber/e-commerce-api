import express from 'express'
import passport from 'passport'

import { SignJWTFromUser } from '../utils/JWT/signJWTFromUser.js'
import { SendRecoveryPasswordLink } from '../utils/email/recovery/sendRecoveryPasswordLink.js'

const router = express.Router()

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const token = SignJWTFromUser.sign({
        user,
        payload: {
          role: user.role
        }
      })
      res.json({ user, token })
    } catch (error) {
      next(error)
    }
  }
)

router.post('/recovery',
  async (req, res, next) => {
    try {
      const { email } = req.body
      const response = await SendRecoveryPasswordLink.send(email)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
)

export default router
