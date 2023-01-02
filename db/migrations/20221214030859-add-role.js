'use strict'

import { userSchema, User } from '../models/user.model'

/** @type {import('sequelize-cli').Migration} */
export defaul {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(User.tableName, 'role', userSchema.role)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn(User.tableName, 'role')
  }
}
