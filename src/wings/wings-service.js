const WingsService = {
    getAllWings(knex) {
        return knex.select('*').from('wings_and_things')
    },
    getCategories(knex) {
        return knex.from('wings_and_things').distinct().pluck('category').then(function (categories) { return categories })
    },
    getById(knex, id) {
        return knex.select('*').from('wings_and_things').where('id', id).first()
    },
    getByCategory(knex, category) {
        return knex.from('wings_and_things').select('*').where('category', category)
    }
}

module.exports = WingsService;