'use strict'

import { customerSchema, Customer } from '../models/customer.model'

/** @type {import('sequelize-cli').Migration} */
export defaul {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Customer.tableName, customerSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Customer.tableName)
  }
}
