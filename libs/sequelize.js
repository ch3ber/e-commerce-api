import { Sequelize } from 'sequelize'
import { config } from '../config/config.js'

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

async function executeAfterSequelizeInitialization () {
  await sequelize.authenticate()
  const { setupRelations } = await import('../db/config/relations.js')
  setupRelations()
}

executeAfterSequelizeInitialization()

export default sequelize
