require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./error-handler');
const pastaRouter = require('./pasta/pasta-router');
const dessertsRouter = require('./desserts/desserts-router');
const gourmetRouter = require('./gourmet/gourmet-router');
const kidsRouter = require('./kids/kids-router');
const soupsaladRouter = require('./soups-and-salads/soups-and-salads-router');
const subRouter = require('./sub/sub-router');
const wingsRouter = require('./wings/wings-router');
const beverageRouter = require('./beverages/beverages-router');



const app = express()



const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use(function errorHandler(error, req, res, next) {
  let response
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } }
  } else {
    console.error(error)
    response = { message: error.message, error }
  }
  res.status(500).json(response)
})


app
  .use(morgan(morganOption))
  .use(helmet())
  .use(cors())



app.use('/api/pasta', pastaRouter)
app.use('/api/desserts', dessertsRouter)
app.use('/api/gourmet', gourmetRouter)
app.use('/api/kids', kidsRouter)
app.use('/api/soupsalad', soupsaladRouter)
app.use('/api/sub', subRouter)
app.use('/api/wings', wingsRouter)
app.use('/api/beverages', beverageRouter)

app.use(errorHandler)


module.exports = app;