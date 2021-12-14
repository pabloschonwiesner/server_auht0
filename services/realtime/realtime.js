let connection = null

class RealTime {
  constructor () {
    this._socket = null
  }
  connect ( server ) {
    const io = require('socket.io')(server)

    io.on('connection', socket => {
      this._socket = socket
      this._socket.on('disconnect', function () {
        console.log(socket.id,"Un socket se desconecto");
      });

      console.log(`New socket connection: ${socket.id}`);
    })

    io.on('error', err => console.log({err}))
  }
  sendEvent(event, data) {
    if ( _socket != null ) {
      this._socket.emit(event, data)
    }
  }
  static init ( server ) {
    if(!connection) {
      connection = new RealTime()
      connection.connect(server)
    }
  }

  static getConnection () {
    if(!connection) {
      console.log('no hay conexion')
      throw new Error('No hay conexion socket')
    }
    console.log('getConnection hay conexion');
    return connection
  }
}

module.exports = {
  connect: RealTime.init,
  connection: RealTime.getConnection
}