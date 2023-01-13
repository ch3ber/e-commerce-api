import boom from '@hapi/boom'
import jwt from 'jsonwebtoken'
import passport from 'passport'

/**
 * @typedef {import('sequelize/types').Model} Model
 */

const checkAdminRoleFromJWT = (token) => {
  return jwt.decode(token)
}

export function authHandler (req, res, next) {
  const authToken = passport.authenticate('jwt', { session: false })

  if (!checkAdminRoleFromJWT(authToken)) {
    next(boom.forbidden())
  }

  next(authToken)
}

export function checkAdminRole (req, res, next) {
  const role = req.user.role
  if (role === 'admin') {
    next()
  } else {
    next(boom.forbidden())
  }
}

export function checkRoles (...roles) {
  return (req, res, next) => {
    const user = req.user

    if (roles.includes(user.role)) {
      next()
    } else {
      next(boom.forbidden())
    }
  }
}
