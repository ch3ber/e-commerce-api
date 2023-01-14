import { Pool } from 'pg'
import { URI } from '@config/config'

const pool = new Pool({ connectionString: URI })
export default pool
