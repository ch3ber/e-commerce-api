'use strict'
const { Order, orderSchema } = require('../models/order.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Order.tableName, orderSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Order.tableName)
  }
}
