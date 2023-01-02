import { Sequelize } from 'sequelize'
import { URI } from '../db/config.js'

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
  const { setupRelations } = await import('../db/relations.js')
  setupRelations()
}

executeAfterSequelizeInitialization()

export default sequelize
