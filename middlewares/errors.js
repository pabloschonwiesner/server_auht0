const path = require('path')

module.exports.error404 = function ( req, res, next ) {
  res.status(404).sendFile(path.join(__dirname, '/../public/404.html'));
}

module.exports.generalErrorHandler = function ( req, res, next ) {
  // set locals, only providing error  in development
  res.locals.message =  err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
}