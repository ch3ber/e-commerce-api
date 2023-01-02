import express from 'express'

import productsRouter from './products.router'
import categoriesRouter from './categories.router'
import usersRouter from './users.router'
import orderRouter from './orders.router'
import customersRouter from './customers.router'

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
  router.use('/orders', orderRouter)
  router.use('/customers', customersRouter)
}

export default routerApi
