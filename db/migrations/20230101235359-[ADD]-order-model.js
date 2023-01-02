'use strict'
import { Order, orderSchema } from '../models/order.model'

/** @type {import('sequelize-cli').Migration} */
export defaul {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Order.tableName, orderSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Order.tableName)
  }
}
