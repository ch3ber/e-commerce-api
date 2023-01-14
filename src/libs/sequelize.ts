// @ts-nocheck
import { Sequelize } from 'sequelize'
import { URI } from '../config/config'

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
  const { setupRelations } = await import('../db/relations')
  setupRelations()
}

executeAfterSequelizeInitialization()

export default sequelize
