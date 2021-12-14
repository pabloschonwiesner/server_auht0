const sql = require('mssql');
const { db } = require('./config');
const { logger, loggerCO } = require('../../../services/logging/logger')

const poolPromise = new sql.ConnectionPool(db)
  .connect()
  .then( pool => {
    loggerCO.trace('Conectado al SQL Server')
    return pool
  })
  .catch( err => {
    logger.error(`Error en la conexion a la base de datos: ${err}`)
  })

module.exports = { poolPromise, sql }