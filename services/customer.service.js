// @ts-check
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'
import { Customer } from '../db/models/customer.model.js'

class CustomerService extends MakeBaseServiceFrom {
  async find () {
    const rta = await Customer.findAll({ include: ['user'] })
    return rta
  }

  /**
   * @param {import("sequelize").Optional<any, string> | undefined} data
   */
  async create (data) {
    const newCustomer = await Customer.create(data, { include: ['user'] })
    return newCustomer
  }
}

const customerService = new CustomerService(Customer)

export default { customerService }
