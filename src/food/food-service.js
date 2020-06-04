const FoodService = {
    getAllProducts(knex) {
        return knex.select('*').from('menu')
    },
    getCategories(knex) {
        return knex.from('menu').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('menu').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('menu').select('*').where('category', category)
    }
}

module.exports = FoodService;