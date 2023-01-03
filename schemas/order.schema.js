// @ts-check
import Joi from 'joi'

// schema for validating a order in the API
const id = Joi.number().integer()
const customerId = Joi.number().integer()
const orderId = Joi.number().integer()
const productId = Joi.number().integer()
const amount = Joi.number().integer().min(1)

// validate the GET method
export const getOrderSchema = Joi.object({
  id: id.required()
})

// validate the POST method
export const createOrderSchema = Joi.object({
  customerId: customerId.required()
})

// validate the PUT method
export const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
})

// validate the DELETE method
export const deleteItemSchema = Joi.object({
  orderId: orderId.required()
})
