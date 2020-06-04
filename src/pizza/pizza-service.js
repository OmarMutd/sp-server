const PizzaService = {
    getAllPizzas(knex) {
        return knex.select('*').from('pizza')
    },
    getCategories(knex) {
        return knex.from('pizza').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('pizza').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('pizza').select('*').where('category', category)
    }
}

module.exports = PizzaService;