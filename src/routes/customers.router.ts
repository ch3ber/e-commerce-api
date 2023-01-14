import express from 'express'
import { customerService } from '@services/customer.service'
import validationHandler from '@middlewares/validator.handler'

import {
  createCustomerSchema,
  getCustomerSchema,
  updateCustomerSchema
} from '@schemas/customer.schema'

const router = express.Router()

router.get('/', async (_req, res, next) => {
  try {
    res.json(await customerService.find())
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  validationHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      res.status(201).json(await customerService.create(body))
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      res.status(201).json(await customerService.update(id, body))
    } catch (error) {
      next(error)
    }
  }
)

router.delete(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      res.status(200).json(await customerService.delete(id))
    } catch (error) {
      next(error)
    }
  }
)

export default router
