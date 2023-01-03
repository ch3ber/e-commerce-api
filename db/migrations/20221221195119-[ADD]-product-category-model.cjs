'use strict'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    const { Category, categorySchema } = await import('../models/category.model.js')
    const { Product, productSchema } = await import('../models/product.model.js')

    await queryInterface.createTable(Category.tableName, categorySchema)
    await queryInterface.createTable(Product.tableName, productSchema)
  },

  async down (queryInterface, Sequelize) {
    const { Category } = await import('../models/category.model.js')
    const { Product } = await import('../models/product.model.js')

    await queryInterface.dropTable(Category.tableName)
    await queryInterface.dropTable(Product.tableName)
  }
}
