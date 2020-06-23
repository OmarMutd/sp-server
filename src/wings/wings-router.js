const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const WingsService = require('./wings-service.js')

const wingsRouter = express.Router()
const jsonParser = express.json()

const serializePasta = wing => ({
    id: wing.id,
    title: wing.title,
    category: wing.category,
    multiprice: wing.multiprice,
    url: wing.url
})


wingsRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        WingsService.getAllWings(knexInstance)
            .then(wings => {
                res.json(wings.map(serializePasta))
            })
    })

module.exports = wingsRouter;