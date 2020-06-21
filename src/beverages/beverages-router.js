const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const BeveragesService = require('./beverages-service.js')

const beverageRouter = express.Router()
const jsonParser = express.json()

const serializeBeverage = beverage => ({
    id: beverage.id,
    title: beverage.title,
    category: beverage.category,
    price: beverage.price,
    url: beverage.url
})


beverageRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        BeveragesService.getAllBeverages(knexInstance)
            .then(beverage => {
                res.json(beverage.map(serializeBeverage))
            })
    })

module.exports = beverageRouter;