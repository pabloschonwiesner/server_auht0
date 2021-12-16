const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('./users.model')
const userDto = require('./users.dto')
const { SECRET } = require('../../config/config')

const response = require('../../routes/utils/response')
const { logger } = require('../../services/logging/logger')

module.exports = {
  async getUsers ( req, res ) {
    try {
      const id = req.params.id

      if( id ) {
        let user = await userModel.getUser(id)
        return response.success(res, userDto.one(user))
      } else {
        let users = await userModel.getUsers()
        return response.success(res, userDto.many(users))
      }
    } catch ( err ) { logger.error(err); return response.serverError(res, err)}
  },

  async createUser ( req, res ) {
    try {
      const user = req.body
      if ( !user.username ) throw new Error('To create a user the username is necesary')
      if ( !user.password ) throw new Error('To create a user the password is necesary')
      if ( !user.idRole ) throw new Error('To create a user the role is necesary')

      let insertId = await userModel.createUser ({
        username: user.username,
        name: user.name,
        surname: user.surname,
        password: user.password,
        email: user.email,
        active: user.active,
        idRole: user.idRole
      })

      let userSaved = await userModel.getUser( insertId )

      return response.success(res, userDto.one(userSaved))
    } catch ( err ) { logger.error(err); return response.serverError(res, err)}
  },

  async updateUser ( req, res ) {
    try {
      const user = req.body

      await userModel.updateUser ({
        id: user.id,
        username: user.username,
        name: user.name,
        surname: user.surname,
        email: user.email,
        active: user.active,
        idRole: user.idRole
      })

      let userSaved = await userModel.getUser( user.id )
      return response.success(res, userDto.one(userSaved))
    } catch ( err ) { logger.error(err); return response.serverError(res, err) }
  },

  async deleteUser ( req, res ) {
    try {
      const user = req.body

      await userModel.updateUser ({
        id: user.id,
        username: user.username,
        name: user.name,
        surname: user.surname,
        email: user.email,
        active: 0, // deactive user
        idRole: user.idRole
      })

      return res.status(204)
    } catch ( err ) { logger.error(err); return response.serverError(res, err) }
  },

  async loginUser ( req, res ) {
    try {
      const user = req.body
      if ( !user.username ) throw new Error('To login a user the username is necesary')
      if ( !user.password ) throw new Error('To login a user the password is necesary')

      let userSaved = await userModel.getUserByUsername( user.username )

      if ( !userSaved ) throw new Error(`User not found`)

      if( !bcrypt.compareSync( user.password, userSaved.password ) ) throw new Error('Wrong username o password')

      const expiresIn = 60 * 60 * 24 // un dia
      const token = jwt.sign( { user: userDto.one(userSaved) }, SECRET, { expiresIn })

      return response.success(res, { token })
    } catch ( err ) { logger.error(err); return response.serverError(res, err) }
  },
}
