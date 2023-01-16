import { describe, test, expect, jest, afterAll, beforeEach, beforeAll } from '@jest/globals'
import { ProductService } from './product.service'
import sequelize from '@libs/sequelize'
import { appConfig } from '@app'
import { config } from '@config/config'

import { manyProducts } from '@test/__mocks__/products.fake'

const mockProductModel = {
  findAll: jest.fn()
}

describe('Welcome index route', () => {
  let server
  let productService

  beforeEach(() => {
    jest.clearAllMocks()
    productService = new ProductService(mockProductModel)
  })

  beforeAll(async () => {
    const app = appConfig()
    server = app.listen(config.port, () => {
      console.log('app for products')
    })
    await sequelize.close()
  })

  afterAll(async () => {
    await server.close()
  })

  describe('Get products from the DB', () => {
    test('Get all products', async () => {
      const PRODUCTS_COUNT = 10
      // @ts-ignore
      mockProductModel.findAll.mockResolvedValue(manyProducts(PRODUCTS_COUNT))

      const response = await productService.find()

      expect(response.length).toEqual(PRODUCTS_COUNT)
    })
  })
})
