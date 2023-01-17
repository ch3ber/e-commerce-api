import { describe, beforeAll, test, afterAll, expect } from '@jest/globals'
import request from 'supertest'

import { config } from '@config/config'
import { appConfig } from '@app'

import sequelize from '@libs/sequelize'
import { adminFake } from '@test/__mocks__/admin.fake'

import { Customer } from '@db/models/customer.model'
import { User } from '@db/models/user.model'

import '@utils/auth/index' // Enable authentication and authorization
import { manyCategories } from '@test/__mocks__/category.fake'
import { Category } from '@db/models/category.model'
import { manyProducts } from '@test/__mocks__/products.fake'
import { Product } from '@db/models/product.model'

describe('E2E for products', () => {
  let server
  let api
  let customerJWTToekn: string

  let validCategoryId: number

  beforeAll(async () => {
    const app = appConfig()
    server = app.listen(config.port)
    api = request(server)
    await sequelize.authenticate()
    await Customer.destroy({where: {} })
    await User.destroy({where: {} })
    await Product.destroy({where: {}})
    await Category.destroy({where: {}})
  })

  afterAll(async () => {
    await Customer.destroy({where: {} })
    await User.destroy({where: {} })
    await Product.destroy({where: {}})
    await Category.destroy({where: {}})
    await sequelize.close()
    await server.close()
  })

  describe('Login an admin', () => {
    test('POST admin from /api/v1/users', async () => {
      await api
        .post('/api/v1/users')
        .send(adminFake)
        .expect(201)
    })

    test('Login the admin to get the JWT token', async () => {
      await api
        .post('/api/v1/auth/login')
        .send({
          "email": adminFake.email,
          "password": adminFake.password,
        })
        .expect(200)
        .then(res => {
          const obj = JSON.parse(res.text)
          expect(obj.user.email).toEqual(adminFake.email)
          customerJWTToekn = obj.token
        })
    })
  })

  describe('POST categories from /api/v1/categories', () => {
    test('POST 5 categories', async () => {
      const categoriesToPOST = manyCategories(5)
      await api
        .post('/api/v1/categories')
        .set('Authorization', `Bearer ${customerJWTToekn}`)
        .send(categoriesToPOST)
        .then(res => {
          const formatData = JSON.parse(res.text)
          expect(formatData.length).toEqual(5)
          expect(formatData[0].name).toEqual(categoriesToPOST[0].name)
          validCategoryId = formatData[0].id
        })
    })

    test('GET all categories, must be 5', async () => {
      await api
        .get('/api/v1/categories')
        .expect(200)
        .then(res => {
          const formatData = JSON.parse(res.text)
          expect(formatData.length).toEqual(5)
        })
    })
  })

  describe('Create products', () => {
    test('GET 0 products', async () => {
      await api
        .get('/api/v1/products')
        .then(res => {
          const formatData = JSON.parse(res.text)
          expect(formatData.length).toEqual(0)
        })
    })

    test('POST 1 product', async () => {
      const productsToPOST = manyProducts(1, validCategoryId)
      const product = productsToPOST.at(0)
      await api
        .post('/api/v1/products')
        .send(product)
        .then(res => {
          console.log(res.text)
          const formatData = JSON.parse(res.text)
          expect(formatData.description).toEqual(product?.description)
        })
    })
  })
})
