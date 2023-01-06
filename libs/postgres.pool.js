import { Pool } from 'pg'
import { URI } from '../config/config.js'

const pool = new Pool({ connectionString: URI })
export default pool
