import { Sequelize } from 'sequelize'
import { config } from '../config/config'

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

export defaul sequelize
