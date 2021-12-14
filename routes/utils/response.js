module.exports = {
  success ( res, document) {
    return res.status(200).json({
      err: {},
      data: document
    })
  },

  withoutAuthorization (res) {
    return res.status(401).json({
      err: {
        message: 'Invalid token',
        details: ''
      }
    })
  },

  serverError(res, err) {
    return res.status(500).json({
      err: {
        message: 'Server error',
        details: err.message
      }
    })
  }
}
