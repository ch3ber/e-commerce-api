import express from 'express'
import passport from 'passport'

import { SignJWTFromUser } from '../utils/JWT/signJWTFromUser.js'
import { EmailSender } from '../utils/email/emailSender.js'

const router = express.Router()

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const token = SignJWTFromUser.sign(user)
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
      const response = await EmailSender.sendEmail(email)
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
)

export default router
