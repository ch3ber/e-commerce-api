import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../../libs/sequelize'
import { Customer } from './customer.model'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
const orderSchema = {
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
const Order = sequelize.define('Order', orderSchema, {
  timestamps: false
})
Order.belongsTo(Customer, {
  as: 'customer'
})
Customer.hasMany(Order, {
  as: 'orders',
  foreignKey: 'customer_id'
})

export defaul { orderSchema, Order }
