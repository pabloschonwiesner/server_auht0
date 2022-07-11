const response = require('../../routes/utils/response')
const { logger } = require('../../services/logging/logger')

module.exports = {
  async getProducts(req, res) {
    try {
      // const id = req.params.id
      console.log('getProducts');
      console.log(`ord_id: ${req.org_id}`)

      return response.success(res, { ok: true });
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async createProduct(req, res) {
    try {
      console.log('createProduct');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async updateProduct(req, res) {
    try {
      console.log('updateProduct');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async deleteProduct(req, res) {
    try {
      console.log('deleteProduct');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

}
