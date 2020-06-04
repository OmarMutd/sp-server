const SubService = {
    getAllPizzas(knex) {
        return knex.select('*').from('subs')
    },
    getCategories(knex) {
        return knex.from('subs').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('subs').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('subs').select('*').where('category', category)
    }
}

module.exports = SubService;