'use strict'

const sequelize = require('../../libs/sequelize')
const { userSchema } = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(sequelize.models.User.tableName, userSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(sequelize.models.User.tableName)
  }
}
