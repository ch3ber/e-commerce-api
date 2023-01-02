'use strict'

import { DataTypes } from 'sequelize'
import { Customer } from '../models/customer.model'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(Customer.tableName, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(Customer.tableName, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: false
    })
  }
}
