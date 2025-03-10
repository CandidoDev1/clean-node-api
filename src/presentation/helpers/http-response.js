const MissingParamError = require('../helpers/missing-param-error')
const ServerError = require('../helpers/missing-param-error')

module.exports = class HttpReponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError (paramName) {
    return {
      statusCode: 500,
      body: new ServerError(paramName)
    }
  }
}
