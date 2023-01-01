const express = require('express')

const { orderService } = require('./../services/order.service')

const validatorHandler = require('./../middlewares/validator.handler')
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema')

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
  validatorHandler(getUserSchema, 'params'),
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
  validatorHandler(createUserSchema, 'body'),
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

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const category = await orderService.update(id, body)
      res.json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
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

module.exports = router
