import { Router } from 'express'
import passport from 'passport'
import { orderService } from '@services/order.service'

const router = Router()

router.get('/orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, _next) => {
    console.log(req.user)
    // @ts-ignore
    const data = await orderService.findAllByUser(req.user.sub)
    res.status(200).json(data)
  })

export default router
