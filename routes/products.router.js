import express from 'express'

import { productService } from './../services/product.service'
import validatorHandler from './../middlewares/validator.handler'
import { createProductSchema, updateProductSchema, getProductSchema } from './../schemas/product.schema'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.find()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await productService.findOne(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newProduct = await productService.create(body)
      res.status(201).json(newProduct)
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const product = await productService.update(id, body)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await productService.delete(id)
      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  }
)

export defaul router
