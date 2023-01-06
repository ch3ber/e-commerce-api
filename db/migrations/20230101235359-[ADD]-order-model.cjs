'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { Order, migrationOrderSchema } = await import('../models/order.model.js')

    await queryInterface.createTable(Order.tableName, migrationOrderSchema)
  },

  async down (queryInterface, Sequelize) {
    const { Order } = await import('../models/order.model.js')

    await queryInterface.dropTable(Order.tableName)
  }
}
