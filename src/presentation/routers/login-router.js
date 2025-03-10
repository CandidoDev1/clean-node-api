const HttpReponse = require('../helpers/http-response')

module.exports = class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.Body) {
      return HttpReponse.serverError()
    }
    const { email, password } = httpRequest.Body
    if (!email) {
      return HttpReponse.badRequest('email')
    }
    if (!password) {
      return HttpReponse.badRequest('password')
    }
  }
}
