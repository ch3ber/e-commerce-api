const { DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../../libs/sequelize')

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

const User = sequelize.define('User', userSchema, {
  timestamps: false
})

module.exports = { userSchema, User }
