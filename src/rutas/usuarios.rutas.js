const express = require('express')
const app = express()

const { verificaToken } = require('./../middlewares/auth')

const Respuesta = require('./respuesta')
const respuesta = new Respuesta()

const UsuariosServicio = require('./../servicios/usuarios.servicio')
const usuariosServicio = new UsuariosServicio()

app.get('/usuarios/:id?', verificaToken, async (req, res) => {
  try {
    return respuesta.exitosa(res, [])
  } catch ( err ) { respuesta.errorServidor(res, err)}
})

app.post('/login', async (req, res) => {
  try {
    let usuario = await usuariosServicio.login(req.body)
    return respuesta.exitosa(res, usuario)
  } catch ( err ) { respuesta.errorServidor(res, err)}
})

app.get('/token', verificaToken, async (req, res) => {
  try {
    let token = await usuariosServicio.refrescarToken(req.usuario)
    return respuesta.exitosa(res, token)
  } catch ( err ) { return respuesta.errorServidor(res, err)}
})


module.exports = app