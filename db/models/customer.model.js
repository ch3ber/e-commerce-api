import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../../libs/sequelize.js'
import { User } from './user.model.js'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const customerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export const Customer = sequelize.define('Customer', customerSchema, {
  timestamps: false
})

/**
* Defining the customer associations
*/
User.hasOne(Customer, {
  as: 'customer',
  foreignKey: 'userId'
})
Customer.belongsTo(User, { as: 'user' })
