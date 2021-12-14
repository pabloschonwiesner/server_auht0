(function () {
  const path = require('path')
  const dotenv = require('dotenv')

  if(process.env.NODE_ENV == undefined) {
    process.env.NODE_ENV = 'development'
  }

  let pathEnviroment = path.join(__dirname, '/../../', process.env.NODE_ENV + '.env')

  dotenv.config({
    path: pathEnviroment
  })
})();