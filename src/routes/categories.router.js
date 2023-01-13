import express from 'express'

import { categoryService } from '#services/category.service.js'
import validatorHandler from '#middlewares/validator.handler.js'
import { createCategorySchema, updateCategorySchema, getCategorySchema } from '#schemas/category.schema.js'
import passport from 'passport'
import { checkRoles } from '#middlewares/auth.handler.js'

const router = express.Router()

router.get('/',
  async (req, res, next) => {
    try {
      const categories = await categoryService.find()
      res.json(categories)
    } catch (error) {
      next(error)
    }
  })

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const category = await categoryService.findOne(id)
      res.json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newCategory = await categoryService.create(body)
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const category = await categoryService.update(id, body)
      res.json(category)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'seller'),
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      await categoryService.delete(id)
      res.status(201).json({ id })
    } catch (error) {
      next(error)
    }
  }
)

export default router
