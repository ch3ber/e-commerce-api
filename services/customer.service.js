const boom = require('@hapi/boom')
const { Customer } = require('../db/models/customer.model')

class CustomerService {
  async find () {
    const rta = await Customer.findAll()
    return rta
  }

  async findOne (id) {
    const user = await Customer.findByPk(id)
    if (!user) {
      throw boom.notFound('customer not found')
    }
    return user
  }

  async create (data) {
    const newCustomer = await Customer.create(data)
    return newCustomer
  }

  async update (id, changes) {
    const model = await this.findOne(id)
    const rta = await model.update(changes)
    return rta
  }

  async delete (id) {
    const model = await this.findOne(id)
    await model.destroy()
    return { rta: true }
  }
}

module.exports = CustomerService
