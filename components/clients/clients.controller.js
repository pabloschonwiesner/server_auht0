const response = require('../../routes/utils/response')
const { logger } = require('../../services/logging/logger')

module.exports = {
  async getClients(req, res) {
    try {
      // const id = req.params.id
      console.log('getClients');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true });
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async createClient(req, res) {
    try {
      console.log('createClient');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async updateClient(req, res) {
    try {
      console.log('updateClient');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

  async deleteClient(req, res) {
    try {
      console.log('deleteClient');
      console.log(`ord_id: ${req.org_id}`)
      return response.success(res, { ok: true })
    } catch (err) { logger.error(err); return response.serverError(res, err) }
  },

}
