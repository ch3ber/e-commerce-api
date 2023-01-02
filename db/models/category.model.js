import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../../libs/sequelize.js'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const categorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

/**
 * Represents the category model in the DB
 */
export const Category = sequelize.define('Category', categorySchema, {
  timestamps: false
})
