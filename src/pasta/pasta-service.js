const PastaService = {
    getAllPizzas(knex) {
        return knex.select('*').from('pasta')
    },
    getCategories(knex) {
        return knex.from('pasta').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('pasta').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('pasta').select('*').where('category', category)
    }
}

module.exports = PastaService;