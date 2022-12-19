const { Sequelize } = require('sequelize')
const { config } = require('../config/config')
// const setupModels = require('../db/setupModels')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

/**
 * Setup the ORM sequelize
 * @constant {Sequelize} - Sequelize instance
 */
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  loggin: true
})

module.exports = sequelize
