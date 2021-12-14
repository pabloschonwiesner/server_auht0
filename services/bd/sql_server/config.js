
const config = {
  db: {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_INSTANCE,
    database: process.env.SQL_DB,
    port: Number(process.env.SQL_PORT),
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 20000
    },
    
    options: {
      encrypt: false,
      useUTC: false,  
      enableArithAbort: false // permite que la ejecución no termine si divide por 0 o tiene overflow
    }
  }
}

module.exports = config