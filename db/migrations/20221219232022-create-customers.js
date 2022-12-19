'use strict'

const { customerSchema, Customer } = require('../models/customer.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Customer.tableName, customerSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Customer.tableName)
  }
}
