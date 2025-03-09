class LoginRouter {
  route (httpRequest) {
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
})
