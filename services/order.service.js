// @ts-check
const boom = require('@hapi/boom')
const { MakeBaseServiceFrom } = require('./MakeBasicServiceFrom')
const { Order } = require('../db/models/order.model')

class OrderService extends MakeBaseServiceFrom {
  /**
   * Find all objects into the DB
   * @returns Array of all objects in the DB
   */
  async find () {
    const data = await this.__model.findAll({
      include: [{
        association: 'customer',
        include: ['user']
      }]
    })
    return data
  }

  /**
   * Find a object from the DB
   * @param id - object's id in the DB
   * @returns - object found in the DB
   */
  async findOne (id) {
    console.log(this.__model)
    const data = await this.__model.findByPk(id)
    if (!data) {
      throw boom.notFound('Data not found')
    }
    return data
  }
}

const orderService = new OrderService(Order)

module.exports = { orderService }
