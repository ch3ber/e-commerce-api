import { config } from '@config/config'
import { appConfig } from './app'
// Enable authentication and authorization
import '@utils/auth/index'

const app = appConfig()

app.listen(config.port, () => {
  console.log(`App running on port: ${config.port}`)
})
