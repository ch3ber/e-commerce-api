'use strict'

import { Category, categorySchema } from '../models/category.model.js'
import { Product, productSchema } from '../models/product.model.js'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Category.tableName, categorySchema)
    await queryInterface.createTable(Product.tableName, productSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Category.tableName)
    await queryInterface.dropTable(Product.tableName)
  }
}
