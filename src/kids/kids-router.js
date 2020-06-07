const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const kidsService = require('./kids-service.js')

const kidsRouter = express.Router()
const jsonParser = express.json()

const serializeKids = kid => ({
    id: kid.id,
    title: kid.title,
    category: kid.category,
    price: kid.price,
    url: kid.url
})


kidsRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        kidsService.getAllKids(knexInstance)
            .then(kids => {
                res.json(kids.map(serializeKids))
            })
    })

module.exports = kidsRouter;