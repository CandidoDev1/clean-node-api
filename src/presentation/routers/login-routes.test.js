class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.Body.email) {
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
})
