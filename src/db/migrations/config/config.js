const { URI, DEV_URI } = require('../../../config/config')

module.exports = {
  development: {
    url: DEV_URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
