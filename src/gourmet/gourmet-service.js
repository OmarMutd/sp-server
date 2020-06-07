const GourmetService = {
    getAllGourmet(knex) {
        return knex.select('*').from('gourmet')
    },
    getCategories(knex) {
        return knex.from('gourmet').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('gourmet').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('gourmet').select('*').where('category', category)
    }
}

module.exports = GourmetService;
