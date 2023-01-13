/**
 * db/config.js
 * Config for .sequelizerc file
 */
import { URI } from '../../config/config.js'

export default {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
