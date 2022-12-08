const { userModel } = require('./models/user.model')

const MODELS = [
  userModel
]

const setupModels = async (sequelize) => {
  await MODELS.forEach(model => model(sequelize))
}

module.exports = setupModels
