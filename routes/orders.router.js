const express = require('express')

const { orderService } = require('./../services/order.service')

const validatorHandler = require('./../middlewares/validator.handler')
const { getOrderSchema, createOrderSchema } = require('../schemas/order.schema')

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

module.exports = router
