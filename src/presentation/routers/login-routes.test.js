class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.Body) {
      return {
        statusCode: 500
      }
    }
    const { email, password } = httpRequest.Body
    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}
// test case
describe('Login Router', () => {
  test('should return 400 if no emails is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      Body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  // test verification if password is not provided
  test('should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      Body: {
        email: 'test@gmail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
  // Test when httpReponse is not provide or received error type
  test('should return 500 if no httpResponse is provided', () => {
    const sut = new LoginRouter()

    const httpReponse = sut.route()
    expect(httpReponse.statusCode).toBe(500)
  })
  // Test whe httpResponse receive httpRequest has no body
  test('should return 500 if no httpRequest has no Body', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpReponse = sut.route(httpRequest)
    expect(httpReponse.statusCode).toBe(500)
  })
})
