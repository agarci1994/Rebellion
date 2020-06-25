// Enviroment variables
require('dotenv').config();

// Application instance
const express = require('express')
const app = express()
      
// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)

// Base URLS
app.use('/api/cloudinary', require('./routes/cloudinary.routes'))
      

module.exports = app;
