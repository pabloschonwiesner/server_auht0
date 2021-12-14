let mysql = require('mysql2')
const { loggerCO } = require('../../logging/logger')
const config = require('./config')

const pool = mysql.createPool({
  host: config.HOST_MYSQL,
  user: config.USER_MYSQL,
  password: config.PASSWORD_MYSQL,
  database: config.DATABASE_MYSQL,
  connectionLimit: 10
})

const poolPromise = pool.promise();

// const poolPromise = pool.promise()
loggerCO.trace('Mysql connected!')
  

module.exports = poolPromise 