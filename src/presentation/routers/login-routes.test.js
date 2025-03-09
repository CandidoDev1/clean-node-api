import { LoginRouter } from '../routers'
import { MissingParamError } from '../helpers/missing-param-error'

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
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
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
    const httpReponse = sut.route({})
    expect(httpReponse.statusCode).toBe(500)
  })
})
