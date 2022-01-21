
module.exports = class serverError extends Error {
  constructor (paramName) {
    super('Internal server error')
    this.name = 'Internal server error'
  }
}
