'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { DataTypes } = await import('sequelize')
    const { Customer } = await import('../models/customer.model.js')

    await queryInterface.changeColumn(Customer.tableName, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    const { DataTypes } = await import('sequelize')
    const { Customer } = await import('../models/customer.model.js')

    await queryInterface.changeColumn(Customer.tableName, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false
    })
  }
}
