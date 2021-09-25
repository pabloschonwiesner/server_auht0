class Respuesta {

  exitosa (res, documento) {
    return res.status(200).json({
      err: {},
      data: documento
    })
  }

  sinAutorizacion (res) {
    return res.status(401).json({
      err: {
        message: 'Token invalido',
        details: ''
      }
    })
  }

  errorServidor(res, err) {
    return res.status(500).json({
      err: {
        message: 'Error en el servidor',
        details: err
      }
    })
  }

}

module.exports = Respuesta