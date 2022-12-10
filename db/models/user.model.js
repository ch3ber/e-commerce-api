const { DataTypes, Sequelize } = require('sequelize')

const TABLE_NAME = 'User'

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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

const userModel = (sequelize) => {
  return sequelize.define(TABLE_NAME, userSchema, {
    timestamps: false
  })
}

module.exports = { TABLE_NAME, userSchema, userModel }
