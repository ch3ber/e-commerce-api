'use strict'

const { Category, categorySchema } = require('../models/category.model')
const { Product, productSchema } = require('../models/product.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Category.tableName, categorySchema)
    await queryInterface.createTable(Product.tableName, productSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Category.tableName)
    await queryInterface.dropTable(Product.tableName)
  }
}
