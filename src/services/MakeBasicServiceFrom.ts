import boom from '@hapi/boom'

export class MakeBaseServiceFrom {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    protected model: any
  ) {}

  /**
   * Create a new product from the client data
   * @param data - Data to create the new object
   * @returns - The new object created in the DB
   */
  async create (data) {
    const newObject = await this.model.create(data)
    return newObject
  }

  /**
   * Find all objects into the DB
   * @returns Array of all objects in the DB
   */
  async find () {
    const data = await this.model.findAll()
    return data
  }

  /**
   * Find a object from the DB
   * @param id - object's id in the DB
   * @returns - object found in the DB
   */
  async findOne (id) {
    const data = await this.model.findByPk(id)
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

  async delete (id) {
    const object = await this.findOne(id)
    object.destroy()
    return { id }
  }
}
