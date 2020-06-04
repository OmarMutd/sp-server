const DessertsService = {
    getAllPizzas(knex) {
        return knex.select('*').from('desserts')
    },
    getCategories(knex) {
        return knex.from('desserts').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('desserts').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('desserts').select('*').where('category', category)
    }
}

module.exports = DessertsService;