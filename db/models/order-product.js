import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '#libs/sequelize.js'
import { Order } from './order.model.js'
import { Product } from './product.model.js'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const orderProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: Order.tableName
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: Product.tableName
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
export const OrderProducts = sequelize.define('OrderProducts', orderProductsSchema, {
  timestamps: false
})
