import { DataTypes } from 'sequelize'
import sequelize from '../../libs/sequelize'
import { Customer } from './customer.model'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const migrationOrderSchema = {
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
    defaultValue: DataTypes.NOW
  }
}

const orderSchema = {
  ...migrationOrderSchema,
  total: {
    type: DataTypes.VIRTUAL,
    get () {
      // @ts-ignore
      if (!this.items) return 0
      // @ts-ignore
      if (this.items.length === 0) return 0

      // @ts-ignore
      return this.items.reduce((total, item) => {
        return total + (item.price * item.OrderProducts.amount)
      }
      , 0)
    }
  }
}

/**
 * Represents a order in the DB
 */
export const Order = sequelize.define('Order', orderSchema, {
  timestamps: false
})
