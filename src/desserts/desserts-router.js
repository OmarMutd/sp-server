const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const DessertsService = require('./desserts-service.js')

const dessertRouter = express.Router()
const jsonParser = express.json()

const serializeDessert = dessert => ({
    id: dessert.id,
    title: dessert.title,
    category: dessert.category,
    price: dessert.price,
    url: dessert.url
})


dessertRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        DessertsService.getAllDessert(knexInstance)
            .then(dessert => {
                res.json(dessert.map(serializeDessert))
            })
    })

module.exports = dessertRouter;