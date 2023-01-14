import express from 'express'

import productsRouter from './products.router'
import categoriesRouter from './categories.router'
import usersRouter from './users.router'
import orderRouter from './orders.router'
import customersRouter from './customers.router'
import authRouter from './auth.router'
import profileRouter from './profile.router'

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
  router.use('/orders', orderRouter)
  router.use('/customers', customersRouter)
  router.use('/auth', authRouter)
  router.use('/profile', profileRouter)
}

export default routerApi
