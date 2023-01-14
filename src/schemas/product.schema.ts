
import Joi from 'joi'

// schema for validate a product in the API

// JSON body values
const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const price = Joi.number().integer().min(10)
const image = Joi.string().uri()
const description = Joi.string().min(10)

// query params values
const limit = Joi.number().integer().min(1)
const offset = Joi.number().integer().min(0)
const searchInDescription = Joi.string().min(1)
const searchInName = Joi.string().min(1)
const sortBy = Joi.string().min(1)
const minPrice = Joi.number().integer().min(0)
const maxPrice = Joi.number().integer().min(0)

// schema for validate the POST method
export const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: id.required()
})

// schema for validate the PUT method
export const updateProductSchema = Joi.object({
  name,
  price,
  image,
  description
})

// schema for validate the GET method
export const getProductSchema = Joi.object({
  id: id.required()
})

// schema for validate the DELETE method
export const deleteProductSchema = Joi.object({
  id: id.required()
})

// schema for validate the query params
export const queryProductSchema = Joi.object({
  limit,
  offset,
  searchInDescription,
  searchInName,
  sortBy,
  minPrice,
  maxPrice
})

/** hacer obligatorio el envio de minPrice y maxPrice juntos
maxPrice: maxPrice.when('minPrice', {
  is: Joi.exist(),
  then: Joi.required()
})
*/
