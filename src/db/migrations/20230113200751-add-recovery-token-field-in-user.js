'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { User } = await import('../models/user.model.js')

    await queryInterface.addColumn(User.tableName, 'recovery_token', {
      field: 'recovery_token',
      allowNull: true,
      type: Sequelize.DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    const { User } = await import('../models/user.model.js')

    await queryInterface.removeColumn(User.tableName, 'recovery_token')
  }
}
