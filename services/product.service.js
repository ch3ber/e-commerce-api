// @ts-nocheck
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom.js'
import { Product } from '../db/models/product.model.js'
import { Op } from 'sequelize'

/**
 * @typedef {import('./service.js').Pagination} Pagination
 * @typedef {import('./service.js').FilterByPrice} FilterByPrice
 */

/**
 * @implements {Pagination}
 * @implements {FilterByPrice}
 */
class ProductService extends MakeBaseServiceFrom {
  getWhereValidations (query) {
    /** Get all queries keys to validate */
    const queries = Object.keys(query)

    /** where clause with validations */
    let where = {}

    /**
     * validation schema
     * @function
     * @param {number|string} value - user value
     * @returns {Object} - Where clause with the new validation
     */

    // hashmap with validations
    const validations = {
      price: (value) => ({
        ...where,
        price: {
          [Op.eq]: value
        }
      }),
      minPrice: (value) => {
        if (query.maxPrice) {
          return {
            ...where,
            price: {
              [Op.between]: [value, query.maxPrice]
            }
          }
        }

        return {
          ...where,
          price: {
            [Op.gte]: value
          }
        }
      },
      maxPrice: (value) => {
        if (query.minPrice) {
          return {
            ...where,
            price: {
              [Op.between]: [query.minPrice, value]
            }
          }
        }

        return {
          ...where,
          price: {
            [Op.lte]: value
          }
        }
      },
      searchInDescription: (value) => {
        return {
          ...where,
          description: {
            [Op.substring]: value
          }
        }
      },
      searchInName: (value) => {
        return {
          ...where,
          name: {
            [Op.substring]: value
          }
        }
      }
    }

    /**
     * If the query key is found in the validations hash map,
     * the method that adds the validation to the
     * where clause is executed
     */
    queries.forEach((queryKey) => {
      if (validations[queryKey]) {
        where = validations[queryKey](query[queryKey])
      }
    })

    return where
  }

  /**
   * @param {import("qs").ParsedQs} query
   */
  async find (query) {
    const options = {
      include: ['category'],
      limit: query?.limit ?? 2,
      offset: query?.offset ?? 0,
      where: this.getWhereValidations(query)
    }

    const product = await this.__model.findAll(options)
    return product
  }
}

export const productService = new ProductService(Product)
