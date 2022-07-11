const { auth, claimIncludes } = require('express-oauth2-jwt-bearer');
const { ISSUER_BASE_URL, AUDIENCE } = require('./../config/config')
const parseJwt = require('./../services/utils/parseJwt')

const checkJwt = auth({
  audience: AUDIENCE,
  issuerBaseURL: ISSUER_BASE_URL,
});

const requiredPermissions = claimIncludes.bind(null, 'permissions')

function decodeJsonWebToken(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization.split(' ')[1]
  req.org_id = parseJwt(token).org_id
  next()
}

module.exports = { checkJwt, requiredPermissions, decodeJsonWebToken }
