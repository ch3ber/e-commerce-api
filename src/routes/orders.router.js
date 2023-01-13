import express from 'express'

import { orderService, orderProductsService } from '#services/order.service.js'

import validatorHandler from '#middlewares/validator.handler.js'
import { getOrderSchema, createOrderSchema, addItemSchema, deleteItemSchema } from '#schemas/order.schema.js'

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

// delete an order from the Orders table
router.delete('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await orderService.delete(id)
      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  }
)

/**
 * Route to create a new record in the OrderProducts junction table
 * the record contains the product id and the quantity
 */
router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),

  async (req, res, next) => {
    try {
      const body = req.body
      const newOrderProduct = await orderProductsService.create(body)
      res.status(201).json(newOrderProduct)
    } catch (error) {
      next(error)
    }
  }
)

export default router
