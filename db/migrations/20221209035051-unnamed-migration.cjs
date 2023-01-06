'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { User, userSchema } = await import('../models/user.model.js')
    await queryInterface.createTable(User.tableName, userSchema)
  },

  async down (queryInterface, Sequelize) {
    const { User } = await import('../models/user.model.js')

    await queryInterface.dropTable(User.tableName)
  }
}
