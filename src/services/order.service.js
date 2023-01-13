// @ts-check
import boom from '@hapi/boom'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'
import { Order } from '#db/models/order.model.js'
import { OrderProducts } from '#db/models/order-product.js'

/**
 * Model to use in the OrderService instance
 * @typedef {import('#db/models/order.model.js').Order} OrderModel
 * Model to use in the OrderProductsService instance
 * @typedef {import('#db/models/order-product.js').OrderProducts} OrderProductsModel
 * Interface implemented for OrderProductsService
 * @typedef {import('./service.js').CreateableService} CreateableService
 * @typedef {import('sequelize/types').Model} Model
 */

/**
 * Class to manage the OrderProducts model in the DB
 * this class is used in /routes/orders.router.js
 * @name OrderProductsService
 * @constructor
 * @param {OrderProductsModel} OrderProductsModel - Model to create the service
 * @implements {CreateableService}
 */
class OrderProductsService {
  #model
  constructor (OrderProductsModel) {
    this.#model = OrderProductsModel
  }

  /**
   * Create a new record in the OrderProducts table
   * @param {import('sequelize').Optional<any, any>} data - Data to create the model
   * @returns {Promise<Model>} - Promise with the created model
   */
  async create (data) {
    const newOrder = this.#model.create(data)
    return newOrder
  }
}

// export orderProducts service to use in /routes/orders.router.js
export const orderProductsService = new OrderProductsService(OrderProducts)

/**
 * Class to manage the Order model in the DB
 * this class is used in /routes/orders.router.js
 * @name OrderService
 * @extends MakeBaseServiceFrom
 * @constructor - constructor inherited by parent class
 * @param {import('#db/models/order.model').Order} OrderModel - model to create the service
 */
export class OrderService extends MakeBaseServiceFrom {
  /**
   * Find all objects into the DB
   * @returns Array of all objects in the DB
   */
  async find () {
    const data = await this.__model.findAll({
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    })
    return data
  }

  /**
   * Find an object from the DB
   * @param {number} id - id of the object to find
   * @returns {Promise<OrderModel>} - object found in the DB
   */
  async findAllByUser (id) {
    const data = await this.__model.findAll({
      where: {
        '$customer.user.id$': id
      },
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    })

    if (!data) {
      throw boom.notFound('Data not found')
    }
    return data
  }

  /**
   * Find an object from the DB
   * @param {number} id - id of the object to find
   * @returns {Promise<OrderModel>} - object found in the DB
   */
  async findOne (id) {
    const data = await this.__model.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    })

    if (!data) {
      throw boom.notFound('Data not found')
    }
    return data
  }
}

// export order service to use in /routes/orders.router.js
export const orderService = new OrderService(Order)
