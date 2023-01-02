// @ts-check
const { MakeBaseServiceFrom } = require('./MakeBasicServiceFrom')
const { Product } = require('../db/models/product.model')

const productService = new MakeBaseServiceFrom(Product)

module.exports = { productService }
