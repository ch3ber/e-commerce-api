import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

import routerApi from '@routes/index'
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } from '@middlewares/error.handler'

export const appConfig = () => {
  const swaggerDocument = YAML.load('./swagger.yaml')

  const app = express()

  /** Load middlewares */
  app.use(express.json())
  app.use(cors())

  /** Load the api docs */
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  /** Error middlewares */
  app.use(logErrors)
  app.use(ormErrorHandler)
  app.use(boomErrorHandler)
  app.use(errorHandler)

  app.get('/', (_req, res) => {
    res.status(200).send('Welcome!')
  })

  routerApi(app)

  return app
}
