import { Pool as PostgresClient } from 'pg'

class Postgres {
  /**
     * @private
     * @description singleton pattern for pool connection
     * @returns {object} - connection client
     */
  async #connect () {
    try {
      // @ts-ignore
      if (!Postgres.connection) {
      // @ts-ignore
        Postgres.connection = new PostgresClient()
      }
      // @ts-ignore
      return Postgres.connection
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * @description query process in table
   * @param {string} request - SQL string request
   * @returns {Object} - response query postgresDB
   */
  async query (request) {
    try {
      const db = await this.#connect()
      return await db.query(request)
    } catch (error) {
      console.log(error)
    }
  }
}

export default Postgres
