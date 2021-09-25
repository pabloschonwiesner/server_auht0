const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const { loggerCO } = require('./servicios/logger.servicio')
const config = require('./bd/config')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/public', express.static(path.join(__dirname,"/../public/"))); 
app.get('/', function(req,res) {
   res.sendFile('index.html', { root: path.join(__dirname, '/../public/') });cls
   
});

app.use(require('./rutas/usuarios.rutas'))


app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '/../public/404.html'));
})

function iniciarServidor () {
  app.listen(config.PORT, () => loggerCO.trace(`Servidor iniciado en el puerto ${config.PORT}`))
}

module.exports = iniciarServidor