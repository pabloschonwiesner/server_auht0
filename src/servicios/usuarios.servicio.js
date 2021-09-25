const jwt = require('jsonwebtoken')
const UsuariosModelo = require('./../modelos/usuarios.modelo')
const usuariosModelo = new UsuariosModelo()
const { SECRET } = require('./../bd/config')

class UsuariosServicio {
  firmarJWT (usuario) {
    return jwt.sign({ data: usuario, exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1000)}, SECRET );
  }

  async login ( usuario ) {
    let usuarioBD = await usuariosModelo.seleccionarUsuarioPorNombre(usuario.usuario)

    if(!usuarioBD) throw { message: 'Usuario o contraseña incorrectos'}

    if(usuarioBD.password != usuario.password) throw { message: 'Usuario o contraseña incorrectos'}

    delete usuarioBD.password

    let token = await this.firmarJWT(usuarioBD)

    return {
      usuario: usuarioBD.usuario,
      codigo: usuarioBD.codigo,
      token
    }
  }

  async refrescarToken (usuario) {
    try {
      // crear token
      let token = this.firmarJWT(usuario)
      
      return {
        usuario: usuario.usuario,
        codigo: usuario.codigo,
        token
      }    
    } catch ( err ) { throw err }
  }
}

module.exports = UsuariosServicio