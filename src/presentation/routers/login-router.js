import { HttpReponse } from '../helpers/http-response'
export default class LoginRouter {
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
