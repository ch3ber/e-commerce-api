const userSchema = require('../schemas/user.schema')

const userModel = (sequelize) => {
  sequelize.define('User', userSchema, {
    timestamps: false
  })
}

module.exports = { userModel }
