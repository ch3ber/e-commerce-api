import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '#libs/sequelize.js'
import bcrypt from 'bcryptjs'

/**
 * Represent a schema in the DB
 * @constant {Object}
 */
export const userSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

/**
 * Represents a user in the DB
 */
export const User = sequelize.define('User', userSchema, {
  timestamps: false,
  hooks: {
    beforeCreate: async (user, options) => {
      user.password = await bcrypt.hash(user.password, 10)
    }
  },
  defaultScope: {
    attributes: {
      exclude: ['password', 'recoveryToken']
    }
  },
  scopes: {
    withPassword: {
      attributes: {
        include: ['password']
      }
    },
    withRecoveryToken: {
      attributes: {
        include: ['recoveryToken']
      }
    },
    withAll: {
      attributes: {
        include: ['password', 'recoveryToken']
      }
    }
  }
})
