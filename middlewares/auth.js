const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const verificaToken = (req, res, next) => {
  let token = req.headers['token']
  jwt.verify(token, SECRET, (err, decoded) => {
    // si el token no corresponde o venció envía un error
    if(err) {
      return res.status(401).json({
        err: {
          message: 'Token no valido'
        }
      })
    } 
    req.usuario = decoded.data;
    next();
  })
}

module.exports = { verificaToken }