// @ts-check
import { ValidationError } from 'sequelize'

/**
 * Definition of Middleware
 * @function
 * @param {*} error - Error
 * @param {*} request - client request
 * @param {*} response - server response
 * @param {*} next - continue with next middleware
 * @returns {void}
 */

/**
 * Shows the error in the console where the app is run
 */
function logErrors (err, req, res, next) {
  console.error(err)
  next(err)
}

/**
 * The last middleware, crash the server if any middleware catch the error.
 * Display the error to the user
 */
function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

/**
 * Management the schemas' errors.
 * Display the error and status code to the user
 */
function boomErrorHandler (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

/**
 * Management the orm's errors.
 * Display the orm error to the user
 */
function ormErrorHandler (err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.errors
    })
  }
  next(err)
}

export default { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
