import { describe, beforeAll, test, afterAll, expect } from '@jest/globals'
import { config } from '@config/config'
import { appConfig } from '@app'
import supertest from 'supertest'
import sequelize from '@libs/sequelize'

describe('Welcome index route', () => {
  let server
  let api

  beforeAll(async () => {
    const app = appConfig()
    server = app.listen(config.port)
    api = supertest(server)
  })

  afterAll(async () => {
    await sequelize.close()
    await server.close()
  })

  describe('GET /', () => {
    test('Load welcome route', async () => {
      await api
        .get('/')
        .expect(200)
        .then(res => {
          expect(res.text).toEqual('Welcome!')
        })
    })
  })
})
