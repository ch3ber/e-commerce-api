'use strict'

const { userSchema, User } = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(User.tableName, userSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(User.tableName)
  }
}
