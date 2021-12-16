const userDao = require('./users.dao')

module.exports = {
  
  async getUsers () { 
    return await userDao.getUsers()
  },

  async getUser ( id ) { 
    return await userDao.getUser( id )
  },

  async getUserByUsername ( name ) { 
    return await userDao.getUserByUsername( name )
  },

  async createUser ( user ) {
    return await userDao.createUser( user )
  },
  
  async updateUser ( user ) {
    return await userDao.updateUser( user )
  }
}
