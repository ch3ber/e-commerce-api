const { DataTypes, Sequelize } = require('sequelize')

const TABLE_NAME = 'User'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
const userSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

/**
 * Define a user model in the DB
 * @function
 * @param {Sequelize} sequelize - sequelize instance
 * @returns {Sequelize} - User definition
 */
const userModel = (sequelize) => {
  return sequelize.define(TABLE_NAME, userSchema, {
    timestamps: false
  })
}

module.exports = { TABLE_NAME, userSchema, userModel }
