(async function iniciarServicio() {
  const cluster = require('cluster')
  const numCPUs = require('os').cpus().length
  const iniciarServidor = require('./src/app')
  const { poolPromise } = require('./src/bd/bd')
  try {
    await poolPromise
    if(cluster.isMaster) {    
      for(let i = 0; i < numCPUs; i++ ) {
        cluster.fork()
      }
    } else {
      iniciarServidor()
    }    
  } catch ( err ) { console.log(`error: ${err}`)}
})()