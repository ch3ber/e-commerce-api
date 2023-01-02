import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../../libs/sequelize.js'
import { Customer } from './customer.model.js'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const orderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: Customer.tableName
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

/**
 * Represents a order in the DB
 */
export const Order = sequelize.define('Order', orderSchema, {
  timestamps: false
})
