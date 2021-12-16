const poolPromise = require('../../services/bd/mysql/bd')
const { logger } = require('../../services/logging/logger')

module.exports = {
  
  async getUsers() { 
    try {
      const [ rows ] = await poolPromise.query('SELECT * FROM users AND active = 1')
      return rows  
    } catch ( err ) { logger.error(err); throw new Error('DB Error')}
  },

  async getUser( id ) { 
    try {
      const [ rows ] = await poolPromise.execute('SELECT * FROM users WHERE id = ? AND active = 1', [ id ])
      return rows[0]  
    } catch ( err ) { logger.error(err); throw new Error('DB Error')}
  },

  async getUserByUsername( username ) { 
    try {
      const [ rows ] = await poolPromise.execute('SELECT * FROM users WHERE username = ? AND active = 1', [ username ])
      return rows[0]  
    } catch ( err ) { logger.error(err); throw new Error('DB Error')}
  },

  async createUser( user ) { 
    try {
      let [result] = await poolPromise.execute(`INSERT INTO users (username, name, surname, password, email, active, idRole)
      VALUES (?, ?, ?, ?, ?, ?, ?)`, [ user.username, user.name, user.surname, user.password, user.email, user.active, user.idRole])
      return result.insertId  
    } catch ( err ) { logger.error(err); throw new Error('DB Error')}
  },

  async updateUser( user ) { 
    try {
      let [result] = await poolPromise.execute(`UPDATE users SET username = ?, name = ?, surname = ?, email = ?, active = ?,
      idRole = ? WHERE id = ?`, [ user.username, user.name, user.surname, user.email, user.active, user.idRole, user.id])
      return result.affectedRows  
    } catch ( err ) { logger.error(err); throw new Error('DB Error')}
  },
}