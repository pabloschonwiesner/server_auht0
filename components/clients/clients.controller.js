const response = require('../../routes/utils/response')
const { logger } = require('../../services/logging/logger')

module.exports = {
  async getClients(req, res) {
    try {
      // const id = req.params.id
      console.log('getClients');
      return response.success(res, { ok: true });
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async createClient(req, res) {
    try {
      console.log('createClient');
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async updateClient(req, res) {
    try {
      console.log('updateClient');
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async deleteClient(req, res) {
    try {
      console.log('deleteClient');
      return res.status(204)
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

}
