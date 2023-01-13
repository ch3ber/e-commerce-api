import { Sequelize } from 'sequelize'
import { URI } from '#config/config.js'

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
  const { setupRelations } = await import('#db/config/relations.js')
  setupRelations()
}

executeAfterSequelizeInitialization()

export default sequelize
