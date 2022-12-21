// @ts-check
const boom = require('@hapi/boom')
const { Customer } = require('../db/models/customer.model')

/**
 * @typedef { import('./service.d.js').Service } Service
 * @typedef { import('sequelize').Model<any, any> } Model
 * @implements {Service}
 */
class CustomerService {
  async find () {
    const rta = await Customer.findAll({ include: ['user'] })
    return rta
  }

  /**
   * @param {import("sequelize").Identifier | undefined} id
   */
  async findOne (id) {
    const customer = await Customer.findByPk(id)
    if (!customer) {
      throw boom.notFound('customer not found')
    }
    return customer
  }

  /**
   * @param {import("sequelize").Optional<any, string> | undefined} data
   */
  async create (data) {
    const newCustomer = await Customer.create(data, { include: ['user'] })
    return newCustomer
  }

  /**
   * @param {any} id
   * @param {{ [x: string]: any; }} changes
   */
  async update (id, changes) {
    const model = await this.findOne(id)
    const rta = await model.update(changes)
    return rta
  }

  /**
   * @param {any} id
   */
  async delete (id) {
    const model = await this.findOne(id)
    await model.destroy()
    return { id }
  }
}

module.exports = CustomerService
