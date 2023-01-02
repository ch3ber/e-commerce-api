'use strict'

import { userSchema, User } from '../models/user.model.js'

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(User.tableName, 'role', userSchema.role)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn(User.tableName, 'role')
  }
}
