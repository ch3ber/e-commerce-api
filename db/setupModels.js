const { userModel } = require('./models/user.model')
const { customerModel } = require('./models/customer.model')

/**
 * Constant to load DB models
 * @constant {array<strings>} - Arrya of DB modles
 * @type {model[]}
 */
const MODELS = [
  userModel,
  customerModel
]

/**
 * Setup models into DB
 * @async
 * @function stupModels
 * @param {sequelize} sequelize - Instance of sequelize
 */
const setupModels = async (sequelize) => {
  await MODELS.forEach(model => model(sequelize))
}

module.exports = setupModels
