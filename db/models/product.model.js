import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../../libs/sequelize'
import { Category } from './category.model'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
const productSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: Category.tableName,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

/**
 * Represents the product model in the DB
 */
const Product = sequelize.define('Product', productSchema, {
  timestamps: false
})

/**
* Defining the customer associations
*/
Category.hasMany(Product, {
  as: 'products',
  foreignKey: 'categoryId'
})
Product.belongsTo(Category, { as: 'category' })

export default { productSchema, Product }
