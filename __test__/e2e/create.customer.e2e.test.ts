import { describe, beforeAll, test, afterAll, expect } from '@jest/globals'
import request from 'supertest'

import { config } from '@config/config'
import { appConfig } from '@app'

import sequelize from '@libs/sequelize'
import { customerFake } from '@test/__mocks__/customer.fake'

import { Customer } from '@db/models/customer.model'
import { User } from '@db/models/user.model'

import '@utils/auth/index' // Enable authentication and authorization

describe('E2E for create a user', () => {
  let server
  let api

  beforeAll(async () => {
    const app = appConfig()
    server = app.listen(config.port)
    api = request(server)
    await sequelize.authenticate()
    await Customer.destroy({where: {} })
    await User.destroy({where: {} })
  })

  afterAll(async () => {
    await Customer.destroy({where: {} })
    await User.destroy({where: {} })
    await sequelize.close()
    await server.close()
  })

  test('POST customer from /api/v1/customers', async () => {
    await api
      .post('/api/v1/customers')
      .send(customerFake)
      .expect(201)
  })

  test('Login the customer to get the JWT token', async () => {
    await api
      .post('/api/v1/auth/login')
      .send({
        "email": customerFake.user.email,
        "password": customerFake.user.password,
      })
      .expect(200)
      .then(res => {
        const obj = JSON.parse(res.text)
        expect(obj.user.email).toEqual(customerFake.user.email)
        expect(typeof obj.token).toBe('string')
      })
  })
})
