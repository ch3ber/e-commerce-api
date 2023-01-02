import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../../libs/sequelize.js'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const userSchema = {
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
 * Represents a user in the DB
 */
export const User = sequelize.define('User', userSchema, {
  timestamps: false
})
