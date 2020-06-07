const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const SoupSaladService = require('./soups-and-salads-service.js')

const soupsaladRouter = express.Router()
const jsonParser = express.json()

const serializeSoupSalad = soupsalad => ({
    id: soupsalad.id,
    title: soupsalad.title,
    category: soupsalad.category,
    price: soupsalad.price,
    url: soupsalad.url
})


soupsaladRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        SoupSaladService.getAllSoupSalads(knexInstance)
            .then(soup => {
                res.json(soup.map(serializeSoupSalad))
            })
    })

module.exports = soupsaladRouter;