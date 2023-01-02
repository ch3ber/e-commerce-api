'use strict'

import { Category, categorySchema } from '../models/category.model'
import { Product, productSchema } from '../models/product.model'

/** @type {import('sequelize-cli').Migration} */
export defaul {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Category.tableName, categorySchema)
    await queryInterface.createTable(Product.tableName, productSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Category.tableName)
    await queryInterface.dropTable(Product.tableName)
  }
}
