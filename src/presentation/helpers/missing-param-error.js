module.exports = class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
module.exports = class ServerError extends Error {
  constructor (paramName) {
    super(`Not Provided: ${paramName}`)
    this.name = 'ServerError'
  }
}
