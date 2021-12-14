const poolPromise = require('../../services/bd/mysql/bd')
const { logger } = require('../../services/logging/logger')

module.exports = {
  
  async getUsers() { 
    try {
      const [ rows ] = await poolPromise.query('select * from usuarios')
      return rows  
    } catch ( err ) { logger.error(err); throw new Error('DB Error')}
  }
}