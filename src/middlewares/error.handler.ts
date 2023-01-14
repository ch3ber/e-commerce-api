
import { ValidationError } from 'sequelize'

/**
 * Shows the error in the console where the app is run
 */
export function logErrors (err, _req, _res, next) {
  console.error(err)
  next(err)
}

/**
 * The last middleware, crash the server if any middleware catch the error.
 * Display the error to the user
 */
export function errorHandler (err, _req, res, _next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

/**
 * Management the schemas' errors.
 * Display the error and status code to the user
 */
export function boomErrorHandler (err, _req, res, next) {
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
export function ormErrorHandler (err, _req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.errors
    })
  }
  next(err)
}
