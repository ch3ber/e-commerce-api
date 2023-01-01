// @ts-check
const { MakeBaseServiceFrom } = require('./MakeBasicServiceFrom')
const { Product } = require('../db/models/product.model')

const productsService = new MakeBaseServiceFrom(Product)

module.exports = { productsService }
