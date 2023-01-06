'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { Customer, customerSchema } = await import(
      '../models/customer.model.js'
    )

    await queryInterface.createTable(Customer.tableName, customerSchema)
  },

  async down (queryInterface, Sequelize) {
    const { Customer } = await import('../models/customer.model.js')

    await queryInterface.dropTable(Customer.tableName)
  }
}
