'use strict'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    const { Order, orderSchema } = await import('../models/order.model.js')

    await queryInterface.createTable(Order.tableName, orderSchema)
  },

  async down (queryInterface, Sequelize) {
    const { Order } = await import('../models/order.model.js')

    await queryInterface.dropTable(Order.tableName)
  }
}
