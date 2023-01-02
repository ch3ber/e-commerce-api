'use strict'
import { Order, orderSchema } from '../models/order.model.js'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Order.tableName, orderSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Order.tableName)
  }
}
