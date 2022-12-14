'use strict'

const sequelize = require('../../libs/sequelize')
const { userSchema } = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(sequelize.models.User.tableName, 'role', userSchema.role)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(sequelize.models.User.tableName, 'role')
  }
}
