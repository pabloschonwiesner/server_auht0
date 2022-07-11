(async function iniciarServicio() {
  const app = require('./app')
  const cluster = require('cluster')
  const numCPUs = require('os').cpus().length
  const { logger, loggerCO } = require('./services/logging/logger')
  const { PORT } = require('./config/config')

  const https = require('https');
  const fs = require('fs');

  const options = {
    key: fs.readFileSync('localhost-key.pem'),
    cert: fs.readFileSync('localhost.pem')
  };

  try {
    if (cluster.isMaster) {
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
      }
    } else {
      app.set('port', PORT || 3000);
      const server = require('http').createServer(app)
      https.createServer(options, app).listen(3333);
      // const realtime = require('./services/realtime/realtime')

      server.listen(PORT, () => loggerCO.trace(`Servidor en el puerto ${PORT}. Servidor https en el puerto 3333`))
      server.on('error', (err) => logger.error(err))

      // si uso socket descomentar la siguiente linea
      // realtime.connect(server)
    }
  } catch (err) { logger.error(err) }
})()