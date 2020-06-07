require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./error-handler');
const pastaRouter = require('./pasta/pasta-router');


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
app.use(errorHandler)


module.exports = app;