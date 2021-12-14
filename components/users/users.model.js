const userDao = require('./users.dao')

module.exports = {
  
  async getUsers() { 
    return userDao.getUsers()
  }
}
