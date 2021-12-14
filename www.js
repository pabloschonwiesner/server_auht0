(async function iniciarServicio() {
  const app = require('./app')
  const cluster = require('cluster')
  const numCPUs = require('os').cpus().length
  const { logger, loggerCO } = require('./services/logging/logger')
  const { PORT } = require('./config/config')
  
  try {
    if(cluster.isMaster) {    
      for(let i = 0; i < numCPUs; i++ ) {
        cluster.fork()
      }
    } else {
      app.set('port', PORT || 3000);
      const server = require('http').createServer(app)
      const realtime = require('./services/realtime/realtime')

      server.listen(PORT, () =>  loggerCO.trace(`Servidor en el puerto ${PORT}`))
      server.on('error', (err) =>  logger.error(err))
      
      // si uso socket descomentar la siguiente linea
      // realtime.connect(server)
    }    
  } catch ( err ) { logger.error(err) }
})()