require('dotenv').config();
// host: '127.0.0.1', port: 5432, database: 'chatserver', username: 'dunder_mifflin'

module.exports = {
    migrationsDirectory: 'migrations',
    driver: 'pg',
    "connectionString": (process.env.NODE_ENV === 'test')
        ? process.env.TEST_DATABASE_URL
        : process.env.DATABASE_URL,
}