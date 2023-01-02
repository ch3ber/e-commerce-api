'use strict'

import { customerSchema, Customer } from '../models/customer.model.js'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Customer.tableName, customerSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Customer.tableName)
  }
}
