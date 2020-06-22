const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')
const knex = require('knex')
const helpers = require('./test-helpers')

describe('Gourmet Endpoint', function () {
    let db

    const {
        testProducts,
        testUsers,
        testInvoices,
        testInvoice_Products
    } = helpers.makeFixtures()

    before('make knex instance', (done) => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
        done()
    })

    beforeEach('seed database', () =>
        helpers.seeds(db, testUsers, testProducts, testInvoices, testInvoice_Products))

    after('disconnect from db', () => db.destroy())

    before('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe(`GET /api/cart`, () => {
        context(`Given valid user id and non-checked out invoice`, () => {
            it(`responds with 200 and current cart`, () => {
                return supertest(app)
                    .get(`/api/cart`)
                    .set('Authorization', helpers.makeAuthHeader(testUsers[0]))
                    .expect(200)
            })
        })
    })
})