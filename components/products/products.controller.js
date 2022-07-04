const response = require('../../routes/utils/response')
const { logger } = require('../../services/logging/logger')

module.exports = {
  async getProducts(req, res) {
    try {
      // const id = req.params.id
      console.log('getProducts');
      return response.success(res, { ok: true });
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async createProduct(req, res) {
    try {
      console.log('createProduct');
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async updateProduct(req, res) {
    try {
      console.log('updateProduct');
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async deleteProduct(req, res) {
    try {
      console.log('deleteProduct');
      return res.status(204)
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

}
