import dotenv from 'dotenv'
dotenv.config()

export const config = {
  env: process.env.NODE_ENV || 'dev',
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtRecoverySecret: process.env.JWT_RECOVERY_SECRET,
  recoveryServiceHost: process.env.RECOVERY_SERVICE_HOST,
  recoveryServiceEmail: process.env.RECOVERY_SERVICE_EMAIL,
  recoveryServicePassword: process.env.RECOVERY_SERVICE_EMAIL_PASSWORD
}

// @ts-ignore
export const USER = encodeURIComponent(config.dbUser)
// @ts-ignore
export const PASSWORD = encodeURIComponent(config.dbPassword)

export const URI = config.dbUrl || `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
export const DEV_URI = URI
