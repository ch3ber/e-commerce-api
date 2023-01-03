'use strict'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    const { User, userSchema } = await import('../models/user.model.js')

    await queryInterface.addColumn(User.tableName, 'role', userSchema.role)
  },

  async down (queryInterface, Sequelize) {
    const { User } = await import('../models/user.model.js')

    await queryInterface.addColumn(User.tableName, 'role')
  }
}
