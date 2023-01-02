import express from 'express'

import { userService } from './../services/user.service'
import validatorHandler from './../middlewares/validator.handler'
import { updateUserSchema, createUserSchema, getUserSchema } from './../schemas/user.schema'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const categories = await userService.find()
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
      const category = await userService.findOne(id)
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
      const newCategory = await userService.create(body)
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
      const category = await userService.update(id, body)
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
      await userService.delete(id)
      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  }
)

export default router
