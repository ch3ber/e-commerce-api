import express from 'express'
import passport from 'passport'

import { SignJWTFromUser } from '../utils/JWT/signJWTFromUser'
import { SendRecoveryPasswordLink } from '../utils/email/recovery/sendRecoveryPasswordLink'
import { ChangeUserPassword } from '../utils/auth/changeUserPassword'

const router = express.Router()

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const token = SignJWTFromUser.sign({
        user,
        payload: {
          // @ts-ignore
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

router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token, password } = req.body
      const response = await ChangeUserPassword.change(token, password)
      res.json(response)
    } catch (error) {
      next(error)
    }
  })

export default router
