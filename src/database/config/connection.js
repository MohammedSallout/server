import pg from 'pg'
import {} from 'dotenv/config'
const { Pool } = pg

const {
  DEV_DB_URL,
  DATABASE_URL,
  NODE_ENV
} = process.env

const options = {
  connectionString: DEV_DB_URL,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
}

const connection = new Pool(options)

export default connection
