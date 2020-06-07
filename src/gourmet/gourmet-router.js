const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const GourmetService = require('./gourmet-service.js')

const gourmetRouter = express.Router()
const jsonParser = express.json()

const serializeGourmet = gourmet => ({
    id: gourmet.id,
    title: gourmet.title,
    category: gourmet.category,
    ingredients: gourmet.ingredients,
    url: gourmet.url
})


gourmetRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        GourmetService.getAllGourmet(knexInstance)
            .then(gourmet => {
                res.json(gourmet.map(serializeGourmet))
            })
    })

module.exports = gourmetRouter;