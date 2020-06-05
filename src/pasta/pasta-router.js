const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const PastaService = require('./pasta-service.js')

const pastaRouter = express.Router()
const jsonParser = express.json()

const serializePasta = pasta => ({
    id: pasta.id,
    title: pasta.title,
    category: pasta.category,
    price: pasta.price,
    ingredients: pasta.ingredients,
    url: pasta.url
})


pastaRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        PastaService.getAllPasta(knexInstance)
            .then(pasta => res.json(pasta.map(serializePasta)))
            .catch(next)
    })

module.exports = pastaRouter;