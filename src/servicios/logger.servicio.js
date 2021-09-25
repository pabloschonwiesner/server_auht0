const log4js = require('log4js')
 
log4js.configure({
  appenders: { 
    fileError: { type: 'dateFile', filename: './logs/errores.log'},
    console: { type: 'console'}
  },
  categories: {
    default: { appenders: [ 'console', 'fileError'], level: 'info'},
    consoleOnly: { appenders: [ 'console'], level: 'trace'},
  }
})
const logger = log4js.getLogger()
const loggerCO = log4js.getLogger('consoleOnly')


module.exports = { logger, loggerCO }