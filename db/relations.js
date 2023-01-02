import { Category } from './models/category.model.js'
import { Customer } from './models/customer.model.js'
import { Order } from './models/order.model.js'
import { Product } from './models/product.model.js'
import { User } from './models/user.model.js'

/**
 * Setup all the relations into the db
 * this function is called on /libs/sequelize.js file
 *
 * @function setupRelations
 * @returns {void}
 */
export function setupRelations () {
  User.hasOne(Customer, {
    as: 'customer',
    foreignKey: 'userId'
  })

  Customer.belongsTo(User, { as: 'user' })

  Category.hasMany(Product, {
    as: 'products',
    foreignKey: 'categoryId'
  })

  Product.belongsTo(Category, { as: 'category' })

  Customer.hasMany(Order, {
    as: 'orders',
    foreignKey: 'customer_id'
  })

  Order.belongsTo(Customer, { as: 'customer' })
}
