// @ts-check
const boom = require('@hapi/boom')
const { Product } = require('../db/models/product.model')

/**
 * @typedef { import('./service.d.js').Service } Service
 * @typedef { import('sequelize').Model<any, any> } Model
 * @implements {Service}
 */
class ProductsService {
  /**
   * Create a new product from the client data
   * @param {import("sequelize").Optional<any, string> | undefined} data
   * @returns {Promise<Model>} - The new model created in the DB
   */
  async create (data) {
    const newProduct = await Product.create(data)
    return newProduct
  }

  /**
   * Find all products into the DB
   * @returns {Promise<Model[]>} - Array of all products in the DB
   */
  async find () {
    const proucts = await Product.findAll()
    return proucts
  }

  /**
   * Find a product from the DB
   * @param {import("sequelize").Identifier | undefined} id - product's id in the DB
   * @returns {Promise<Model>} - product found in the DB
   */
  async findOne (id) {
    const product = await Product.findByPk(id)
    if (!product) {
      throw boom.notFound('Product not found')
    }
    return product
  }

  /**
   * Update data from a product in the DB
   * @param {number} id - product's id in the DB
   * @param {object} changes - changes to apply to the product
   * @returns {Promise<Model>} - product with changes applied
   */
  async update (id, changes) {
    const product = await this.findOne(id)
    const response = await product.update(changes)
    return response
  }

  /**
   * Delete a product from the DB
   * @param {number} id - product's id in the DB
   * @returns {Promise<{ id: number }>} - Deteled product id
   */
  async delete (id) {
    const product = await this.findOne(id)
    product.destroy()
    return { id }
  }
}

module.exports = ProductsService
