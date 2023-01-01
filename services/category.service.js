const { Category } = require('../db/models/category.model')
const { MakeBaseServiceFrom } = require('./MakeBasicServiceFrom')

const categoryService = new MakeBaseServiceFrom(Category)

module.exports = { categoryService }
