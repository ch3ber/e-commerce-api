import boom from '@hapi/boom'

export class MakeBaseServiceFrom {
  __model
  constructor (model) {
    this.__model = model
  }

  /**
   * Create a new product from the client data
   * @param data - Data to create the new object
   * @returns - The new object created in the DB
   */
  async create (data) {
    const newObject = await this.__model.create(data)
    return newObject
  }

  /**
   * Find all objects into the DB
   * @returns Array of all objects in the DB
   */
  async find () {
    const data = await this.__model.findAll()
    return data
  }

  /**
   * Find a object from the DB
   * @param id - object's id in the DB
   * @returns - object found in the DB
   */
  async findOne (id) {
    const data = await this.__model.findByPk(id)
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
