const request = require('supertest')
const app = require('../../app')

/**
 * Testing get all users endpoint
 */

it('respond with containing a list of all users', done => {
  request(app)
    .get('/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)
})

describe('GET /users/:id?', () => {
  it('if the id parameter is not sended respond a list of all users actives', done => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})