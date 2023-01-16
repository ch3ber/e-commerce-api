import { Product } from '@db/models/product.model'
import { Op } from 'sequelize'
import { ParsedQs } from 'qs'
import { MakeBaseServiceFrom } from './MakeBasicServiceFrom'

class GetWhereValidationsFromQuery {
  static get (query: ParsedQs) {
    if (!query) return
    const queries = Object.keys(query)

    /** where clause with validations */
    let where = {}

    /**
     * validation schema
     * @function
     * @param {number|string} value - user value
     * @returns {Object} - Where clause with the new validation
     */

    const validationNames = {
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
      if (validationNames[queryKey]) {
        where = validationNames[queryKey](query[queryKey])
      }
    })

    return where
  }
}

export class ProductService extends MakeBaseServiceFrom {
  async find (query?) {
    const options = {
      include: ['category'],
      limit: query?.limit ?? 2,
      offset: query?.offset ?? 0,
      where: GetWhereValidationsFromQuery.get(query)
    }

    const product = await this.model.findAll(options)
    return product
  }
}

export const productService = new ProductService(Product)
