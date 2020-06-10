const BeveragesService = {
    getAllBeverages(knex) {
        return knex.select('*').from('beverages')
    },
    getCategories(knex) {
        return knex.from('beverages').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('beverages').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('beverages').select('*').where('category', category)
    }
}

module.exports = BeveragesService;