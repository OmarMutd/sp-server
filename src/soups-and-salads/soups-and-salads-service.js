const SoupSaladService = {
    getAllSoupSalads(knex) {
        return knex.select('*').from('soups_and_salads')
    },
    getCategories(knex) {
        return knex.from('soups_and_salads').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('soups_and_salads').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('soups_and_salads').select('*').where('category', category)
    }
}

module.exports = SoupSaladService;