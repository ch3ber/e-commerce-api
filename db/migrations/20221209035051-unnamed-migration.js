'use strict'

import { userSchema, User } from '../models/user.model'

/** @type {import('sequelize-cli').Migration} */
export defaul {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(User.tableName, userSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(User.tableName)
  }
}
