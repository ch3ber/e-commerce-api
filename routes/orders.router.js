import express from 'express'

import { orderService } from './../services/order.service'

import validatorHandler from './../middlewares/validator.handler'
import { getOrderSchema, createOrderSchema } from '../schemas/order.schema'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const categories = await orderService.find()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const category = await orderService.findOne(id)
      res.json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newCategory = await orderService.create(body)
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }
)

export default router
