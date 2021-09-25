const { poolPromise, sql } = require('./../bd/bd')

class UsuariosModelo {
  async seleccionarUsuarioPorNombre ( usuario ) {
    try {
      let pool = await poolPromise
      let result = await pool.request()
        .input('usuario', sql.NVarChar, usuario)
        .query('SELECT TOP 1 * FROM Usuarios WHERE usuario = @usuario')
      return result.recordset[0]
    } catch ( err ) { throw err.message }
  }
}

module.exports = UsuariosModelo