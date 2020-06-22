const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Beverage Endpoint', function () {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe(`GET /api/beverages`, () => {
        context(`Happy path`, () => {
            it('responds 200 ', () => {
                return supertest(app)
                    .get('/api/beverages')
                    .expect(200)
            })
        })
    })
})