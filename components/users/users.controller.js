const jwt = require('jsonwebtoken')
const userModel = require('./users.model')
const userDto = require('./users.dto')
const { SECRET } = require('../../config/config')

const response = require('../../routes/utils/response')

module.exports = {
  async getUsers ( req, res ) {
    try {
      let users = await userModel.getUsers()
      return response.success(res, userDto.many(users))
    } catch ( err ) { return response.serverError(res, err)}
  }
}
