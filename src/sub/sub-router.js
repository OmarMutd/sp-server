const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const SubService = require('./sub-service.js')

const subsRouter = express.Router()
const jsonParser = express.json()

const serializeSub = sub => ({
    id: sub.id,
    title: sub.title,
    category: sub.category,
    price: sub.price,
    ingredients: sub.ingredients,
    url: sub.url
})


subsRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        SubService.getAllSubs(knexInstance)
            .then(subs => {
                res.json(subs.map(serializeSub))
            })
    })

module.exports = subsRouter;