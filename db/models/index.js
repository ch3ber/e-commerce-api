const { userModel } = require('./user.model')

async function setupModels (sequelize) {
  userModel(sequelize)
}

module.exports = setupModels
