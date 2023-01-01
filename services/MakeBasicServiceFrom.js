// @ts-check
const boom = require('@hapi/boom')

/**
 * @typedef { import('./service').CreateableService } CreateableService
 * @typedef { import('./service').SearchableService } SearchableService
 * @typedef { import('./service').UpgradableService } UpgradableService
 * @typedef { import('./service').DeletableService } DeletableService
 * @typedef { import('sequelize').Model<any, any> } Model
 * @typedef { import('sequelize').ModelCtor<any> } ModelCtor
 */

/**
 * Create a service with all the basic methods for a service from a model
 * @implements {CreateableService}
 * @implements {SearchableService}
 * @implements {UpgradableService}
 * @implements {DeletableService}
 * @param {ModelCtor} model - model to create the service
 */
class MakeBaseServiceFrom {
  #model

  constructor (model) {
    this.#model = model
  }

  /**
   * Create a new product from the client data
   * @param data - Data to create the new object
   * @returns - The new object created in the DB
   */
  async create (data) {
    const newObject = await this.#model.create(data)
    return newObject
  }

  /**
   * Find all objects into the DB
   * @returns Array of all objects in the DB
   */
  async find () {
    const data = await this.#model.findAll()
    return data
  }

  /**
   * Find a object from the DB
   * @param id - object's id in the DB
   * @returns - object found in the DB
   */
  async findOne (id) {
    const data = await this.#model.findByPk(id)
    if (!data) {
      throw boom.notFound('Data not found')
    }
    return data
  }

  /**
   * Update data from a object in the DB
   * @param {number} id - product's id in the DB
   * @param {object} changes - changes to apply to the object
   * @returns {Promise<Model>} - object with changes applied
   */
  async update (id, changes) {
    const object = await this.findOne(id)
    const response = await object.update(changes)
    return response
  }

  /**
   * Delete a product from the DB
   * @param {number} id - product's id in the DB
   * @returns {Promise<{ id: number }>} - Deteled product id
   */
  async delete (id) {
    const object = await this.findOne(id)
    object.destroy()
    return { id }
  }
}

module.exports = { MakeBaseServiceFrom }
