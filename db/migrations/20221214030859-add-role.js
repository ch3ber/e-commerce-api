'use strict'

const { userSchema, User } = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(User.tableName, 'role', userSchema.role)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn(User.tableName, 'role')
  }
}
