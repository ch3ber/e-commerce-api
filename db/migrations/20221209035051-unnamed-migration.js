'use strict'

import { userSchema, User } from '../models/user.model.js'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(User.tableName, userSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(User.tableName)
  }
}
