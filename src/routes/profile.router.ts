import { Router } from 'express'
import passport from 'passport'
import { orderService } from '#services/order.service.js'

const router = new Router()

router.get('/orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    console.log(req.user)
    const data = await orderService.findAllByUser(req.user.sub)
    res.status(200).json(data)
  })

export default router
