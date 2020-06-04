const KidsService = {
    getAllPizzas(knex) {
        return knex.select('*').from('more_for_kids')
    },
    getCategories(knex) {
        return knex.from('more_for_kids').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('more_for_kids').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('more_for_kids').select('*').where('category', category)
    }
}

module.exports = KidsService;